package bupt.hbq.spring.service;

import java.io.EOFException;
import java.io.File;
import java.net.InetAddress;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Set;
import java.util.concurrent.TimeoutException;

import org.pcap4j.core.NotOpenException;
import org.pcap4j.core.PcapHandle;
import org.pcap4j.core.PcapNativeException;
import org.pcap4j.core.Pcaps;
import org.pcap4j.packet.IpPacket;
import org.pcap4j.packet.Packet;
import org.pcap4j.packet.TcpPacket;
import org.pcap4j.packet.TcpPacket.TcpHeader;
import org.pcap4j.packet.UdpPacket.UdpHeader;
import org.pcap4j.packet.UdpPacket;
import org.pcap4j.packet.namednumber.TcpPort;
import org.pcap4j.packet.namednumber.UdpPort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import bupt.hbq.spring.event.TrojanDetectionEvent;
import bupt.hbq.spring.event.TrojanPcapEvent;
import bupt.hbq.spring.objects.info.TrojanInfo;

import org.pcap4j.packet.IpPacket.IpHeader;
@Service
public class TrojanPcap {
	private static final int PACKET_SIZE = 784;
	@Autowired
	private ApplicationContext applicationContext;
	public void register(TrojanInfo trojanInfo) {
		applicationContext.publishEvent(new TrojanPcapEvent(this, trojanInfo));
	}
	public void registerTrojanDetection(HashMap<String, int[]> intMap,TrojanInfo trojanInfo) {
		applicationContext.publishEvent(new TrojanDetectionEvent(this, intMap,trojanInfo));
	}
	public void trojanPcapToPng(File pcapFile,TrojanInfo trojanInfo) {
		PcapHandle handle = null;
		try {
			handle = Pcaps.openOffline(pcapFile.getPath());
			HashMap<String, ArrayList<byte[]>> fiveArrayMap = new HashMap<String, ArrayList<byte[]>>();
			int packetNum = 0;
			long start,end;
			start = System.currentTimeMillis();
			System.out.println(Thread.currentThread()+" "+pcapFile.getName()+" begin");
			while(true) {
				try {
					Packet packet = handle.getNextPacketEx();
					packetNum++;
					if (packet.contains(IpPacket.class)) {
						IpPacket ipPacket = packet.get(IpPacket.class);
						IpHeader ipHeader = ipPacket.getHeader();
						InetAddress srcAddress = ipHeader.getSrcAddr();
						InetAddress desAddress = ipHeader.getDstAddr();
						String srcFlow = null,desFlow = null,udpOrTcp = null;
						byte[] payload = null;
						if (ipPacket.contains(TcpPacket.class)) {
							TcpPacket tcpPacket = ipPacket.get(TcpPacket.class);
							TcpHeader tcpHeader = tcpPacket.getHeader();
							TcpPort srcPort = tcpHeader.getSrcPort();
							TcpPort desPort = tcpHeader.getDstPort();
							srcFlow = srcAddress.getHostAddress()+"_"+srcPort.valueAsString();
							desFlow = desAddress.getHostAddress()+"_"+desPort.valueAsString();
							udpOrTcp = "TCP";
							payload = tcpPacket.getPayload() == null?null:tcpPacket.getPayload().getRawData();
						}
						else if (ipPacket.contains(UdpPacket.class)) {
							UdpPacket udpPacket = ipPacket.get(UdpPacket.class);
							UdpHeader udpHeader = udpPacket.getHeader();
							UdpPort srcPort = udpHeader.getSrcPort();
							UdpPort desPort = udpHeader.getDstPort();
							srcFlow = srcAddress.getHostAddress()+"_"+srcPort.valueAsString();
							desFlow = desAddress.getHostAddress()+"_"+desPort.valueAsString();
							udpOrTcp = "UDP";
							payload = udpPacket.getPayload() == null?null:udpPacket.getPayload().getRawData();
						}
						if (udpOrTcp != null && payload != null) {
							if (!fiveArrayMap.containsKey(udpOrTcp+"_"+srcFlow+"_"+desFlow) && 
									!fiveArrayMap.containsKey(udpOrTcp+"_"+desFlow+"_"+srcFlow)) {
								ArrayList<byte[]> packets = new ArrayList<byte[]>();
								packets.add(payload);
								fiveArrayMap.put(udpOrTcp+"_"+srcFlow+"_"+desFlow, packets);
							}
							else {
								String key = null;
								if (fiveArrayMap.containsKey(udpOrTcp+"_"+srcFlow+"_"+desFlow)) {
									key = udpOrTcp+"_"+srcFlow+"_"+desFlow;
								}
								else {
									key = udpOrTcp+"_"+desFlow+"_"+srcFlow;
								}
								ArrayList<byte[]> getPackets = fiveArrayMap.get(key);
								int size = 0;
								boolean isSame = false;
								for (int i = 0; i < getPackets.size() && size < PACKET_SIZE && !isSame; i++) {
									size += getPackets.get(i).length;
									isSame = Arrays.equals(payload, getPackets.get(i));
								}
								if (!isSame && size < PACKET_SIZE) {
									getPackets.add(payload);
								}
							}
						}
					}
				} catch (TimeoutException e) {
		      		System.out.println("Time out");
		      		break;
		      	} catch (NotOpenException e) {
		      		System.out.println("Not open");
		      		break;
				} catch (EOFException e) {
		      		System.out.println("EOF");
		      		break;
		      	} catch (ArrayIndexOutOfBoundsException e) {
					System.out.println("Array out of Bounds");
				}
			}
			HashMap<String, int[]> intMap = trimToSize(fiveArrayMap);
			fiveArrayMap.clear();
			trojanInfo.setPackageNum(packetNum);
			register(trojanInfo);
			registerTrojanDetection(intMap, trojanInfo);
			end = System.currentTimeMillis();
			System.out.println((end - start)+" "+pcapFile.getName()+" end");
		} catch (PcapNativeException e) {
			e.printStackTrace();
		}finally {
			if (handle!=null) {
				handle.close();
			}
		}
	}
	private HashMap<String, int[]> trimToSize(HashMap<String, ArrayList<byte[]>> in){
		HashMap<String, int[]> outHashMap = new HashMap<String, int[]>();
		Set<Entry<String, ArrayList<byte[]>>> set = in.entrySet();
		set.forEach(s->{
			int length = PACKET_SIZE;
			int[] out = new int[PACKET_SIZE];
			ArrayList<byte[]> arrayList = s.getValue();
			for (int i = 0; i < arrayList.size() && length > 0; i++) {
				byte[] bs = arrayList.get(i);
				int[] intArray = new int[bs.length];
				for (int j = 0; j < bs.length; j++) {
					intArray[i] = bs[i];
				}
				if (length >= intArray.length) {
					System.arraycopy(intArray, 0, out, PACKET_SIZE-length, intArray.length);
					length -= arrayList.get(0).length;
				}
				else {
					System.arraycopy(intArray, 0, out, PACKET_SIZE-length, length);
					length = 0;
				}
			}
			outHashMap.put(s.getKey(), out);
		});
		return outHashMap;
	}
}

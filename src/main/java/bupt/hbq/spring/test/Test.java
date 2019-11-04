package bupt.hbq.spring.test;

import java.io.EOFException;
import java.io.IOException;
import java.net.InetAddress;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;
import java.util.Map.Entry;
import java.util.concurrent.TimeoutException;

import org.pcap4j.core.NotOpenException;
import org.pcap4j.core.PcapHandle;
import org.pcap4j.core.PcapNativeException;
import org.pcap4j.core.Pcaps;
import org.pcap4j.packet.IpPacket;
import org.pcap4j.packet.IpPacket.IpHeader;
import org.pcap4j.packet.TcpPacket.TcpHeader;
import org.pcap4j.packet.UdpPacket.UdpHeader;
import org.pcap4j.packet.Packet;
import org.pcap4j.packet.TcpPacket;
import org.pcap4j.packet.UdpPacket;
import org.pcap4j.packet.namednumber.TcpPort;
import org.pcap4j.packet.namednumber.UdpPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@ToString @EqualsAndHashCode
public class Test {
	private static final int DETECT_PACKET_SIZE = 2000;
	public static void main(String[] args)throws Exception{
		//test http post
		String path = "src/main/resources/static/trojanImages/normal.png";
		Test test = new Test();
		HashMap<String, int[]> byteMap = test.trojanPcapToPng();
		ArrayList<HashMap<String, Object>> resultAll = new ArrayList<HashMap<String,Object>>();
		Set<Entry<String, int[]>> set = byteMap.entrySet();
		ArrayList<int[]> in = new ArrayList<int[]>();
		ArrayList<String> strings = new ArrayList<String>();
		int index = 0;
		for (Iterator<Entry<String, int[]>> iterator = set.iterator(); iterator.hasNext();index++) {
			Entry<String, int[]> entry = iterator.next();
			in.add(entry.getValue());
			strings.add(entry.getKey());
			if (index == DETECT_PACKET_SIZE) {
				ArrayList<HashMap<String, Object>> resultArrayList = test.detectResult(in);
				System.out.println(resultArrayList);
				resultAll.addAll(resultArrayList);
				in.clear();
				index = 0;
			}
		}
		if (in.size() != 0) {
			ArrayList<HashMap<String, Object>> resultArrayList = test.detectResult(in);
			System.out.println(resultArrayList);
			resultAll.addAll(resultArrayList);
		}
		System.out.println(strings.size()+":"+resultAll.size());
		strings.forEach(s->{
			System.out.println(s);
		});
	}
	private static final String URL = "http://10.3.200.130:8501/v1/models/cnn:predict";
	@SuppressWarnings("unchecked")
	private ArrayList<HashMap<String, Object>> detectResult(ArrayList<int[]> in){
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
		HashMap<String, ArrayList<int[]>> map = new HashMap<String, ArrayList<int[]>>();
		in.trimToSize();
		map.put("instances",in);
		HttpEntity<HashMap<String, ArrayList<int[]>>> request = new HttpEntity<HashMap<String,ArrayList<int[]>>>(map,headers);
		ResponseEntity<String> responseEntity = restTemplate.postForEntity(URL, request, String.class);
		ObjectMapper mapper = new ObjectMapper();
		HashMap<String, ArrayList<HashMap<String, Object>>> result;
		try {
			result = mapper.readValue(responseEntity.getBody(), HashMap.class);
			return result.get("predictions");
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	private static final String PCAP_PATH = "src/main/resources/dataInput/dns/shell/20191024/test.pcap";
	private static final int PACKET_SIZE = 784;
	public HashMap<String, int[]> trojanPcapToPng() throws PcapNativeException {
		PcapHandle handle;
		handle = Pcaps.openOffline(PCAP_PATH);
		HashMap<String, ArrayList<byte[]>> fiveArrayMap = new HashMap<String, ArrayList<byte[]>>();
		long start,end;
		start = System.currentTimeMillis();
		System.out.println(Thread.currentThread()+" "+PCAP_PATH+" begin");
		while(true) {
			try {
				Packet packet = handle.getNextPacketEx();
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
		handle.close();
		HashMap<String, int[]> byteMap = trimToSize(fiveArrayMap);
		fiveArrayMap.clear();
		byteMap.forEach((k,v)->{
			System.out.println(k);
		});
		end = System.currentTimeMillis();
		System.out.println((end - start)+" "+PCAP_PATH+" end");
		return byteMap;
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

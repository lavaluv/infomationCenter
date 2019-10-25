package bupt.hbq.spring.service;

import java.io.EOFException;
import java.io.File;
import java.io.IOException;
import java.net.Inet4Address;
import java.net.Inet6Address;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.nio.charset.Charset;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.concurrent.TimeoutException;

import org.pcap4j.core.NotOpenException;
import org.pcap4j.core.PcapHandle;
import org.pcap4j.core.PcapNativeException;
import org.pcap4j.core.Pcaps;
import org.pcap4j.packet.DnsPacket;
import org.pcap4j.packet.DnsQuestion;
import org.pcap4j.packet.DnsResourceRecord;
import org.pcap4j.packet.IpPacket;
import org.pcap4j.packet.Packet;
import org.pcap4j.packet.TcpPacket;
import org.pcap4j.packet.UdpPacket;
import org.pcap4j.packet.DnsPacket.DnsHeader;
import org.pcap4j.packet.IpPacket.IpHeader;
import org.pcap4j.packet.namednumber.DnsClass;
import org.pcap4j.packet.namednumber.DnsOpCode;
import org.pcap4j.packet.namednumber.DnsResourceRecordType;

import com.csvreader.CsvWriter;
import com.maxmind.geoip2.DatabaseReader;
import com.maxmind.geoip2.exception.GeoIp2Exception;
import com.maxmind.geoip2.model.AsnResponse;
import com.maxmind.geoip2.model.CountryResponse;

import bupt.hbq.spring.test.Test;

public class DNSPcap {
	private static final String PCAP_OUT = "dataInput/dns/csv/";
	private static final String COUNTRY_DATABASE = "dataInput/dns/geoIP/GeoLite2-Country.mmdb";
	private static final String ASN_DATABASE = "dataInput/dns/geoIP/GeoLite2-ASN.mmdb";
	//@org.junit.Test
	public static void pcapToCsv(File pcapFile) throws PcapNativeException, NotOpenException, InterruptedException, IOException{
	    PcapHandle handle;
	    handle = Pcaps.openOffline(pcapFile.getPath());
		File countryData = new File(COUNTRY_DATABASE);
		DatabaseReader countryReader = new DatabaseReader.Builder(countryData).build();
		File asnData = new File(ASN_DATABASE);
		DatabaseReader asnReader = new DatabaseReader.Builder(asnData).build();
	    HashMap<String, double[]> outMap = new HashMap<String, double[]>();
	    HashMap<String, Integer> map = new HashMap<String, Integer>(); 
		CsvWriter csvWriter = new CsvWriter(PCAP_OUT+pcapFile.getName().split("\\.")[0]+".csv", ',',Charset.forName("GBK"));
		String[] header = {"name","ip_nums","asn_nums","country_nums","Querty_time","Message Size"};
		csvWriter.writeRecord(header);
	    while(true) {
	      try {
	        Packet packet = handle.getNextPacketEx();
	        Timestamp ts = handle.getTimestamp();
	        if (packet.contains(IpPacket.class)) {
				IpPacket ipPacket = packet.get(IpPacket.class);
				IpHeader ipHeader = ipPacket.getHeader();
				InetAddress srcAddress = ipHeader.getSrcAddr();
				InetAddress desAddress = ipHeader.getDstAddr();
				if (ipPacket.contains(UdpPacket.class) || ipPacket.contains(TcpPacket.class)) {
					Packet udpOrIpPacket = ipPacket.contains(UdpPacket.class)?(UdpPacket)ipPacket.get(UdpPacket.class):
						(TcpPacket)ipPacket.get(TcpPacket.class);
					if (udpOrIpPacket.contains(DnsPacket.class)) {
						DnsPacket dnsPacket = udpOrIpPacket.get(DnsPacket.class);
						DnsHeader dnsHeader = dnsPacket.getHeader();
						if (dnsHeader.getOpCode() == DnsOpCode.QUERY) {
							if (dnsHeader.getQdCount() == 1) {
								DnsQuestion question = dnsHeader.getQuestions().get(0);
								if ((question.getQType() == DnsResourceRecordType.A || 
										question.getQType() == DnsResourceRecordType.AAAA) &&
										question.getQClass() == DnsClass.IN) {
									if (!dnsHeader.isResponse()) {
										map.put(srcAddress.getHostAddress()+desAddress.getHostAddress()+
												String.valueOf(dnsHeader.getId()),ts.getNanos());									
									}
									else {
										List<DnsResourceRecord> records = dnsHeader.getAnswers();
										int c_an = dnsHeader.getAnCount();
										for (DnsResourceRecord r : records) {
											if (r.getDataType() != DnsResourceRecordType.A &&
													r.getDataType() != DnsResourceRecordType.AAAA) {
												c_an--;
											}
										}
										if (c_an > 0) {
											HashSet<String> country = new HashSet<String>();
											HashSet<Integer> asn = new HashSet<Integer>();
											//hostName
											String hostName = question.getQName().getName();
											String name = desAddress.getHostAddress()+srcAddress.getHostAddress()+
													String.valueOf(dnsHeader.getId());	
											//ipNums
											int ipNums = 0;	
											//queryTime
											double queryTime = 0;
											if (map.containsKey(name)) {
												queryTime = (ts.getNanos() - map.get(name)) > 0?
														(ts.getNanos() - map.get(name))/1000000.0:1000+(ts.getNanos() - map.get(name))/1000000.0;
												map.remove(name);
											}
											//asnNum,countryNum
											for (DnsResourceRecord r : records) {
												try {
													String inetAddress = "";
													if (r.getDataType() == DnsResourceRecordType.A && r.getDataClass() == DnsClass.IN) {
														inetAddress = Inet4Address.getByAddress(r.getRData().getRawData()).getHostAddress();
														ipNums++;
													}
													else if (r.getDataType() == DnsResourceRecordType.AAAA && r.getDataClass() == DnsClass.IN) {
														inetAddress = Inet6Address.getByAddress(r.getRData().getRawData()).getHostAddress();
														ipNums++;
													}
													CountryResponse countryResponse = countryReader.country(InetAddress.getByName(inetAddress));
													AsnResponse asnResponse = asnReader.asn(InetAddress.getByName(inetAddress));
													if (!country.contains(countryResponse.getCountry().getName())) {
														country.add(countryResponse.getCountry().getName());
													}
													if (!asn.contains(asnResponse.getAutonomousSystemNumber())) {
														asn.add(asnResponse.getAutonomousSystemNumber());
													}
												} catch (UnknownHostException e) {
													//TODO
												}catch (GeoIp2Exception e2) {
													//TODO
												}
											}
											if (outMap.containsKey(hostName)) {
												double[] old = outMap.get(hostName);
												old[0]++;
												old[1] += ipNums;
												old[2] += asn.size();
												old[3] += country.size();
												old[4] += queryTime;
												old[5] += dnsPacket.length();
											}
											else {
												outMap.put(hostName,new double[]{1,ipNums,
														asn.size(),
														country.size(),
														queryTime,
														dnsPacket.length()});
											}
										}
									}
								}
							}
						}
					}
				}
			}
	    } catch (TimeoutException e) {} 
	      catch (EOFException e) {
	      		System.out.println("EOF");
	      		break;
	      }
	    }
	    handle.close();
		outMap.forEach((String name,double[] in)->{
			String[] out = new String[6];
			out[0] = name;
			out[1] = String.valueOf(in[1]/in[0]);
			out[2] = String.valueOf(in[2]/in[0]);
			out[3] = String.valueOf(in[3]/in[0]);
			out[4] = String.valueOf(in[4]/in[0]);
			out[5] = String.valueOf(in[5]/in[0]);
			try {
				csvWriter.writeRecord(out);
			} catch (IOException e) {
				e.printStackTrace();
			}
		});
	    csvWriter.close();
	}
}

package bupt.hbq.spring.event;

import java.util.HashMap;
import java.util.HashSet;

import org.springframework.context.ApplicationEvent;

import bupt.hbq.spring.objects.info.DnsInfo;

public class HostDetectionEvent extends ApplicationEvent{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8712202535095621541L;
	private String CsvPath;
	private DnsInfo dnsInfo;
	private HashMap<String, HashSet<String>> srcIpDesIp;
	private HashMap<String, HashSet<String>> city;
	public HostDetectionEvent(Object source,String csvString,HashMap<String, HashSet<String>> srcIpDesIp, HashMap<String, HashSet<String>> city,
			DnsInfo dnsInfo) {
		super(source);
		this.CsvPath = csvString;
		this.dnsInfo = dnsInfo;
		this.srcIpDesIp =srcIpDesIp;
		this.city = city;
	}
	public String getCsvPath() {
		return CsvPath;
	}
	public void setCsvPath(String csvPath) {
		CsvPath = csvPath;
	}
	public DnsInfo getDnsInfo() {
		return dnsInfo;
	}
	public void setDnsInfo(DnsInfo dnsInfo) {
		this.dnsInfo = dnsInfo;
	}
	public HashMap<String, HashSet<String>> getSrcIpDesIp() {
		return srcIpDesIp;
	}
	public void setSrcIpDesIp(HashMap<String, HashSet<String>> srcIpDesIp) {
		this.srcIpDesIp = srcIpDesIp;
	}
	public HashMap<String, HashSet<String>> getCity() {
		return city;
	}
	public void setCity(HashMap<String, HashSet<String>> city) {
		this.city = city;
	}
	
}

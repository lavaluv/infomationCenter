package bupt.hbq.spring.event;

import org.springframework.context.ApplicationEvent;

import bupt.hbq.spring.objects.info.DnsInfo;
import bupt.hbq.spring.objects.info.Info;

public class HostDetectionEvent extends ApplicationEvent{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8712202535095621541L;
	private String CsvPath;
	private DnsInfo dnsInfo;
	public HostDetectionEvent(Object source,String csvString,DnsInfo dnsInfo) {
		super(source);
		this.CsvPath = csvString;
		this.dnsInfo = dnsInfo;
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
	
}

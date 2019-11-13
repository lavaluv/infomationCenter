package bupt.hbq.spring.event;

import org.springframework.context.ApplicationEvent;

import bupt.hbq.spring.objects.info.DnsInfo;

public class DnsPcapEvent extends ApplicationEvent{
	/**
	 * @param info
	 */
	private static final long serialVersionUID = 1218059569546153417L;
	private DnsInfo dnsInfo;
	public DnsPcapEvent(Object source,DnsInfo dnsInfo) {
		super(source);
		this.setDnsInfo(dnsInfo);
	}
	public DnsInfo getDnsInfo() {
		return dnsInfo;
	}
	public void setDnsInfo(DnsInfo dnsInfo) {
		this.dnsInfo = dnsInfo;
	}
}

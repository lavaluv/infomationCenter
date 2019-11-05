package bupt.hbq.spring.event;

import org.springframework.context.ApplicationEvent;

import bupt.hbq.spring.objects.info.Info;
import bupt.hbq.spring.objects.info.TrojanInfo;

public class TrojanPcapEvent extends ApplicationEvent{
	/**
	 * 
	 */
	private static final long serialVersionUID = -2668036833023577071L;
	private TrojanInfo trojanInfo;
	public TrojanPcapEvent(Object source,TrojanInfo trojanInfo) {
		super(source);
		this.trojanInfo = trojanInfo;
	}
	public TrojanInfo getTrojanInfo() {
		return trojanInfo;
	}
	public void setTrojanInfo(TrojanInfo trojanInfo) {
		this.trojanInfo = trojanInfo;
	}
	
}

package bupt.hbq.spring.event;

import org.springframework.context.ApplicationEvent;

import bupt.hbq.spring.objects.info.Info;

public class TrojanPcapEvent extends ApplicationEvent{
	/**
	 * 
	 */
	private static final long serialVersionUID = -2668036833023577071L;
	private Info info;
	public TrojanPcapEvent(Object source,Info info) {
		super(source);
		this.info = info;
	}
	public Info getInfo() {
		return info;
	}

	public void setInfo(Info info) {
		this.info = info;
	}
	
}

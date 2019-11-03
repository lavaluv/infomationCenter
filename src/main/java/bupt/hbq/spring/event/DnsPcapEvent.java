package bupt.hbq.spring.event;

import org.springframework.context.ApplicationEvent;

import bupt.hbq.spring.objects.info.Info;

public class DnsPcapEvent extends ApplicationEvent{
	/**
	 * @param info
	 */
	private static final long serialVersionUID = 1218059569546153417L;
	private Info info;
	public DnsPcapEvent(Object source,Info info) {
		super(source);
		this.setInfo(info);
	}
	public Info getInfo() {
		return info;
	}
	public void setInfo(Info info) {
		this.info = info;
	}
}

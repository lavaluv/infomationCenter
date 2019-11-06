package bupt.hbq.spring.event;

import org.springframework.context.ApplicationEvent;

import bupt.hbq.spring.objects.TrojanView;

public class TrojanViewEvent extends ApplicationEvent{
	/**
	 * 
	 */
	private static final long serialVersionUID = 8939677459850897167L;
	private TrojanView trojanView;
	public TrojanViewEvent(Object source,TrojanView trojanView) {
		super(source);
		this.trojanView = trojanView;
	}
	public TrojanView getTrojanView() {
		return trojanView;
	}
	public void setTrojanView(TrojanView trojanView) {
		this.trojanView = trojanView;
	}
}

package bupt.hbq.spring.event;

import java.util.HashMap;

import org.springframework.context.ApplicationEvent;

public class TrojanDetectionEvent extends ApplicationEvent{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8188139966911332139L;
	private HashMap<String, int[]> hashMap;
	public TrojanDetectionEvent(Object source,HashMap<String, int[]> hashMap) {
		super(source);
		this.hashMap = hashMap;
	}
	public HashMap<String, int[]> getHashMap() {
		return hashMap;
	}

	public void setHashMap(HashMap<String, int[]> hashMap) {
		this.hashMap = hashMap;
	}
}

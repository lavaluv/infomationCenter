package bupt.hbq.spring.event;

import java.util.HashMap;

import org.springframework.context.ApplicationEvent;
import bupt.hbq.spring.objects.info.TrojanInfo;

public class TrojanDetectionEvent extends ApplicationEvent{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8188139966911332139L;
	private HashMap<String, int[]> hashMap;
	private TrojanInfo trojanInfo;
	public TrojanDetectionEvent(Object source,HashMap<String, int[]> hashMap,TrojanInfo trojanInfo) {
		super(source);
		this.hashMap = hashMap;
		this.trojanInfo = trojanInfo;
	}
	public HashMap<String, int[]> getHashMap() {
		return hashMap;
	}

	public void setHashMap(HashMap<String, int[]> hashMap) {
		this.hashMap = hashMap;
	}
	public TrojanInfo getTrojanInfo() {
		return trojanInfo;
	}
	public void setTrojanInfo(TrojanInfo trojanInfo) {
		this.trojanInfo = trojanInfo;
	}
}

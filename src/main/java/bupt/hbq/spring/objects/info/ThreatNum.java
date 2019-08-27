package bupt.hbq.spring.objects.info;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@ToString @EqualsAndHashCode
public class ThreatNum {
	private String time;
	private long threatNum;
	private long handledNum;
	private long notHandleNum;
	public ThreatNum(String time,long threatNum,long handledNum,long notHandleNum) {
		this.time = time;
		this.threatNum = threatNum;
		this.handledNum = handledNum;
		this.notHandleNum = notHandleNum;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public long getHandledNum() {
		return handledNum;
	}
	public void setHandledNum(long handledNum) {
		this.handledNum = handledNum;
	}
	public long getNotHandleNum() {
		return notHandleNum;
	}
	public void setNotHandleNum(long notHandleNum) {
		this.notHandleNum = notHandleNum;
	}
	public long getThreatNum() {
		return threatNum;
	}
	public void setThreatNum(long threatNum) {
		this.threatNum = threatNum;
	}
}

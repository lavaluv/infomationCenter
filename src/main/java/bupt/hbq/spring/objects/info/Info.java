package bupt.hbq.spring.objects.info;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@ToString @EqualsAndHashCode
public class Info {
	@Id @GeneratedValue
	private long FID;
	private String time;
	private long flowNum;
	private long packageNum;
	private long threatNum;
	private long handledNum;
	private long notHandleNum;
	public Info() {
		flowNum = 0;
		packageNum = 0;
		threatNum = 0;
		handledNum = 0;
		notHandleNum = 0;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getTime() {
		return time;
	}
	public void setFlowNum(long flowLong) {
		this.flowNum = flowLong;
	}
	public long getFlowNum() {
		return flowNum;
	}
	public void setPackageNum(long numLong) {
		this.packageNum = numLong;
	}
	public long getPackageNum() {
		return packageNum;
	}
	public void setThreatNum(long numLong) {
		this.threatNum = numLong;
	}
	public long getThreatNum() {
		return threatNum;
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
}

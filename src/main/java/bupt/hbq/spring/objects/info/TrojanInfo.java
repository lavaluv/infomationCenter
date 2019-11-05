package bupt.hbq.spring.objects.info;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.ToString;
@Entity
@ToString @EqualsAndHashCode
public class TrojanInfo {
	@Id @GeneratedValue
	private long FID;
	private String time;
	private long flowNum;
	private long packageNum;
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public long getFlowNum() {
		return flowNum;
	}
	public void setFlowNum(long flowNum) {
		this.flowNum = flowNum;
	}
	public long getPackageNum() {
		return packageNum;
	}
	public void setPackageNum(long packageNum) {
		this.packageNum = packageNum;
	}
}

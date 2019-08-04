package bupt.hbq.spring.objects;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class Info {
	@Id @GeneratedValue
	private Long FID;
	private Date time;
	private Long flowNum;
	private Long packageNum;
	private Long threatNum;
	public void setTime(Date time) {
		this.time = time;
	}
	public Date getTime() {
		return time;
	}
	public void setFlowNum(Long flowLong) {
		this.flowNum = flowLong;
	}
	public Long getFlowNum() {
		return flowNum;
	}
	public void setPackageNum(Long numLong) {
		this.packageNum = numLong;
	}
	public Long getPackageNum() {
		return packageNum;
	}
	public void setThreatNum(Long numLong) {
		this.threatNum = numLong;
	}
	public Long getThreatNum() {
		return threatNum;
	}
	
}

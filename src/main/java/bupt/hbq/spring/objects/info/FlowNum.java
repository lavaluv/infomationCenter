package bupt.hbq.spring.objects.info;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@ToString @EqualsAndHashCode
public class FlowNum {
	private String time;
	private long flowNum;
	public FlowNum(long flowNum,String time) {
		this.flowNum = flowNum;
		this.time = time;
	}
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
}

package bupt.hbq.spring.objects.info;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@ToString @EqualsAndHashCode
public class PackageNum {
	private String time;
	private long packageNum;
	public PackageNum(long packageNum,String time) {
		this.packageNum = packageNum;
		this.time = time;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public long getPackageNum() {
		return packageNum;
	}
	public void setPackageNum(long packageNum) {
		this.packageNum = packageNum;
	}
}

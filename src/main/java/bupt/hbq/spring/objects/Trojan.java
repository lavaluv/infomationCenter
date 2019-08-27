package bupt.hbq.spring.objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.ToString;
@Entity
@ToString @EqualsAndHashCode
public class Trojan {
	@Id @GeneratedValue
	private long TID;
	private String time;
	private String srcIP;
	private int srcPort;
	private String desIP;
	private int desPort;
	private String protocol;
	private String type;
	private int threatLevel;
	private String info;
	public Trojan() {
		srcPort = -1;
		desPort = -1;
		threatLevel = -1;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getSrcIP() {
		return srcIP;
	}
	public void setSrcIP(String srcIP) {
		this.srcIP = srcIP;
	}
	public int getSrcPort() {
		return srcPort;
	}
	public void setSrcPort(int srcPort) {
		this.srcPort = srcPort;
	}
	public String getDesIP() {
		return desIP;
	}
	public void setDesIP(String desIP) {
		this.desIP = desIP;
	}
	public String getProtocol() {
		return protocol;
	}
	public void setProtocol(String protocol) {
		this.protocol = protocol;
	}
	public int getDesPort() {
		return desPort;
	}
	public void setDesPort(int desPort) {
		this.desPort = desPort;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getThreatLevel() {
		return threatLevel;
	}
	public void setThreatLevel(int threatLevel) {
		this.threatLevel = threatLevel;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	
}

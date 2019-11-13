package bupt.hbq.spring.objects.trojan;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class TrojanView {
	@Id @GeneratedValue
	private long VID;
	private String time;
	private ArrayList<String> protocol;
	private ArrayList<Integer> size;
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public ArrayList<String> getProtocol() {
		return protocol;
	}
	public void setProtocol(ArrayList<String> protocol) {
		this.protocol = protocol;
	}
	public ArrayList<Integer> getSize() {
		return size;
	}
	public void setSize(ArrayList<Integer> size) {
		this.size = size;
	}
}

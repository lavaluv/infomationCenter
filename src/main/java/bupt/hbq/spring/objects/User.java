package bupt.hbq.spring.objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@ToString @EqualsAndHashCode
public class User {
	@Id @GeneratedValue
	private long UID;
	private String name;
	private String password;
	public User() {
		super();
	}
	public User(String name,String password) {
		this.name = name;
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}

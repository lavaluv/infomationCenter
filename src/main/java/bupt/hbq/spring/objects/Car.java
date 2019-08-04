package bupt.hbq.spring.objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class Car {
	@Id @GeneratedValue
	private Long id;
	private @NonNull String name;
	public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}
	public Long getId() {
		return id;
	}
}

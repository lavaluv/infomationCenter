package bupt.hbq.spring.objects;

import java.util.ArrayList;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@SuppressWarnings("hiding")
@ToString @EqualsAndHashCode
public class DataFormat<Object> {
	private ArrayList<Object> data;
	public DataFormat() {
		data = new ArrayList<Object>();
	}
	public void addData(Object daString) {
		this.data.add(daString);
	}
	public void setData(ArrayList<Object> data) {
		this.data.clear();
		this.data.addAll(data);
	}
	public ArrayList<Object> getData(){
		return data;
	}
}

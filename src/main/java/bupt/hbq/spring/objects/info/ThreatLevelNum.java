package bupt.hbq.spring.objects.info;

import java.util.ArrayList;

public class ThreatLevelNum {
	private ArrayList<String> type;
	private ArrayList<int[]> level;
	public ThreatLevelNum(){};
	public ThreatLevelNum(ArrayList<String> type,ArrayList<int[]> level) {
		this.type = type;
		this.level = level;
	}
	public ArrayList<String> getType() {
		return type;
	}
	public void setType(ArrayList<String> type) {
		this.type = type;
	}
	public ArrayList<int[]> getLevel() {
		return level;
	}
	public void setLevel(ArrayList<int[]> level) {
		this.level = level;
	}
}

package bupt.hbq.spring.objects.info;

public class ThreatLevel {

    private int dangerLevel;
    private int number;

    public ThreatLevel(int dangerLevel,int number){
        this.dangerLevel = dangerLevel;
        this.setNumber(number);

    }

    public int getDangerLevel() {
        return dangerLevel;
    }

    public void setDangerLevel(int dangerLevel) {
        this.dangerLevel = dangerLevel;
    }

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

}

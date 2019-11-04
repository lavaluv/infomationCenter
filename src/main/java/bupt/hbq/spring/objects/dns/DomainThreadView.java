package bupt.hbq.spring.objects.dns;

public class DomainThreadView {

    private int dangerLevel;
    private float pencent;

    public DomainThreadView(int dangerLevel,float pencent){
        this.dangerLevel = dangerLevel;
        this.pencent = pencent;

    }

    public int getDangerLevel() {
        return dangerLevel;
    }

    public void setDangerLevel(int dangerLevel) {
        this.dangerLevel = dangerLevel;
    }

    public float getPencent() {
        return pencent;
    }

    public void setPencent(float pencent) {
        this.pencent = pencent;
    }
}

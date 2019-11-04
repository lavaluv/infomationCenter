package bupt.hbq.spring.objects.dns;

public class IpCountView {
    private String Ip;
    private int countnumber;
    public IpCountView(String ip,int countnumber){
        this.Ip =ip;
        this.countnumber =countnumber;
    }

    public String getIp() {
        return Ip;
    }

    public void setIp(String ip) {
        Ip = ip;
    }

    public int getCountnumber() {
        return countnumber;
    }

    public void setCountnumber(int countnumber) {
        this.countnumber = countnumber;
    }
}

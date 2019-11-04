package bupt.hbq.spring.objects.dns;

public class MapView {
    private String ip;
    private String city;
    public MapView(String ip,String city){
        this.ip =ip;
        this.city =city;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}

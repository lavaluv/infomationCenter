package bupt.hbq.spring.objects.dns;

public class DomainCountView {
    private long countnumber;
    private String Domain;
    public DomainCountView(){

    }
    public DomainCountView(long countnumber, String domain) {
        this.countnumber = countnumber;
        Domain = domain;
    }

    public long getCountnumber() {
        return countnumber;
    }

    public void setCountnumber(long countnumber) {
        this.countnumber = countnumber;
    }

    public String getDomain() {
        return Domain;
    }

    public void setDomain(String domain) {
        Domain = domain;
    }
}

package bupt.hbq.spring.objects.dns;

public class DomainCountView {
    private int countnumber;
    private String Domain;
    public DomainCountView(){

    }
    public DomainCountView(int countnumber, String domain) {
        this.countnumber = countnumber;
        Domain = domain;
    }

    public int getCountnumber() {
        return countnumber;
    }

    public void setCountnumber(int countnumber) {
        this.countnumber = countnumber;
    }

    public String getDomain() {
        return Domain;
    }

    public void setDomain(String domain) {
        Domain = domain;
    }
}

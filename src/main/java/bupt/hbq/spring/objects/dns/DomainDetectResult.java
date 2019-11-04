package bupt.hbq.spring.objects.dns;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@ToString @EqualsAndHashCode
public class DomainDetectResult {
    @Id @GeneratedValue
    private long rId;
    private String Domain;
    @Column(columnDefinition = "text")
    private String ip;
    private int countnumber;
    private long historyId;
    public DomainDetectResult(){

    }
    public DomainDetectResult(String Domain,String ip,int countnumber){
        this.Domain = Domain;
        this.ip = ip;
        this.countnumber = countnumber;
    }
    public DomainDetectResult(String Domain,String ip){
        this.Domain = Domain;
        this.ip = ip;

    }
    public long getrId() {
        return rId;
    }

    public void setrId(long rId) {
        this.rId = rId;
    }

    public long getHistoryId() {
        return historyId;
    }

    public void setHistoryId(long historyId) {
        this.historyId = historyId;
    }
    public DomainDetectResult(String Domain,long historyId){
        this.Domain = Domain;
        this.historyId = historyId;
    }

    public int getCountnumber() {
        return countnumber;
    }

    public String getDomain() {
        return Domain;
    }

    public void setDomain(String domain) {
        Domain = domain;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public void setCountnumber(int countnumber) {
        this.countnumber = countnumber;
    }
}

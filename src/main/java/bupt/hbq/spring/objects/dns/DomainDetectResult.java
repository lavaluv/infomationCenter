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
    private float countnumber;
    private float asnNumber;
    private float countryNumber;
    private float aRecordNumber;
    private String srcIplist;
    private String desIplist;
    private String detectTime;
    private String citylist;
    public DomainDetectResult(){

    }
    public DomainDetectResult(String Domain,String ip,Float countnumber){
        this.Domain = Domain;
        this.ip = ip;
        this.countnumber = countnumber;
    }
    public String getDetectTime() {
        return detectTime;
    }

    public void setDetectTime(String detectTime) {
        this.detectTime = detectTime;
    }

    public String getSrcIplist() {
        return srcIplist;
    }

    public void setSrcIplist(String srcIp) {
        this.srcIplist = srcIp;
    }

    public String getDesIplist() {
        return desIplist;
    }

    public void setDesIplist(String desIp) {
        this.desIplist = desIp;
    }

    public float getAsnNumber() {
        return asnNumber;
    }

    public void setAsnNumber(Float asnNumber) {
        this.asnNumber = asnNumber;
    }

    public float getCountryNumber() {
        return countryNumber;
    }

    public void setCountryNumber(Float countryNumber) {
        this.countryNumber = countryNumber;
    }

    public float getaRecordNumber() {
        return aRecordNumber;
    }

    public void setaRecordNumber(Float aRecordNumber) {
        this.aRecordNumber = aRecordNumber;
    }

    public String getCitylist() {
        return citylist;
    }

    public void setCitylist(String citylist) {
        this.citylist = citylist;
    }

    public DomainDetectResult(String Domain, String ip){
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

    private long historyId;
    public DomainDetectResult(String Domain,long historyId){
        this.Domain = Domain;
        this.historyId = historyId;
    }

    public float getCountnumber() {
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

    public void setCountnumber(Float countnumber) {
        this.countnumber = countnumber;
    }
}

package bupt.hbq.spring.objects.dns;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
@ToString @EqualsAndHashCode
public class DetectHistory {
    public long gethId() {
        return hId;
    }

    public void sethId(long hId) {
        this.hId = hId;
    }

    @Id @GeneratedValue
    private long hId;
    private Date detectTime;
    private long userId;
    public DetectHistory(){

    }
    public DetectHistory (Date detectTime) {
        this.detectTime = detectTime;
    }
    public DetectHistory(Date detectTime,long userId){
        this.detectTime =detectTime;
        this.userId =userId;
    }

    public Date getDetectTime() {
        return detectTime;
    }

    public void setDetectTime(Date detectTime) {
        this.detectTime = detectTime;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}

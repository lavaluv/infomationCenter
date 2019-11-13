package bupt.hbq.spring.objects.dns;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@ToString @EqualsAndHashCode
public class DetectHistory {
    public long gethId() {
        return hId;
    }

    public void sethId(long hId) {
        this.hId = hId;
    }

    public int getDetectSize() {
        return detectSize;
    }

    public void setDetectSize(int detectSize) {
        this.detectSize = detectSize;
    }

    @Id @GeneratedValue
    private long hId;

    private String detectTime;
    private int detectSize;
    private long userId;
    public DetectHistory(){

    }
    public DetectHistory (String detectTime) {
        this.detectTime = detectTime;
    }
    public DetectHistory(String detectTime,long userId){
        this.detectTime =detectTime;
        this.userId =userId;
    }

    public String getDetectTime() {
        return detectTime;
    }

    public void setDetectTime(String detectTime) {
        this.detectTime = detectTime;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}

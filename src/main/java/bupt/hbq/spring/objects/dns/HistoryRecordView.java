package bupt.hbq.spring.objects.dns;

public class HistoryRecordView {
    private String date;
    private int number;
    public HistoryRecordView(){};

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public HistoryRecordView(String date, int number){
        this.date =date;
        this.number=number;
    }
}

package bupt.hbq.spring.event;

import org.springframework.context.ApplicationEvent;

import bupt.hbq.spring.objects.info.Info;

public class HostDetectionEvent extends ApplicationEvent{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8712202535095621541L;
	private String CsvPath;
	private Info info;
	public HostDetectionEvent(Object source,String csvString,Info info) {
		super(source);
		this.CsvPath = csvString;
		this.info = info;
	}
	public String getCsvPath() {
		return CsvPath;
	}
	public void setCsvPath(String csvPath) {
		CsvPath = csvPath;
	}
	public Info getInfo() {
		return info;
	}
	public void setInfo(Info info) {
		this.info = info;
	}
	
}

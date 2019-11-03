package bupt.hbq.spring.event;

import org.springframework.context.ApplicationEvent;

public class HostDetectionEvent extends ApplicationEvent{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8712202535095621541L;
	private String CsvPath;
	public HostDetectionEvent(Object source,String csvString) {
		super(source);
		this.CsvPath = csvString;
	}
	public String getCsvPath() {
		return CsvPath;
	}
	public void setCsvPath(String csvPath) {
		CsvPath = csvPath;
	}
	
}

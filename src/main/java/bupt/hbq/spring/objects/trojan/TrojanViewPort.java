package bupt.hbq.spring.objects.trojan;

public class TrojanViewPort {
	private int port;
	private long number;
	public TrojanViewPort() {
	}
	public TrojanViewPort(int port,long number) {
		this.setPort(port);
		this.setNumber(number);
	}
	public int getPort() {
		return port;
	}
	public void setPort(int port) {
		this.port = port;
	}
	public long getNumber() {
		return number;
	}
	public void setNumber(long number) {
		this.number = number;
	}
}

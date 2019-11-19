package bupt.hbq.spring.objects.info;

public class MapView {
    private String warn;
    private String name;
    private float value;
    public MapView() {}
    public MapView(String name,Float value,String warn){
        this.warn = warn;
        this.name = name;
        this.value = value;
    }
	public String getWarn() {
		return warn;
	}
	public void setWarn(String warn) {
		this.warn = warn;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getValue() {
		return value;
	}
	public void setValue(Float value) {
		this.value = value;
	}

}

package bupt.hbq.spring.event;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import bupt.hbq.spring.dao.InfoRespository;
import bupt.hbq.spring.objects.info.Info;

@Component
public class TrojanPcapEventListener {
	private InfoRespository infoRespository;
	public TrojanPcapEventListener(InfoRespository infoRespository) {
		this.infoRespository = infoRespository;
	}
	@EventListener
	public void register(TrojanPcapEvent trojanPcapEvent) {
		Info info = trojanPcapEvent.getInfo();
		infoRespository.save(info);
	}
}

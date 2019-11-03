package bupt.hbq.spring.event;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import bupt.hbq.spring.dao.InfoRespository;
import bupt.hbq.spring.objects.info.Info;

@Component
public class DnsPcapEventListener {
	private InfoRespository infoRespository;
	public DnsPcapEventListener(InfoRespository infoRespository) {
		this.infoRespository = infoRespository;
	}
	@EventListener
	public void register(DnsPcapEvent dnsPcapEvent) {
		Info info = dnsPcapEvent.getInfo();
		infoRespository.save(info);
	}
}

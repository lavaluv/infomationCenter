package bupt.hbq.spring.event;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import bupt.hbq.spring.dao.TrojanViewRepository;
import bupt.hbq.spring.objects.TrojanView;

@Component
public class TrojanViewEventListener {
	private TrojanViewRepository trojanViewRepository;
	public TrojanViewEventListener(TrojanViewRepository trojanViewRepository) {
		this.trojanViewRepository = trojanViewRepository;
	}
	@EventListener
	public void register(TrojanViewEvent trojanViewEvent) {
		TrojanView trojanView = trojanViewEvent.getTrojanView();
		trojanViewRepository.save(trojanView);
	}
}

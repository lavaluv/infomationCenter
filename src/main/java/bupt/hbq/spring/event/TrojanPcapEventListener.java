package bupt.hbq.spring.event;

import java.util.List;

import org.springframework.context.event.EventListener;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Component;

import bupt.hbq.spring.dao.InfoRepository;
import bupt.hbq.spring.dao.TrojanInfoRepository;
import bupt.hbq.spring.objects.info.Info;
import bupt.hbq.spring.objects.info.TrojanInfo;

@Component
public class TrojanPcapEventListener {
	private TrojanInfoRepository trojanInfoRepository;
	private InfoRepository infoRepository;
	public TrojanPcapEventListener(TrojanInfoRepository trojanInfoRepository,InfoRepository infoRepository) {
		this.trojanInfoRepository = trojanInfoRepository;
		this.infoRepository = infoRepository;
	}
	@EventListener
	public void register(TrojanPcapEvent trojanPcapEvent) {
		TrojanInfo trojanInfo = trojanPcapEvent.getTrojanInfo();
		trojanInfoRepository.save(trojanInfo);
		List<Info> newest = infoRepository.findFirst1ByTimeGreaterThan("0", new Sort(Direction.DESC, "time"));
		if (newest.size() == 0) {
			System.out.println("info save new");
			Info info = new Info();
			info.setFlowNum(trojanInfo.getFlowNum());
			info.setPackageNum(trojanInfo.getPackageNum());
			info.setTime(trojanInfo.getTime());
			infoRepository.save(info);
		}
		else if (newest.get(0).getTime().compareTo(trojanInfo.getTime()) < 0) {
			System.out.println("info save new time");
			Info info = new Info();
			info.setFlowNum(trojanInfo.getFlowNum());
			info.setPackageNum(trojanInfo.getPackageNum());
			info.setTime(trojanInfo.getTime());
			info.setHandledNum(newest.get(0).getHandledNum());
			info.setNotHandleNum(newest.get(0).getNotHandleNum());
			info.setThreatNum(newest.get(0).getThreatNum());
			infoRepository.save(info);
		}
		else if(newest.get(0).getTime().compareTo(trojanInfo.getTime()) >= 0){
			System.out.println("info update");
			infoRepository.updateFlowNumAndPackageNumByTime(
					trojanInfo.getFlowNum()+newest.get(0).getFlowNum(), 
					trojanInfo.getPackageNum()+newest.get(0).getPackageNum(), 
					newest.get(0).getTime());
		}
	}
}

package bupt.hbq.spring.event;

import java.util.List;

import org.springframework.context.event.EventListener;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Component;

import bupt.hbq.spring.dao.DnsInfoRepository;
import bupt.hbq.spring.dao.InfoRepository;
import bupt.hbq.spring.objects.info.DnsInfo;
import bupt.hbq.spring.objects.info.Info;

@Component
public class DnsPcapEventListener {
	private DnsInfoRepository dnsInfoRespository;
	private InfoRepository infoRespository;
	public DnsPcapEventListener(DnsInfoRepository dnsInfoRespository,InfoRepository infoRespository) {
		this.dnsInfoRespository = dnsInfoRespository;
		this.infoRespository = infoRespository;
	}
	@EventListener
	public void register(DnsPcapEvent dnsPcapEvent) {
		DnsInfo dnsInfo = dnsPcapEvent.getDnsInfo();
		dnsInfoRespository.save(dnsInfo);
		List<Info> newest = infoRespository.findFirst1ByTimeGreaterThan("0", new Sort(Direction.DESC, "time"));
		if (newest.size() == 0) {
			System.out.println("info save new");
			Info info = new Info();
			info.setFlowNum(dnsInfo.getFlowNum());
			info.setPackageNum(dnsInfo.getPackageNum());
			info.setTime(dnsInfo.getTime());
			infoRespository.save(info);
		}
		else if (newest.get(0).getTime().compareTo(dnsInfo.getTime()) < 0) {
			System.out.println("info save new time");
			Info info = new Info();
			info.setFlowNum(dnsInfo.getFlowNum());
			info.setPackageNum(dnsInfo.getPackageNum());
			info.setTime(dnsInfo.getTime());
			info.setHandledNum(newest.get(0).getHandledNum());
			info.setNotHandleNum(newest.get(0).getNotHandleNum());
			info.setThreatNum(newest.get(0).getThreatNum());
			infoRespository.save(info);
		}
		else if(newest.get(0).getTime().compareTo(dnsInfo.getTime()) >= 0){
			System.out.println("info update");
			infoRespository.updateFlowNumAndPackageNumByTime(
					dnsInfo.getFlowNum()+newest.get(0).getFlowNum(), 
					dnsInfo.getPackageNum()+newest.get(0).getPackageNum(), 
					newest.get(0).getTime());
		}
	}
}

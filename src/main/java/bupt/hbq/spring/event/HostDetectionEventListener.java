package bupt.hbq.spring.event;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.context.event.EventListener;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Component;

import bupt.hbq.spring.dao.DetectHistoryRepository;
import bupt.hbq.spring.dao.DomainDetectResultRepository;
import bupt.hbq.spring.dao.InfoRepository;
import bupt.hbq.spring.objects.dns.DetectHistory;
import bupt.hbq.spring.objects.dns.DomainDetectResult;
import bupt.hbq.spring.objects.info.DnsInfo;
import bupt.hbq.spring.objects.info.Info;
import bupt.hbq.spring.service.DNSDetection;

@Component
public class HostDetectionEventListener {
	private DNSDetection detection;
	private DetectHistoryRepository detectHistoryRepository;
	private DomainDetectResultRepository domainDetectResultRepository;
	private InfoRepository infoRepository;
	public HostDetectionEventListener(DNSDetection detection,DomainDetectResultRepository domainDetectResultRepository,
			DetectHistoryRepository detectHistoryRepository,InfoRepository infoRepository) {
		this.detection = detection;
		this.domainDetectResultRepository = domainDetectResultRepository;
		this.detectHistoryRepository = detectHistoryRepository;
		this.infoRepository = infoRepository;
	}
	@EventListener
	public void register(HostDetectionEvent hostDetectionEvent) {
		try {
			//wait csvWriter end writing
			Thread.sleep(5000);
			ArrayList<DomainDetectResult> result = detection.modelPrediction(hostDetectionEvent.getCsvPath(),hostDetectionEvent.getSrcIpDesIp(),
					hostDetectionEvent.getCity());
			DnsInfo dnsInfo = hostDetectionEvent.getDnsInfo();
			DetectHistory detectHistory = new DetectHistory(dnsInfo.getTime(), 1);
			detectHistory.setDetectSize(result.size());
			detectHistoryRepository.save(detectHistory);
			result.forEach(r->{
				r.setHistoryId(detectHistoryRepository.findFirst1ByHIdGreaterThan(0l, 
						new Sort(Direction.DESC, "hId")).get(0).gethId());
				r.setDetectTime(dnsInfo.getTime());
			});
			System.out.println("DNS detection end");
			List<Info> info = infoRepository.findByTime(hostDetectionEvent.getDnsInfo().getTime());
			if (info.size() != 0) {
				infoRepository.updateThreatNumAndNotHandleNumByTime(info.get(0).getThreatNum()+result.size(),
						info.get(0).getNotHandleNum()+1, info.get(0).getTime());
			}
			domainDetectResultRepository.saveAll(result);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO: handle exception
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO: handle exception
			e.printStackTrace();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}

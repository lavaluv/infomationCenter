package bupt.hbq.spring.event;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import org.springframework.context.event.EventListener;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Component;

import bupt.hbq.spring.dao.DetectHistoryRepository;
import bupt.hbq.spring.dao.DomainDetectResultRepository;
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
	public HostDetectionEventListener(DNSDetection detection,DomainDetectResultRepository domainDetectResultRepository,
			DetectHistoryRepository detectHistoryRepository) {
		this.detection = detection;
		this.domainDetectResultRepository = domainDetectResultRepository;
		this.detectHistoryRepository = detectHistoryRepository;
	}
	@EventListener
	public void register(HostDetectionEvent hostDetectionEvent) {
		try {
			//wait csvWriter end writing
			Thread.sleep(5000);
			ArrayList<DomainDetectResult> result = detection.modelPrediction(hostDetectionEvent.getCsvPath());
			DnsInfo dnsInfo = hostDetectionEvent.getDnsInfo();
			DetectHistory detectHistory = new DetectHistory(dnsInfo.getTime(), 1);
			detectHistoryRepository.save(detectHistory);
			result.forEach(r->{
				r.setHistoryId(detectHistoryRepository.findFirst1ByHIdGreaterThan(0l, 
						new Sort(Direction.DESC, "hId")).get(0).gethId());
			});
			System.out.println("DNS detection end");
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
		}
	}
}

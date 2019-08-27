package bupt.hbq.spring.service;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.async.DeferredResult;

import bupt.hbq.spring.objects.info.Info;

@Service
public class InfoPushService {
	private DeferredResult<Info> result;
	public DeferredResult<Info> getDeferredResult(){
		DeferredResult<Info> result = new DeferredResult<Info>();
		return result;
	}
	@Scheduled(fixedDelay = 5000)
	public void refresh() {
		if (result != null) {
			Info info = new Info();
			info.setTime(String.valueOf(System.currentTimeMillis()));
			info.setFlowNum(1);
			info.setPackageNum(1);
			info.setThreatNum(1);
			result.setResult(info);
		}
	}
}

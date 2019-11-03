package bupt.hbq.spring.event;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import bupt.hbq.spring.service.DNSDetection;

@Component
public class HostDetectionEventListener {
	private DNSDetection detection;
	public HostDetectionEventListener(DNSDetection detection) {
		this.detection = detection;
	}
	@EventListener
	public void register(HostDetectionEvent hostDetectionEvent) {
		try {
			//wait csvWriter end writing
			Thread.sleep(5000);
			ArrayList<String> result = detection.modelPrediction(hostDetectionEvent.getCsvPath());
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

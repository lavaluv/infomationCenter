package bupt.hbq.spring.controller;

import java.util.ArrayList;
import java.util.Random;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bupt.hbq.spring.dao.TrojanRepository;
import bupt.hbq.spring.dao.TrojanViewRepository;
import bupt.hbq.spring.objects.DataFormat;
import bupt.hbq.spring.objects.TrojanView;

@RestController
public class TrojanViewController {
	private TrojanViewRepository trojanViewRespository;
	private TrojanRepository trojanRepository;
	public TrojanViewController(TrojanViewRepository trojanViewRespository,TrojanRepository trojanRepository) {
		this.trojanViewRespository = trojanViewRespository;
		this.trojanRepository = trojanRepository;
	}
	@GetMapping("/trojan/view/flow")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> flowView(@RequestParam (value = "time",required = true) String time){
//		for (int i = 0; i < 30; i++) {
//		Random random = new Random();
//		ArrayList<String> protocolName = new ArrayList<String>();
//		ArrayList<Integer> protocolSize = new ArrayList<Integer>();
//		protocolName.add("TCP");
//		protocolSize.add(random.nextInt(300));
//		protocolName.add("UDP");
//		protocolSize.add(random.nextInt(300));
//		protocolName.add("DNS");
//		protocolSize.add(random.nextInt(300));
//		TrojanView trojanView = new TrojanView();
//		trojanView.setProtocol(protocolName);
//		trojanView.setSize(protocolSize);
//		trojanView.setTime(String.valueOf(System.currentTimeMillis()-i*1000*180));
//		trojanViewRespository.save(trojanView);
//	}
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		trojanViewRespository.findByTimeGreaterThan(time).forEach(view->{
			dataFormat.addData(view);
		});
//		trojanViewRespository.deleteAllInBatch();
		return dataFormat;
	}
}

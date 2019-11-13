package bupt.hbq.spring.controller;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bupt.hbq.spring.dao.TrojanRepository;
import bupt.hbq.spring.dao.TrojanViewRepository;
import bupt.hbq.spring.objects.DataFormat;
import bupt.hbq.spring.objects.trojan.TrojanViewPort;

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
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		trojanViewRespository.findByTimeGreaterThan(time).forEach(view->{
			dataFormat.addData(view);
		});
		return dataFormat;
	}
	@GetMapping("/trojan/view/srcPort")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> srcPortView(@RequestParam (value = "top",required = true)int top){
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		List<Object[]> srcList = trojanRepository.findsrcPortCount(PageRequest.of(0, top)).getContent();
		for (int i = 0; i < top; i++) {
			TrojanViewPort trojanViewPort = new TrojanViewPort();
			if (i < srcList.size()) {
				trojanViewPort.setPort((int)srcList.get(i)[0]);
				trojanViewPort.setNumber((long)srcList.get(i)[1]);
			}
			else {
				trojanViewPort.setPort(0);
				trojanViewPort.setNumber(0);
			}
			dataFormat.addData(trojanViewPort);
		}
		return dataFormat;
	}
	@GetMapping("/trojan/view/desPort")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> desPortView(@RequestParam (value = "top",required = true)int top){
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		List<Object[]> desList = trojanRepository.finddesPortCount(PageRequest.of(0, top)).getContent();
		for (int i = 0; i < top; i++) {
			TrojanViewPort trojanViewPort = new TrojanViewPort();
			if (i < desList.size()) {
				trojanViewPort.setPort((int)desList.get(i)[0]);
				trojanViewPort.setNumber((long)desList.get(i)[1]);
			}
			else {
				trojanViewPort.setPort(0);
				trojanViewPort.setNumber(0);
			}
			dataFormat.addData(trojanViewPort);
		}
		return dataFormat;
	}
}

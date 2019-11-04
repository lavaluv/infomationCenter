package bupt.hbq.spring.controller;

import java.util.List;
import java.util.Random;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bupt.hbq.spring.dao.InfoRespository;
import bupt.hbq.spring.dao.TrojanRespository;
import bupt.hbq.spring.objects.DataFormat;
import bupt.hbq.spring.objects.Trojan;
import bupt.hbq.spring.objects.info.FlowNum;
import bupt.hbq.spring.objects.info.Info;
import bupt.hbq.spring.objects.info.PackageNum;
import bupt.hbq.spring.objects.info.ThreatNum;

@RestController
public class InfoController {
	private InfoRespository respository;
	private TrojanRespository trojanRespository;
	public InfoController(InfoRespository respository,TrojanRespository trojanRespository) {
		this.respository = respository;
		this.trojanRespository = trojanRespository;
	}
	@GetMapping("/info/flowNum")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> flowNum(@RequestParam (value = "time",required = true) String time){
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		respository.findByTimeGreaterThan(time).forEach(info->{
			dataFormat.addData(new FlowNum(info.getFlowNum(),info.getTime()));
		});
		return dataFormat;
	}
	@GetMapping("/info/packageNum")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> packageNum(@RequestParam (value = "time",required = true) String time){
//		for(int i = 0;i < 30;i++) {
//			Random random = new Random();
//			Info info = new Info();
//			info.setTime(String.valueOf(System.currentTimeMillis()-i*1000*180));
//			info.setFlowNum(random.nextInt(300));
//			info.setPackageNum(random.nextInt(300));
//			info.setThreatNum(random.nextInt(300));
//			info.setHandledNum(info.getThreatNum()-i);
//			info.setNotHandleNum(i);
//			respository.save(info);
//		}
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		respository.findByTimeGreaterThan(time).forEach(info->{
			dataFormat.addData(new PackageNum(info.getPackageNum(), info.getTime()));
		});
//		respository.deleteAllInBatch();
		return dataFormat;
	}
	@GetMapping("/info/threatNum")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> threatNum(){
//		for(int i = 0;i < 1;i++) {
//			Random random = new Random();
//			Info info = new Info();
//			info.setTime(String.valueOf(System.currentTimeMillis()-i*1000*180));
//			info.setFlowNum(random.nextInt(300));
//			info.setPackageNum(random.nextInt(300));
//			info.setThreatNum(random.nextInt(300));
//			info.setHandledNum(info.getThreatNum()-i);
//			info.setNotHandleNum(i);
//			respository.save(info);
//		}
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		List<Info> list =  respository.findAll();
		Info info = list.get(new Random().nextInt(list.size()));
		dataFormat.addData(new ThreatNum(info.getTime(), info.getThreatNum(),info.getHandledNum(),info.getNotHandleNum()));
//		respository.deleteAllInBatch();
		return dataFormat;
	}
	@GetMapping("/info/trojan")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> trojan(@RequestParam (value = "time",required = false)String time,
			@RequestParam (value = "page",required = true) int page,
			@RequestParam (value = "size",required = true)int size){
//		for(int i = 0;i < 30;i++) {
//			Trojan trojan = new Trojan();
//			trojan.setTime(String.valueOf(System.currentTimeMillis()-i*1000*180));
//			trojan.setSrcIP("127.0.0."+i);
//			trojan.setSrcPort(8080-i);
//			trojan.setDesIP("127.0.0."+i);
//			trojan.setDesPort(8080+i);
//			trojan.setProtocol("tcp"+String.valueOf(new Random().nextInt(3)));
//			trojan.setThreatLevel(new Random().nextInt(3));
//			trojan.setType(String.valueOf(new Random().nextInt(3)));
//			trojan.setInfo("test"+i);
//			trojanRespository.save(trojan);
//		}
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		if (time == null) {
			Page<Trojan> page2 = trojanRespository.findAll(PageRequest.of(page, size));
			dataFormat.addData(page2);
		}
		else {
			Page<Trojan> pages = trojanRespository.findByTimeGreaterThan(time, PageRequest.of(page, size));
			dataFormat.addData(pages);
		}
//		trojanRespository.deleteAllInBatch();
		return dataFormat;
	}
}

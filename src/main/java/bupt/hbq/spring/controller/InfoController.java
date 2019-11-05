package bupt.hbq.spring.controller;

import java.util.List;
import java.util.Random;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bupt.hbq.spring.dao.InfoRepository;
import bupt.hbq.spring.dao.TrojanRepository;
import bupt.hbq.spring.objects.DataFormat;
import bupt.hbq.spring.objects.Trojan;
import bupt.hbq.spring.objects.info.FlowNum;
import bupt.hbq.spring.objects.info.Info;
import bupt.hbq.spring.objects.info.PackageNum;
import bupt.hbq.spring.objects.info.ThreatNum;

@RestController
public class InfoController {
	private InfoRepository respository;
	private TrojanRepository trojanRespository;
	public InfoController(InfoRepository respository,TrojanRepository trojanRespository) {
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
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		respository.findByTimeGreaterThan(time).forEach(info->{
			dataFormat.addData(new PackageNum(info.getPackageNum(), info.getTime()));
		});
		return dataFormat;
	}
	@GetMapping("/info/threatNum")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> threatNum(){
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		List<Info> list =  respository.findAll();
		Info info = list.get(new Random().nextInt(list.size()));
		dataFormat.addData(new ThreatNum(info.getTime(), info.getThreatNum(),info.getHandledNum(),info.getNotHandleNum()));
		return dataFormat;
	}
	@GetMapping("/info/trojan")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> trojan(@RequestParam (value = "time",required = false)String time,
			@RequestParam (value = "page",required = true) int page,
			@RequestParam (value = "size",required = true)int size){
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		if (time == null) {
			Page<Trojan> page2 = trojanRespository.findAll(PageRequest.of(page, size));
			dataFormat.addData(page2);
		}
		else {
			Page<Trojan> pages = trojanRespository.findByTimeGreaterThan(time, PageRequest.of(page, size));
			dataFormat.addData(pages);
		}
		return dataFormat;
	}
}

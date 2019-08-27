package bupt.hbq.spring.controller;

import java.util.Random;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bupt.hbq.spring.dao.TrojanRespository;
import bupt.hbq.spring.objects.DataFormat;
import bupt.hbq.spring.objects.Trojan;
import bupt.hbq.spring.service.TrojanSerch;
@RestController
public class TrojanController {
	private TrojanRespository trojanRespository;
	public TrojanController(TrojanRespository trojanRespository) {
		this.trojanRespository = trojanRespository;
	}
	@GetMapping("/trojan")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> trojan(@RequestParam (value = "fromTime",required = false)String fromTime,
			@RequestParam (value = "toTime",required = false) String toTime,
			@RequestParam (value = "page",required = true) int page,
			@RequestParam (value = "size",required = true)int size,
			@RequestParam (value = "srcIP",required = false)String srcIP,
			@RequestParam (value = "srcPort",required = false) Integer srcPort,
			@RequestParam (value = "desIP",required = false)String desIP,
			@RequestParam (value = "desPort",required = false)Integer desPort,
			@RequestParam (value = "protocol",required = false)String protocol,
			@RequestParam (value = "type",required = false)String type,
			@RequestParam (value = "threatLevel",required = false)Integer threatLevel,
			@RequestParam (value = "info",required = false)String info){
		for(int i = 0;i < 30;i++) {
			Trojan trojan = new Trojan();
			trojan.setTime(String.valueOf(System.currentTimeMillis()-i*1000*180));
			trojan.setSrcIP("127.0.0."+i);
			trojan.setSrcPort(8080-i);
			trojan.setDesIP("127.0.0."+i);
			trojan.setDesPort(8080+i);
			trojan.setProtocol("tcp"+String.valueOf(new Random().nextInt(3)));
			trojan.setThreatLevel(new Random().nextInt(3));
			trojan.setType(String.valueOf(new Random().nextInt(3)));
			trojan.setInfo("test"+i);
			trojanRespository.save(trojan);
		}
		if (toTime == null || toTime == "") {
			toTime = String.valueOf(System.currentTimeMillis());
		}
		Trojan trojan = new Trojan();
		trojan.setSrcIP(srcIP);
		if (srcPort != null) {
			trojan.setSrcPort(srcPort);
		}
		trojan.setDesIP(desIP);
		if (desPort != null) {
			trojan.setDesPort(desPort);
		}
		trojan.setProtocol(protocol);
		trojan.setType(type);
		if (threatLevel != null) {
			trojan.setThreatLevel(threatLevel);
		}
		trojan.setInfo(info);
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		Page<Trojan> page2 = trojanRespository.findAll(TrojanSerch.queryTrojanListByTrojan(trojan,fromTime,toTime), PageRequest.of(page, size));
		dataFormat.addData(page2);
		trojanRespository.deleteAllInBatch();
		return dataFormat;
	}
}

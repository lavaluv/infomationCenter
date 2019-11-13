package bupt.hbq.spring.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bupt.hbq.spring.dao.DetectHistoryRepository;
import bupt.hbq.spring.dao.DomainDetectResultRepository;
import bupt.hbq.spring.objects.DataFormat;
import bupt.hbq.spring.objects.dns.DetectHistory;
import bupt.hbq.spring.objects.dns.DomainDetectResult;
import bupt.hbq.spring.service.DNSSerch;
import lombok.val;

import java.util.List;


@RestController
public class DomainDectCotroller {
    private DomainDetectResultRepository domainDetectResultRepository;
    private DetectHistoryRepository detectHistoryRepository;
    public DomainDectCotroller(DomainDetectResultRepository domainDetectResultRepository,
                               DetectHistoryRepository detectHistoryRepository){
        this.domainDetectResultRepository =domainDetectResultRepository;
        this.detectHistoryRepository = detectHistoryRepository;
    }
//    @GetMapping("/dectDns")
//    @CrossOrigin(origins = "http://localhost:4200")
//    public ArrayList<DomainDetectResult> domainDect(@RequestParam(value = "filepath",required = false)String detectFilePath,
//                                                   @RequestParam(value = "uid",required = true) long userid){
//
//        ArrayList<DomainDetectResult> result = null;
//
//        DetectHistory detectHistory = new DetectHistory(new Date(),userid);
//        detectHistoryRepository.save(detectHistory);
//        try{
//            //result =ModelCalc.modelPrediction("c:\\DecisionTreeIris.pmml","c:\\data_View.txt");
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//        for(int i =0;i<result.size();i++){
//            result.get(i).setHistoryId(detectHistory.gethId());
//        }
//        domainDetectResultRepository.saveAll(result);
//        return result;
//    }
    @GetMapping("/history")
    @CrossOrigin(origins = "http://localhost:4200")
    public DataFormat<Object> getAllDetectHistory(@RequestParam(value = "userId",required = true)long userId,
    		@RequestParam(value = "page",required = true)int page,
    		@RequestParam(value = "size",required = true)int size){
            DataFormat<Object> dataFormat = new DataFormat<Object>();
            Page<DetectHistory> detectPage = detectHistoryRepository.findByUserId(userId,PageRequest.of(page, size));
            dataFormat.addData(detectPage);
            return dataFormat;
    }
    @GetMapping("/detail")
    @CrossOrigin(origins = "http://localhost:4200")
    public DataFormat<Object> getDetectHistoryDetail(@RequestParam(value = "page",required = true)int page, 
    		@RequestParam(value = "size",required = true)int size,
    		@RequestParam(value = "fromTime",required = false)String fromTime,
    		@RequestParam(value = "toTime",required = false)String toTime,
    		@RequestParam(value = "city",required = false)String city,
    		@RequestParam(value = "domain",required =  false)String domain,
    		@RequestParam(value = "ip",required = false)String ip,
    		@RequestParam(value = "srcIp",required = false)String srcIp,
    		@RequestParam(value = "desIp",required = false)String desIp){
        DataFormat<Object> dataFormat = new DataFormat<Object>();
		if (toTime == null || toTime == "") {
			toTime = String.valueOf(System.currentTimeMillis());
		}
		DomainDetectResult detectResult = new DomainDetectResult();
		detectResult.setCitylist(city);
		detectResult.setDomain(domain);
		detectResult.setIp(ip);
		detectResult.setSrcIplist(srcIp);
		detectResult.setDesIplist(desIp);
        Page<DomainDetectResult> domainPage = domainDetectResultRepository.findAll(
        		DNSSerch.queryDomainListByDomainDetectResult(detectResult, fromTime, toTime), PageRequest.of(page, size));
        dataFormat.addData(domainPage);
        return dataFormat;
    }

}


package bupt.hbq.spring.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bupt.hbq.spring.dao.DetectHistoryRepository;
import bupt.hbq.spring.dao.DomainDetectResultRepository;
import bupt.hbq.spring.objects.dns.DetectHistory;
import bupt.hbq.spring.objects.dns.DomainDetectResult;

import java.util.ArrayList;
import java.util.Date;
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
    @GetMapping("/dectDns")
    @CrossOrigin(origins = "http://localhost:4200")
    public ArrayList<DomainDetectResult> domainDect(@RequestParam(value = "filepath",required = false)String detectFilePath,
                                                   @RequestParam(value = "uid",required = true) long userid){

        ArrayList<DomainDetectResult> result = null;

        DetectHistory detectHistory = new DetectHistory(new Date(),userid);
        detectHistoryRepository.save(detectHistory);
        try{
            //result =ModelCalc.modelPrediction("c:\\DecisionTreeIris.pmml","c:\\data_View.txt");
        }catch (Exception e){
            e.printStackTrace();
        }
        for(int i =0;i<result.size();i++){
            result.get(i).setHistoryId(detectHistory.gethId());
        }
        domainDetectResultRepository.saveAll(result);
        return result;
    }
    @GetMapping("/history")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<DetectHistory> getAllDetectHistory(@RequestParam(value = "userId",required = false)long userId){
            List<DetectHistory> historyList =detectHistoryRepository.findDetectHistoriesByUserId(userId);
            return historyList;
    }
    @GetMapping("/detail")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<DomainDetectResult> getDetectHistoryDetail(@RequestParam(value = "hId",required = true)long hId){
        List<DomainDetectResult> resultlist =domainDetectResultRepository.findDomainDetectResultsByHistoryId(hId);
        return resultlist;
    }

}


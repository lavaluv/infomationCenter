package bupt.hbq.spring.controller;

import bupt.hbq.spring.dao.DetectHistoryRepository;
import bupt.hbq.spring.dao.DomainDetectResultRepository;
import bupt.hbq.spring.objects.DataFormat;
import bupt.hbq.spring.objects.dns.DetectHistory;
import bupt.hbq.spring.objects.dns.DomainCountView;
import bupt.hbq.spring.objects.dns.DomainDetectResult;
import bupt.hbq.spring.objects.dns.HistoryRecordView;
import bupt.hbq.spring.objects.dns.IpCountView;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:4200","http://localhost:63342"})
@RestController
public class DomainViewController {
    private DomainDetectResultRepository domainDetectResultRepository;
    private DetectHistoryRepository detectHistoryRepository;
    public DomainViewController(DomainDetectResultRepository domainDetectResultRepository,DetectHistoryRepository detectHistoryRepository){
        this.domainDetectResultRepository = domainDetectResultRepository;
        this.detectHistoryRepository =detectHistoryRepository;
    }
    @GetMapping("/info/dnsIpCount")
    public DataFormat<Object> getIpCountView(@RequestParam(value = "n",required = true)int n){
    	List<DetectHistory> histories = detectHistoryRepository.findFirst1ByDetectTimeGreaterThan(
    			"0", new Sort(Direction.DESC, "detectTime"));
        List<DomainDetectResult> ddrlist =domainDetectResultRepository.findDomainDetectResultsByHistoryId(
        		histories.size()==0?-1:histories.get(0).gethId());
        DataFormat<Object> dataFormat = new DataFormat<Object>();
        getIpCountViewList(ddrlist,n).forEach(data->{
        	dataFormat.addData(data);
        });
        return dataFormat;
    }
    public List<IpCountView> getIpCountViewList(List<DomainDetectResult> list,int n){
        List<IpCountView> viewsList = new ArrayList<IpCountView>();
        HashMap<String,Integer> map = new HashMap<>();
        for(int i=0;i<list.size();i++){
            String iplistString =list.get(i).getIp();
            String[] iplist = iplistString.split(" ");
            for(int j =0;j<iplist.length;j++){
                if(map.containsKey(iplist[j])){
                    map.put(iplist[j],map.get(iplist[j])+1);
                }else{
                    map.put(iplist[j],1);
                }
            }
        }
        for(String key:map.keySet()){
            IpCountView icv = new IpCountView(key,map.get(key));
            viewsList.add(icv);
        }
        Collections.sort(viewsList, new Comparator<IpCountView>() {
            @Override
            public int compare(IpCountView o1, IpCountView o2) {
                return o2.getCountnumber()-o1.getCountnumber();
            }
        });
        if(viewsList.size()<=n){
            return viewsList;
        }else{
            ArrayList<IpCountView> finalviewlist = new ArrayList<>();
            for(int i =0;i<n;i++){
                finalviewlist.add(viewsList.get(i));
            }
            return finalviewlist;
        }

    }
    @GetMapping("/historyView")
    public DataFormat<Object> getHistory(@RequestParam(value = "gap",required = true)String gap) throws Exception{

        long endTime = new Date().getTime();
        long gap_l = Long.parseLong(gap);
        long startTime = new Date().getTime()-gap_l;

        List<DetectHistory> dhlist =detectHistoryRepository.findDetectHistoriesByDetectTimeBetween(""+startTime,""+endTime);
        ArrayList<HistoryRecordView> hrlist = getHistoryRecordViewList(dhlist,endTime,gap_l);
        DataFormat<Object> df = new DataFormat<>();
        for(int i =0;i<hrlist.size();i++){
            df.addData(hrlist.get(i));
        }
        return df;
    }
    public ArrayList<HistoryRecordView> getHistoryRecordViewList(List<DetectHistory> dhlist,long endTime,long gap){
        ArrayList<HistoryRecordView> hrlist = new ArrayList<>();
        long[] datelist = new long[7];
        long gap1 =gap/6;
        for(int i =0;i<datelist.length;i++){
            datelist[i] = endTime-gap1*i;
        }
        int[] l = new int[6];
        for(int i =0;i<dhlist.size();i++){
            DetectHistory dh =dhlist.get(i);
            long n = Long.parseLong(dh.getDetectTime());
            if(n>datelist[6]&&n<=datelist[5]){
                l[5]+=dh.getDetectSize();
            }else if(n>datelist[5]&&n<=datelist[4]){
                l[4]+=dh.getDetectSize();
            }else if(n>datelist[4]&&n<=datelist[3]){
                l[3]+=dh.getDetectSize();
            }else if(n>datelist[3]&&n<=datelist[2]){
                l[2]+=dh.getDetectSize();
            }else if(n>datelist[2]&&n<=datelist[1]){
                l[1]+=dh.getDetectSize();
            }else if(n>datelist[1]&&n<=datelist[0]){
                l[0]+=dh.getDetectSize();
            }
        }
        for(int i =0;i<6;i++){
            hrlist.add(new HistoryRecordView(""+datelist[i],l[i]));
        }
        return hrlist;
    }
    @GetMapping("/countAllDomain")
    public DataFormat<Object> countAllDomain(@RequestParam(value = "n",required = true) int n){
        List<Object[]> ddr =domainDetectResultRepository.queryTopByCountnumber(PageRequest.of(0, n)).getContent();
        DataFormat<Object> dataFormat = new DataFormat<>();
        for(int i =0;i<n;i++){
            dataFormat.addData(new DomainCountView((long)ddr.get(i)[1],(String)ddr.get(i)[0]));
        }
        return dataFormat;
    }
}


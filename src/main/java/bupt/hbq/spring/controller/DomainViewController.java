package bupt.hbq.spring.controller;

import com.maxmind.geoip2.DatabaseReader;

import bupt.hbq.spring.dao.DomainDetectResultRepository;
import bupt.hbq.spring.objects.dns.DomainDetectResult;
import bupt.hbq.spring.objects.dns.DomainThreadView;
import bupt.hbq.spring.objects.dns.IpCountView;
import bupt.hbq.spring.objects.dns.MapView;
import bupt.hbq.spring.service.IpCounttryUtil;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DomainViewController {
    private DomainDetectResultRepository domainDetectResultRepository;

    public DomainViewController(DomainDetectResultRepository domainDetectResultRepository){
        this.domainDetectResultRepository = domainDetectResultRepository;
    }
    @GetMapping("/ipcount")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<IpCountView> getIpCountView(@RequestParam(value = "resultId",required = true)long resultId,
                                            @RequestParam(value = "n",required = true)int n){
        List<IpCountView> viewList = new ArrayList<IpCountView>();
        List<DomainDetectResult> ddrlist =domainDetectResultRepository.findDomainDetectResultsByHistoryId(resultId);
        return getIpCountViewList(ddrlist,n);
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
                return o1.getCountnumber()-o2.getCountnumber();
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
    public List<DomainThreadView> getDomainThreadViewList(List<DomainDetectResult> domainDetectResultList){
        List<DomainThreadView> domainThreadViewList = new ArrayList<>();
        int l1=0;
        int l2=0;
        int l3=0;
        int l4=0;
        int l5=0;
        for(int i =0;i<domainDetectResultList.size();i++){
            String[] iplist = domainDetectResultList.get(i).getIp().split(" ");
            int n =iplist.length;
            if(n<=1){
                l1++;
            }else if(n<=3){
                l2++;
            }else if(n<=6){
                l3++;
            }else if(n<=10){
                l4++;
            }else{
                l5++;
            }
        }
        float p1 = (float) l1/(l1+l2+l3+l4+l5);
        float p2 = (float) l2/(l1+l2+l3+l4+l5);
        float p3 = (float) l3/(l1+l2+l3+l4+l5);
        float p4 = (float) l4/(l1+l2+l3+l4+l5);
        float p5 = (float) l5/(l1+l2+l3+l4+l5);
        domainThreadViewList.add(new DomainThreadView(1,p1));
        domainThreadViewList.add(new DomainThreadView(2,p2));
        domainThreadViewList.add(new DomainThreadView(3,p3));
        domainThreadViewList.add(new DomainThreadView(4,p4));
        domainThreadViewList.add(new DomainThreadView(5,p5));


        return domainThreadViewList;
    }
    @GetMapping("/idanger")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<DomainThreadView> getDomainThreadView(@RequestParam(value = "resultId") long resultId){
        List<DomainThreadView> viewsList = new ArrayList<>();
        List<DomainDetectResult> ddrlist = domainDetectResultRepository.findDomainDetectResultsByHistoryId(resultId);


        return getDomainThreadViewList(ddrlist);
    }
    public List<MapView> getMapViewList(List<DomainDetectResult> ddrist){
        List<MapView> mapViewList = new ArrayList<>();
        DatabaseReader reader = IpCounttryUtil.CreatCityReader();
        for(int i =0;i<ddrist.size();i++){
            DomainDetectResult ddr = ddrist.get(i);
            String[] iplist = ddr.getIp().split(" ");
            for(int j =0;j<iplist.length;j++){
                String city =IpCounttryUtil.getCountry(iplist[j],reader);
                MapView mv = new MapView(iplist[j],city);
                mapViewList.add(mv);
            }


        }
        return mapViewList;

    }
    @GetMapping("/ipaddress")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<MapView> getMapView(@RequestParam(value = "resultId") long resultId){
        List<MapView> viewList = new ArrayList<>();
        List<DomainDetectResult> ddrlist = domainDetectResultRepository.findDomainDetectResultsByHistoryId(resultId);

        return getMapViewList(ddrlist);

    }
}


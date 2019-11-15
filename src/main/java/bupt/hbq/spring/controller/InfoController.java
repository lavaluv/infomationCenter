package bupt.hbq.spring.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map.Entry;
import java.util.Random;
import java.util.Set;
import java.util.TreeMap;

import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.maxmind.geoip2.DatabaseReader;

import bupt.hbq.spring.dao.DetectHistoryRepository;
import bupt.hbq.spring.dao.DomainDetectResultRepository;
import bupt.hbq.spring.dao.InfoRepository;
import bupt.hbq.spring.dao.TrojanRepository;
import bupt.hbq.spring.objects.DataFormat;
import bupt.hbq.spring.objects.dns.DetectHistory;
import bupt.hbq.spring.objects.dns.DomainDetectResult;
import bupt.hbq.spring.objects.dns.IpCountView;
import bupt.hbq.spring.objects.info.FlowNum;
import bupt.hbq.spring.objects.info.Info;
import bupt.hbq.spring.objects.info.MapView;
import bupt.hbq.spring.objects.info.PackageNum;
import bupt.hbq.spring.objects.info.ThreatLevel;
import bupt.hbq.spring.objects.info.ThreatLevelNum;
import bupt.hbq.spring.objects.info.ThreatNum;
import bupt.hbq.spring.objects.trojan.Trojan;
import bupt.hbq.spring.service.IpAddressUtil;

@RestController
public class InfoController {
	private InfoRepository respository;
	private TrojanRepository trojanRepository;
	private DetectHistoryRepository detectHistoryRepository;
	private DomainDetectResultRepository domainDetectResultRepository;
	public InfoController(InfoRepository respository,TrojanRepository trojanRespository,
			DetectHistoryRepository detectHistoryRepository,DomainDetectResultRepository domainDetectResultRepository) {
		this.respository = respository;
		this.trojanRepository = trojanRespository;
		this.detectHistoryRepository = detectHistoryRepository;
		this.domainDetectResultRepository = domainDetectResultRepository;
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
	@GetMapping("/info/trojanIpCount")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> trojanIpCount(@RequestParam(value = "n",required = true)int n){
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		Trojan newest = trojanRepository.findFirst1ByTimeGreaterThan("0", new Sort(Direction.DESC, "time"));
		List<Trojan> list = trojanRepository.findByTime(newest.getTime());
		TreeMap<String, Integer> map = new TreeMap<String, Integer>();
		list.forEach(trojan->{
			if (map.containsKey(trojan.getSrcIP())) {
				map.put(trojan.getSrcIP(), map.get(trojan.getSrcIP()) + 1);
			}
			else {
				map.put(trojan.getSrcIP(), 1);
			}
			if (map.containsKey(trojan.getDesIP())) {
				map.put(trojan.getDesIP(), map.get(trojan.getDesIP()) + 1);
			}
			else {
				map.put(trojan.getDesIP(), 1);
			}
		});
		for (int i = 0; i < n && map.size() > 0; i++) {
			int max = Integer.MIN_VALUE;
			String maxString = null;
			Set<Entry<String, Integer>> set = map.entrySet();
			for (Iterator<Entry<String, Integer>> iterator = set.iterator(); iterator.hasNext();) {
				Entry<String, Integer> entry = iterator.next();
				if (max < entry.getValue()) {
					max = entry.getValue();
					maxString = entry.getKey();
				}
			}
			dataFormat.addData(new IpCountView(maxString, max));
			map.remove(maxString);
		}
		return dataFormat;
	}
	@GetMapping("/info/threatLevelNum")
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> threatLevelNum() {
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		ArrayList<String> type = new ArrayList<String>();
		ArrayList<int[]> leveList = new ArrayList<int[]>();
		Trojan newest = trojanRepository.findFirst1ByTimeGreaterThan("0", new Sort(Direction.DESC, "time"));
		int[] level = new int[5];
		level[4] = trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 5);
		level[3] = trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 4);
		level[2] = trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 3);
		level[1] = trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 2);
		level[0] = trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 1) + 
				trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 0);
		type.add("trojan");
		leveList.add(level);
		
		level = new int[5];
		List<DetectHistory> histories = detectHistoryRepository.findFirst1ByDetectTimeGreaterThan(
    			"0", new Sort(Direction.DESC, "detectTime"));
        List<DomainDetectResult> ddrlist = domainDetectResultRepository.findDomainDetectResultsByHistoryId(
        		histories.size()==0?-1:histories.get(0).gethId());
        for(int i =0;i<ddrlist.size();i++){
            String[] iplist = ddrlist.get(i).getIp().split(" ");
            int n =iplist.length;
            if(n<=1){
                level[0]++;
            }else if(n<=3){
                level[1]++;
            }else if(n<=6){
                level[2]++;
            }else if(n<=10){
                level[3]++;
            }else{
                level[4]++;
            }
        }
        type.add("dns");
        leveList.add(level);
        
        dataFormat.addData(new ThreatLevelNum(type,leveList));
		return dataFormat;
	}
    @GetMapping("/info/threatLevel")
    @CrossOrigin(origins = "http://localhost:4200")
    public DataFormat<Object> getDomainThreadView(){
    	List<DetectHistory> histories = detectHistoryRepository.findFirst1ByDetectTimeGreaterThan(
    			"0", new Sort(Direction.DESC, "detectTime"));
        List<DomainDetectResult> ddrlist = domainDetectResultRepository.findDomainDetectResultsByHistoryId(
        		histories.size()==0?-1:histories.get(0).gethId());
        DataFormat<Object> dataFormat = new DataFormat<Object>();
        getThreatViewList(ddrlist).forEach(data->{
        	dataFormat.addData(data);
        });

        return dataFormat;
    }
    public List<ThreatLevel> getThreatViewList(List<DomainDetectResult> domainDetectResultList){
        List<ThreatLevel> domainThreadViewList = new ArrayList<>();
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
        
        Trojan newest = trojanRepository.findFirst1ByTimeGreaterThan("0", new Sort(Direction.DESC, "time"));
		l5 += trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 5);
		l4 += trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 4);
		l3 += trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 3);
		l2 += trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 2);
		l1 += trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 1) + 
				trojanRepository.countByTimeAndThreatLevel(newest.getTime(), 0);
		
        domainThreadViewList.add(new ThreatLevel(1,l1));
        domainThreadViewList.add(new ThreatLevel(2,l2));
        domainThreadViewList.add(new ThreatLevel(3,l3));
        domainThreadViewList.add(new ThreatLevel(4,l4));
        domainThreadViewList.add(new ThreatLevel(5,l5));
        return domainThreadViewList;
    }    
    @GetMapping("/info/ipAddress")
    @CrossOrigin(origins = "http://localhost:4200")
    public DataFormat<Object> getMapView(){
    	List<DetectHistory> histories = detectHistoryRepository.findFirst1ByDetectTimeGreaterThan(
    			"0", new Sort(Direction.DESC, "detectTime"));
    	List<DomainDetectResult> ddrlist = domainDetectResultRepository.findDomainDetectResultsByHistoryId(
        		histories.size()==0?-1:histories.get(0).gethId());
    	Trojan newest = trojanRepository.findFirst1ByTimeGreaterThan("0", new Sort(Direction.DESC, "time"));
    	List<Trojan> trojans = trojanRepository.findByTime(newest.getTime());
        DataFormat<Object> dataFormat = new DataFormat<Object>();
        getMapViewList(ddrlist,trojans).forEach(data->{
        	dataFormat.addData(data);
        });
        return dataFormat;

    }
    public List<MapView> getMapViewList(List<DomainDetectResult> ddrist,List<Trojan> trojans){
        List<MapView> mapViewList = new ArrayList<>();
        DatabaseReader reader = IpAddressUtil.CreatCityReader();
        HashMap<String,ArrayList<String>> ipCityMap = new HashMap<String, ArrayList<String>>(); 
        HashMap<String, Integer> ipMap = new HashMap<String, Integer>();
        for(int i =0;i<ddrist.size();i++){
            DomainDetectResult ddr = ddrist.get(i);
            String[] iplist = ddr.getIp().split(" ");
            for(int j =0;j<iplist.length;j++){
                String city =IpAddressUtil.getCity(iplist[j],reader);
                if (city != null) {
					if (ipCityMap.containsKey(city)) {
						ipCityMap.get(city).add(iplist[j]);
					}
					else {
						ArrayList<String> ipArrayList = new ArrayList<String>();
						ipArrayList.add(iplist[j]);
						ipCityMap.put(city, ipArrayList);
					}
					if (ipMap.containsKey(iplist[j])) {
						ipMap.put(iplist[j], ipMap.get(iplist[j]) + 1);
					}
					else {
						ipMap.put(iplist[j], 1);
					}
				}
            }
        }
        for (int i = 0; i < trojans.size(); i++) {
        	String desIp = trojans.get(i).getDesIP();
            String city =IpAddressUtil.getCity(desIp,reader);
            if (city != null) {
				if (ipCityMap.containsKey(city)) {
					ipCityMap.get(city).add(desIp);
				}
				else {
					ArrayList<String> ipArrayList = new ArrayList<String>();
					ipArrayList.add(desIp);
					ipCityMap.put(city, ipArrayList);
				}
				if (ipMap.containsKey(desIp)) {
					ipMap.put(desIp, ipMap.get(desIp) + 1);
				}
				else {
					ipMap.put(desIp, 1);
				}
			}
		}
        
        ipCityMap.forEach((k,v)->{
        	StringBuilder builder = new StringBuilder();
        	MapView mapView = new MapView();
        	mapView.setName(k);
        	mapView.setValue(v.size());
        	for (int i = 0; i < 10; i++) {
				int max = 0;
				int index = -1;
				for (int j = 0; j < v.size(); j++) {
					int num = ipMap.get(v.get(j));
					if (num > max) {
						max = num;
						index = j;
					}
				}
				if (index != -1) {
					builder.append(v.remove(index) + ",");
				}
			}
        	builder.deleteCharAt(builder.length()-1);
        	mapView.setWarn(builder.toString());
        	mapViewList.add(mapView);
        });
        return mapViewList;
    }
}

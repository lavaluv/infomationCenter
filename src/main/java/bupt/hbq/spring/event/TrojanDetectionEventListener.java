package bupt.hbq.spring.event;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.TreeMap;
import java.util.Map.Entry;

import org.springframework.context.event.EventListener;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import bupt.hbq.spring.dao.InfoRepository;
import bupt.hbq.spring.dao.TrojanRepository;
import bupt.hbq.spring.dao.TrojanViewRepository;
import bupt.hbq.spring.objects.info.Info;
import bupt.hbq.spring.objects.trojan.Trojan;
import bupt.hbq.spring.objects.trojan.TrojanView;

@Component
public class TrojanDetectionEventListener {
	private static final int DETECT_PACKET_SIZE = 2000;
	private static final String URL = "http://10.3.200.130:8501/v1/models/cnn:predict";
	private TrojanRepository trojanRespository;
	private TrojanViewRepository trojanViewRepository;
	private InfoRepository infoRepository;
	public TrojanDetectionEventListener(TrojanRepository trojanRespository,TrojanViewRepository trojanViewRepository,
			InfoRepository infoRepository) {
		this.trojanRespository = trojanRespository;
		this.trojanViewRepository = trojanViewRepository;
		this.infoRepository = infoRepository;
	}
	@EventListener
	public void register(TrojanDetectionEvent trojanDetectionEvent) {
		HashMap<String,int[]> hashMap = trojanDetectionEvent.getHashMap();
		ArrayList<HashMap<String, Object>> resultAll = new ArrayList<HashMap<String,Object>>();
		Set<Entry<String, int[]>> set = hashMap.entrySet();
		ArrayList<int[]> in = new ArrayList<int[]>();
		ArrayList<String> strings = new ArrayList<String>();
		ArrayList<Trojan> trojans = new ArrayList<Trojan>();
		TreeMap<String, Integer> viewMap = new TreeMap<String, Integer>();
		int index = 0;
		for (Iterator<Entry<String, int[]>> iterator = set.iterator(); iterator.hasNext();index++) {
			Entry<String, int[]> entry = iterator.next();
			in.add(entry.getValue());
			strings.add(entry.getKey());
			if (index == DETECT_PACKET_SIZE) {
				System.out.println("Trojan detecting");
				ArrayList<HashMap<String, Object>> resultArrayList = detectResult(in);
				resultAll.addAll(resultArrayList);
				in.clear();
				index = 0;
			}
		}
		if (in.size() != 0) {
			ArrayList<HashMap<String, Object>> resultArrayList = detectResult(in);
			resultAll.addAll(resultArrayList);
		}
		for (int i = 0; i < strings.size(); i++) {
			if ((Integer)resultAll.get(i).get("classes") == 1) {
				String[] resultStrings = strings.get(i).split("_");
				Trojan trojan = new Trojan();
				trojan.setProtocol(resultStrings[0]);
				trojan.setSrcIP(resultStrings[1]);
				trojan.setSrcPort(Integer.valueOf(resultStrings[2]));
				trojan.setDesIP(resultStrings[3]);
				trojan.setDesPort(Integer.valueOf(resultStrings[4]));
				trojan.setTime(trojanDetectionEvent.getTrojanInfo().getTime());
				trojan.setType(String.valueOf(resultAll.get(i).get("classes")));
				@SuppressWarnings("unchecked")
				ArrayList<Object> arrayList = (ArrayList<Object>)resultAll.get(i).get("probabilities");
				String pro = String.valueOf(arrayList.get(1));
				trojan.setThreatLevel(pro.charAt(0) == '1'?5:Integer.valueOf(pro.substring(2, 3))-5);
				trojans.add(trojan);
				String protocolString = getProtocol(trojan.getDesPort()) != null?
						getProtocol(trojan.getDesPort()):"UNKNOUW";
				if (viewMap.containsKey(protocolString)) {
					viewMap.put(protocolString, viewMap.get(protocolString)+784);
				}
				else {
					viewMap.put(protocolString, 784);
				}
			}
		}
		trojanRespository.saveAll(trojans);
		TrojanView trojanView = new TrojanView();
		trojanView.setTime(trojanDetectionEvent.getTrojanInfo().getTime());
		ArrayList<String> protocoList = new ArrayList<String>();
		protocoList.addAll(viewMap.keySet());
		trojanView.setProtocol(protocoList);
		ArrayList<Integer> sizeList = new ArrayList<Integer>();
		sizeList.addAll(viewMap.values());
		trojanView.setSize(sizeList);
		trojanViewRepository.save(trojanView);
		List<Info> infos = infoRepository.findByTime(trojanDetectionEvent.getTrojanInfo().getTime());
		if (infos.size() != 0) {
			infoRepository.updateThreatNumAndNotHandleNumByTime(infos.get(0).getThreatNum()+trojans.size(),
					infos.get(0).getNotHandleNum()+1, infos.get(0).getTime());
		}
		System.out.println("Trojan detection end");
	}
	@SuppressWarnings("unchecked")
	private ArrayList<HashMap<String, Object>> detectResult(ArrayList<int[]> in){
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
		HashMap<String, ArrayList<int[]>> map = new HashMap<String, ArrayList<int[]>>();
		in.trimToSize();
		map.put("instances",in);
		HttpEntity<HashMap<String, ArrayList<int[]>>> request = new HttpEntity<HashMap<String,ArrayList<int[]>>>(map,headers);
		ResponseEntity<String> responseEntity = restTemplate.postForEntity(URL, request, String.class);
		ObjectMapper mapper = new ObjectMapper();
		HashMap<String, ArrayList<HashMap<String, Object>>> result;
		try {
			result = mapper.readValue(responseEntity.getBody(), HashMap.class);
			return result.get("predictions");
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	private String getProtocol(int port) {
		switch (port) {
		case 1: return "TCPMUX";
		case 5: return "RJE";
		case 7: return "ECHO";
		case 9: return "DISCARD";
		case 11: return "SYSTAT";
		case 13: return "DAYTIME";
		case 17: return "QOTD";
		case 18: return "MSP";
		case 19: return "CHARGEN";
		case 20: return "FTP";
		case 21: return "FTP";
		case 22: return "SSH";
		case 23: return "TELNET";
		case 25: return "SMTP";
		case 37: return "TIME";
		case 39: return "RIP";
		case 42: return "NAMESERVER";
		case 43: return "NICNAME";
		case 49: return "TACACS";
		case 50: return "RE-MAIL-CK";
		case 53: return "DNS";
		case 63: return "WHOIS++";
		case 67: return "BOOTPS";
		case 68: return "BOOTPC";
		case 69: return "TFTP";
		case 70: return "GOPHER";
		case 71: return "NETRJS";
		case 72: return "NETRJS";
		case 73: return "NETRJS";
		case 79: return "FINGER";
		case 80: return "HTTP";
		case 88: return "KERBEROS";
		case 95: return "SUPDUP";
		case 101: return "HOSTNAME";
		case 102: return "ISO-TSAP";
		case 105: return "CSNET-NS";
		case 107: return "RTELNET";
		case 109: return "POP";
		case 110: return "POP";
		case 111: return "SUNRPC";
		case 113: return "AUTH";
		case 115: return "SFTP";
		case 117: return "UUCP-PATH";
		case 119: return "NNTP";
		case 123: return "NTP";
		case 137: return "NETBIOS";
		case 138: return "NETBIOS";
		case 139: return "NETBIOS";
		case 143: return "IMAP";
		case 161: return "SNMP";
		case 162: return "SNMP";
		case 163: return "CMIP";
		case 164: return "CMIP";
		case 174: return "MAILQ";
		case 177: return "XDMCP";
		case 178: return "NEXTSTEP";
		case 179: return "BGP";
		case 191: return "PROSPERO";
		case 194: return "IRC";
		case 199: return "SMUX";
		case 201: return "APPLETALK";
		case 202: return "APPLETALK";
		case 204: return "APPLETALK";
		case 206: return "APPLETALK";
		case 209: return "QMTP";
		case 210: return "Z39.50";
		case 213: return "IPX";
		case 220: return "IMAP3";
		case 245: return "LINK";
		case 347: return "FATSERV";
		case 363: return "RSVP-TUNNEL";
		case 369: return "RPC2PORTMAP";
		case 370: return "CODAAUTH2";
		case 372: return "ULISTPROC";
		case 389: return "LDAP";
		case 427: return "SVRLOC";
		case 434: return "MOBILEIP";
		case 435: return "MOBILEIP";
		case 443: return "HTTPS";
		case 444: return "SNPP";
		case 445: return "MICROSOFT-DS";
		case 464: return "KPASSWD";
		case 468: return "PHOTURIS";
		case 487: return "SAFT";
		case 488: return "GSS-HTTP";
		case 496: return "PIM-RP-DISC";
		case 500: return "ISAKMP";
		case 535: return "IIOP";
		case 538: return "GDOMAP";
		case 546: return "DHCPV6";
		case 547: return "DHCPV6";
		case 554: return "RTSP";
		case 563: return "NNTPS";
		case 565: return "WHOAMI";
		case 587: return "SUBMISSION";
		case 610: return "NPMP";
		case 611: return "NPMP";
		case 612: return "HMMP-IND";
		case 631: return "IPP";
		case 636: return "LDAPS";
		case 674: return "ACAP";
		case 694: return "HA-CLUSTER";
		case 749: return "KERBEROS";
		case 750: return "KERBEROS";
		case 765: return "WEBSTER";
		case 767: return "PHONEBOOK";
		case 873: return "RSYNC";
		case 992: return "TELNETS";
		case 993: return "IMAPS";
		case 994: return "IRCS";
		case 995: return "POPS";
		case 8080: return "WEBCACHE";
		default: return null;
		}
	}
}

package bupt.hbq.spring.event;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;
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

import bupt.hbq.spring.dao.TrojanRespository;

@Component
public class TrojanDetectionEventListener {
	private static final int DETECT_PACKET_SIZE = 2000;
	private static final String URL = "http://10.3.200.130:8501/v1/models/cnn:predict";
	private TrojanRespository trojanRespository;
	public TrojanDetectionEventListener(TrojanRespository t) {
		this.trojanRespository = trojanRespository;
	}
	@EventListener
	public void register(TrojanDetectionEvent trojanDetectionEvent) {
		HashMap<String,int[]> hashMap = trojanDetectionEvent.getHashMap();
		ArrayList<HashMap<String, Object>> resultAll = new ArrayList<HashMap<String,Object>>();
		Set<Entry<String, int[]>> set = hashMap.entrySet();
		ArrayList<int[]> in = new ArrayList<int[]>();
		ArrayList<String> strings = new ArrayList<String>();
		int index = 0;
		for (Iterator<Entry<String, int[]>> iterator = set.iterator(); iterator.hasNext();index++) {
			Entry<String, int[]> entry = iterator.next();
			in.add(entry.getValue());
			strings.add(entry.getKey());
			if (index == DETECT_PACKET_SIZE) {
				ArrayList<HashMap<String, Object>> resultArrayList = detectResult(in);
				System.out.println(resultArrayList);
				resultAll.addAll(resultArrayList);
				in.clear();
				index = 0;
			}
		}
		if (in.size() != 0) {
			ArrayList<HashMap<String, Object>> resultArrayList = detectResult(in);
			System.out.println(resultArrayList);
			resultAll.addAll(resultArrayList);
		}
		System.out.println(strings.size()+":"+resultAll.size());
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
}

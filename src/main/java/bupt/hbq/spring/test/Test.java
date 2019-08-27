package bupt.hbq.spring.test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;

import bupt.hbq.spring.objects.info.Info;
import lombok.EqualsAndHashCode;
import lombok.ToString;
@ToString @EqualsAndHashCode
public class Test {
	public static void main(String[] args)throws Exception{
        // test jackson
//		Info info = new Info();
//		info.setTime(String.valueOf(System.currentTimeMillis()));
//		ObjectMapper mapper = new ObjectMapper();
//		String reString = mapper.writeValueAsString(info);
//		System.out.println(reString);
        //test http get
//		RestTemplate restTemplate = new RestTemplate();
//		ResponseEntity<String> responseEntity = restTemplate.getForEntity("http://127.0.0.1:5000/api/test", String.class);
//		System.out.println(responseEntity.getBody());
//		ObjectMapper mapper = new ObjectMapper();
//		@SuppressWarnings("unchecked")
//		HashMap<String, HashMap<String, Object>> map = mapper.readValue(responseEntity.getBody(), HashMap.class);
//		System.out.println(map.get("tasks"));
		//test http post
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://10.3.200.130:8501/v1/models/half_plus_two:predict";
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
		HashMap<String, Double[]> map = new HashMap<String, Double[]>();
		Double[] doubles = {1.0,2.0,3.0};
		map.put("instances",doubles);
		
		HttpEntity<HashMap<String, Double[]>> request = new HttpEntity<HashMap<String,Double[]>>(map,headers);
		ResponseEntity<String> responseEntity = restTemplate.postForEntity(url, request, String.class);
		System.out.println(responseEntity.getBody());
		ObjectMapper mapper = new ObjectMapper();
		@SuppressWarnings("unchecked")
		HashMap<String, HashMap<String, Object>> result = mapper.readValue(responseEntity.getBody(), HashMap.class);
		System.out.println(result.get("predictions"));
	}
}

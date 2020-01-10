package bupt.hbq.spring.controller;

import java.io.IOException;
import java.util.HashMap;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import bupt.hbq.spring.objects.DataFormat;
import bupt.hbq.spring.objects.trojan.TrojanInstances;

@CrossOrigin(origins = {"http://localhost:4200","http://localhost:63342","http://localhost:8080"})
@RestController
public class TrojanModelController {
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/torjan/model",produces = {"application/json;charset=UTF-8"})
	public DataFormat<Object> test(@RequestBody TrojanInstances instances){
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://10.3.200.130:8501/v1/models/half_plus_two:predict";
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
		HashMap<String, Double[]> map = new HashMap<String, Double[]>();
		map.put("instances",instances.getInstances());
		
		HttpEntity<HashMap<String, Double[]>> request = new HttpEntity<HashMap<String,Double[]>>(map,headers);
		ResponseEntity<String> responseEntity = restTemplate.postForEntity(url, request, String.class);
		ObjectMapper mapper = new ObjectMapper();
		HashMap<String, HashMap<String, Object>> result = null;
		try {
			result = mapper.readValue(responseEntity.getBody(), HashMap.class);
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
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		dataFormat.addData(result);
		return dataFormat;
	}
}

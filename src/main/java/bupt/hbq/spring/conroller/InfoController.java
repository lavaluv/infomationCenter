package bupt.hbq.spring.conroller;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import bupt.hbq.spring.objects.Info;
import bupt.hbq.spring.objects.InfoRespository;

@RestController
public class InfoController {
	private InfoRespository respository;
	public InfoController(InfoRespository respository) {
		this.respository = respository;
	}
	@GetMapping("/info")
	@CrossOrigin(origins = "http://localhost:4200")
	public Collection<Info> infos(){
		return respository.findAll().stream().collect(Collectors.toList());
	}
}

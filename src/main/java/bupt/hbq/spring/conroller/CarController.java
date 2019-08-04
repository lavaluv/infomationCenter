package bupt.hbq.spring.conroller;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import bupt.hbq.spring.objects.Car;
import bupt.hbq.spring.objects.CarRespository;

@RestController
public class CarController {
	private CarRespository respository;
	public CarController(CarRespository respository) {
		this.respository = respository;
	}
	@GetMapping("/car")
	@CrossOrigin(origins = "http://localhost:4200")
	public Collection<Car> cars(){
		return respository.findAll().stream().collect(Collectors.toList());
	}
	private boolean isCool(Car car) {
		return !car.getName().equals("AMC Gremlin") &&
                !car.getName().equals("Triumph Stag") &&
                !car.getName().equals("Ford Pinto") &&
                !car.getName().equals("Yugo GV");
	}
}

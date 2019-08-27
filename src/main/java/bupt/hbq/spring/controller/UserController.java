package bupt.hbq.spring.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bupt.hbq.spring.dao.UserRespository;
import bupt.hbq.spring.objects.DataFormat;
import bupt.hbq.spring.objects.RespondValue;
import bupt.hbq.spring.objects.User;

@RestController
public class UserController {
	private UserRespository userRespository;
	public UserController(UserRespository userRespository) {
		this.userRespository = userRespository;
	}
	@RequestMapping(value = "/login",produces = {"application/json;charset=UTF-8"},method = RequestMethod.POST)
	@CrossOrigin(origins = "http://localhost:4200")
	public DataFormat<Object> checkUser(@RequestBody User user){
		DataFormat<Object> dataFormat = new DataFormat<Object>();
		RespondValue respondValue = new RespondValue();
		if (!userRespository.findByNameAndPassword(user.getName(), user.getPassword()).isEmpty()) {
			respondValue.setRespond("true");
			dataFormat.addData(respondValue);
			return dataFormat;
		}
		else {
			respondValue.setRespond("false");
			respondValue.setMessage("Can't find user by name:"+user.getName()+" and password:"+user.getPassword());
			dataFormat.addData(respondValue);
			return dataFormat;
		}
	}
}

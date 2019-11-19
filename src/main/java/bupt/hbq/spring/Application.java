package bupt.hbq.spring;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import bupt.hbq.spring.dao.UserRepository;
import bupt.hbq.spring.objects.User;

@SpringBootApplication
public class Application {
	//spring入口函数
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	//执行初始化
	@Bean
	ApplicationRunner init(UserRepository userRespository) {
		return args -> {
			User user = new User();
			user.setName("admin");
			user.setPassword("bupt");
			userRespository.save(user);
		};
	}
}

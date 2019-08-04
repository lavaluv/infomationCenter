package bupt.hbq.spring;

import java.util.Date;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import bupt.hbq.spring.objects.Info;
import bupt.hbq.spring.objects.InfoRespository;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	@Bean
	ApplicationRunner init(InfoRespository respository) {
		return args -> {
			for(int i = 0;i < 10;i++) {
				Info info = new Info();
				info.setTime(new Date());
				info.setFlowNum((long) i);
				info.setPackageNum((long) i);
				info.setThreatNum((long) i);
				respository.save(info);
			}
			respository.findAll().forEach(infos -> {
				System.out.println(infos.getTime());
			});
		};
	}
}

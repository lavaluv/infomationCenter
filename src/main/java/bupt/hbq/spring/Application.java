package bupt.hbq.spring;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLDecoder;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import bupt.hbq.spring.dao.UserRespository;
import bupt.hbq.spring.objects.User;

@SpringBootApplication
public class Application {
//	public static final String JAR_PATH = getRealPath();
//	public static String DATA_INPUT_DIR;
//	public static String getRealPath() {
//        String realPath = Application.class.getClassLoader().getResource("")
//                .getFile();
//        java.io.File file = new java.io.File(realPath);
//        realPath = file.getAbsolutePath();
//        try {
//            realPath = java.net.URLDecoder.decode(realPath, "utf-8");
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        if (realPath.split("file:")[0]!="") {
//			realPath = realPath.split("file:")[0];
//		}
//        return realPath;
//    }
	public static void main(String[] args) {
//		DATA_INPUT_DIR = JAR_PATH+args[0];
//		System.out.println(DATA_INPUT_DIR);
		SpringApplication.run(Application.class, args);
	}
	
//	@Bean
//	ApplicationRunner init(InfoRespository respository,TrojanRespository trojanRespository,UserRespository userRespository
//			,TrojanViewRespository trojanViewRespository) {
	@Bean
	ApplicationRunner init(UserRespository userRespository) {
		return args -> {
			User user = new User();
			user.setName("admin");
			user.setPassword("bupt");
			userRespository.save(user);
//			for(int i = 0;i < 5;i++) {
//				Random random = new Random();
//				Info info = new Info();
//				info.setTime(String.valueOf(System.currentTimeMillis()+i*1000));
//				info.setFlowNum(random.nextInt(300));
//				info.setPackageNum(random.nextInt(300));
//				info.setThreatNum(random.nextInt(300));
//				info.setHandledNum(info.getThreatNum()-i);
//				info.setNotHandleNum(i);
//				Trojan trojan = new Trojan();
//				trojan.setTime(String.valueOf(System.currentTimeMillis()+i*1000));
//				trojan.setSrcIP("127.0.0.1");
//				trojan.setSrcPort(8080);
//				trojan.setDesIP("127.0.0.1");
//				trojan.setDesPort(8080);
//				trojan.setProtocol("tcp");
//				trojan.setThreatLevel(0);
//				trojan.setType("None");
//				trojan.setInfo("test");
//				trojanRespository.save(trojan);
//				respository.save(info);
//			}
//			for (int i = 0; i < 5; i++) {
//				Random random = new Random();
//				HashMap<String, String> protocal = new HashMap<String, String>();
//				protocal.put("TCP", String.valueOf(random.nextInt(300)));
//				protocal.put("UDP", String.valueOf(random.nextInt(300)));
//				protocal.put("DNS", String.valueOf(random.nextInt(300)));
//				TrojanView trojanView = new TrojanView();
//				trojanView.setProtocal(protocal);
//				trojanView.setTime(String.valueOf(System.currentTimeMillis()+i*1000));
//				trojanViewRespository.save(trojanView);
//			}
//			respository.findAll().forEach(infos -> {
//				System.out.println(infos.getTime());
//			});
		};
	}
}

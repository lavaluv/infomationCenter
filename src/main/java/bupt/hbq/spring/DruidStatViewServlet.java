package bupt.hbq.spring;

import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.WebInitParam;
import com.alibaba.druid.spring.boot.autoconfigure.properties.DruidStatProperties.StatViewServlet;
@WebServlet(urlPatterns = "/druid/*", initParams={    
	    @WebInitParam(name="allow",value=""),// IP白名单 (没有配置或者为空，则允许所有访问)    
	    @WebInitParam(name="deny",value="192.168.6.73"),// IP黑名单 (存在共同时，deny优先于allow)    
	    @WebInitParam(name="loginUsername",value="root"),// 用户名    
	    @WebInitParam(name="loginPassword",value="root"),// 密码    
	    @WebInitParam(name="resetEnable",value="false")// 禁用HTML页面上的“Reset All”功能    
	})   
public class DruidStatViewServlet extends StatViewServlet{

}

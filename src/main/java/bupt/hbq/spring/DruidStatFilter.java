package bupt.hbq.spring;

import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;
/*
 * 配置监控拦截器, druid监控拦截器   
 */
import com.alibaba.druid.spring.boot.autoconfigure.properties.DruidStatProperties.WebStatFilter;
@WebFilter(filterName="druidWebStatFilter",    
urlPatterns="/*",    
initParams={    
    @WebInitParam(name="exclusions",value="*.js,*.gif,*.jpg,*.bmp,*.png,*.css,*.ico,/druid/*"),// 忽略资源    
}) 
public class DruidStatFilter extends WebStatFilter{

}

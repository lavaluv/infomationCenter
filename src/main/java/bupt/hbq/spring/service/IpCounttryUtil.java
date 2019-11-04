package bupt.hbq.spring.service;

import com.maxmind.geoip2.DatabaseReader;
import com.maxmind.geoip2.exception.GeoIp2Exception;
import com.maxmind.geoip2.model.CityResponse;

import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;

public class IpCounttryUtil {
	private static final String CITY_DATABASE_PATH = "dataInput/dns/geoIP/GeoLite2-City.mmdb";
    public static DatabaseReader CreatCityReader(){
        File database = new File(CITY_DATABASE_PATH);
        DatabaseReader reader = null;
        try {
            reader = new DatabaseReader.Builder(database).build();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return reader;
    }
    public static String getCountry(String ip,DatabaseReader reader){
        InetAddress ipAddress =null;
        try {
            ipAddress = InetAddress.getByName(ip);
        } catch (UnknownHostException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        CityResponse response = null;
        try {
            response = reader.city(ipAddress);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (GeoIp2Exception e) {
            // TODO Auto-generated catch block
            return "";
        }

        return response.getCity().getName();

    }
}


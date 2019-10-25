package bupt.hbq.spring.service;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.pcap4j.core.NotOpenException;
import org.pcap4j.core.PcapNativeException;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class ScheduledTask {
	private final static SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("HH:mm:ss");
	private final static String DNS_FILE_PATH="dataInput/dns/shell";
	private static ExecutorService threadPool = Executors.newFixedThreadPool(3);
	@Scheduled(fixedDelay = 3600000)
	public void dnsInput() {
		System.out.println(DATE_FORMAT.format(new Date()));
		File file = new File(DNS_FILE_PATH);
		File[] files = file.listFiles();
		if (files != null) {
			for (int i = 0; i < files.length; i++) {
				if(files[i].isDirectory()){
					DateFormat dayFormat = new SimpleDateFormat("yyyyMMdd");
					try {
						Date dayDate = dayFormat.parse(files[i].getName());
						//TODO
						if (true) {
							File dirFile = new File(DNS_FILE_PATH+"/"+files[i].getName());
							File[] dirFiles = dirFile.listFiles();
							if (dirFiles != null) {
								for (File in : dirFiles) {
									if (in.isFile()) {
										DateFormat fileFormat = new SimpleDateFormat("yyyyMMddHH");
										Date hourDate = fileFormat.parse(in.getName().split("\\.")[0]);
										//TODO
										if (true) {
											//pcap to csv
											threadPool.submit(()->{
												try {
													DNSPcap.pcapToCsv(in);
												} catch (PcapNativeException e) {
													// TODO Auto-generated catch block
													e.printStackTrace();
												} catch (NotOpenException e) {
													// TODO Auto-generated catch block
													e.printStackTrace();
												} catch (InterruptedException e) {
													// TODO Auto-generated catch block
													e.printStackTrace();
												} catch (IOException e) {
													// TODO Auto-generated catch block
													e.printStackTrace();
												}
											});
										}
									}
								}
							}
						}
					} catch (ParseException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
				}
			}
		}
	}
}

package bupt.hbq.spring.service;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.pcap4j.core.NotOpenException;
import org.pcap4j.core.PcapNativeException;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import bupt.hbq.spring.dao.InfoRespository;
import bupt.hbq.spring.objects.info.Info;

@Service
public class ScheduledTask {
	private final static SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("HH:mm:ss");
	private final static String DNS_FILE_PATH="dataInput/dns/shell";
	private static ExecutorService threadPool = Executors.newSingleThreadExecutor();
	private InfoRespository infoRespository;
	private DNSPcap dnsPcap;
	public ScheduledTask(InfoRespository infoRespository,DNSPcap dnsPcap) {
		this.infoRespository=infoRespository;
		this.dnsPcap =dnsPcap;
	}
	@Scheduled(fixedDelay = 3600000)
	public void dnsInput() {
		System.out.println(DATE_FORMAT.format(new Date()));
		File file = new File(DNS_FILE_PATH);
		File[] files = file.listFiles();
		if (files != null) {
			Arrays.sort(files, new Comparator<File>() {
				@Override
				public int compare(File o1, File o2) {
					String s1 = o1.getName();
					String s2 = o2.getName();
					return s1.compareTo(s2);
				}
			});
			for (int i = 0; i < files.length; i++) {
				if(files[i].isDirectory()){
					DateFormat dayFormat = new SimpleDateFormat("yyyyMMdd");
					try {
						Date dayDate = dayFormat.parse(files[i].getName());
						List<Info> newest = infoRespository.findFirst1ByTimeGreaterThan("0",
								new Sort(Direction.DESC,"time"));
						if (newest.size() != 0) {
							System.out.println("newest time "+newest.get(0).getTime());
						}
						else {
							System.out.println("info is empty");
						}
						if (newest.size() == 0 || Long.valueOf(newest.get(0).getTime()) < (dayDate.getTime() + 86400000)) {
							File dirFile = new File(DNS_FILE_PATH+"/"+files[i].getName());
							File[] dirFiles = dirFile.listFiles();
							if (dirFiles != null) {
								Arrays.sort(dirFiles, new Comparator<File>() {
									@Override
									public int compare(File o1, File o2) {
										String s1 = o1.getName();
										String s2 = o2.getName();
										return s1.compareTo(s2);
									}
								});
								for (File in : dirFiles) {
									if (in.isFile() && !in.getName().split("\\.")[0].equals("")) {
										DateFormat fileFormat = new SimpleDateFormat("yyyyMMddHH");
										Date hourDate = fileFormat.parse(in.getName().split("\\.")[0]);
										if (newest.size() == 0 || Long.valueOf(newest.get(0).getTime()) < hourDate.getTime()) {
											//pcap to csv
											Info info = newest.size() == 0?new Info():newest.get(0);
											info.setFlowNum(in.length());
											info.setTime(String.valueOf(hourDate.getTime()));
											threadPool.submit(()->{
												dnsPcap.pcapToCsv(in,info);
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

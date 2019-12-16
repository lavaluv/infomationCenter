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

import bupt.hbq.spring.dao.DnsInfoRepository;
import bupt.hbq.spring.dao.InfoRepository;
import bupt.hbq.spring.dao.TrojanInfoRepository;
import bupt.hbq.spring.objects.info.DnsInfo;
import bupt.hbq.spring.objects.info.Info;
import bupt.hbq.spring.objects.info.TrojanInfo;
/*
 * 定时任务实现
 * 1.dns pcap文件定时处理
 * 2.trojan pcap文件定时处理
 * fixedDelay用于设定处理周期，周期应与数据捕获周期（shell脚本周期）相同
 * test开头的函数为测试静态文件的函数，不可与相应的处理函数同时启用
 */
@Service
public class ScheduledTask {
	private final static SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("HH:mm:ss");
	//pcap文件相对jar包的路径(IDE启动时为项目根目录)
	private final static String DNS_FILE_PATH="dataInput/dns/shell";
	private final static String TROJAN_FILE_PATH = "dataInput/trojan/shell";
	//test文件用于测试
	private final static String DNS_TEST_FILE = "dataInput/dns/test/test.pcap";
	private final static String TROJAN_TEST_FILE = "dataInput/trojan/test/test.pcap";
	//单线程池用于异步处理
	private static ExecutorService dnsThreadPool = Executors.newSingleThreadExecutor();
	private static ExecutorService trojanThreadPool = Executors.newSingleThreadExecutor();
	private DnsInfoRepository dnsInfoRespository;
	private TrojanInfoRepository trojanInfoRepository;
	private DNSPcap dnsPcap;
	private TrojanPcap trojanPcap;
	public ScheduledTask(DnsInfoRepository dnsInfoRespository,DNSPcap dnsPcap,
			TrojanInfoRepository trojanInfoRepository,TrojanPcap trojanPcap) {
		this.dnsInfoRespository=dnsInfoRespository;
		this.dnsPcap =dnsPcap;
		this.trojanInfoRepository = trojanInfoRepository;
		this.trojanPcap = trojanPcap;
	}
//	@Scheduled(fixedDelay = 300000)
	public void testDns() {
		System.out.println("dns "+DATE_FORMAT.format(new Date()));
		File file = new File(DNS_TEST_FILE);
		DnsInfo dnsInfo = new DnsInfo();
		dnsInfo.setTime(String.valueOf(System.currentTimeMillis()));
		dnsThreadPool.submit(()->{
			dnsPcap.pcapToCsv(file,dnsInfo);
		});
	}
	@Scheduled(fixedDelay = 3600000)
	public void testTrojan() {
		System.out.println("trojan "+DATE_FORMAT.format(new Date()));
		File file = new File(TROJAN_TEST_FILE);
		TrojanInfo trojanInfo = new TrojanInfo();
		trojanInfo.setTime(String.valueOf(System.currentTimeMillis()));
		trojanThreadPool.submit(()->{
			trojanPcap.trojanPcapToPng(file,trojanInfo);
		});
	}
	//dns pcap 文件输入
	@Scheduled(fixedDelay = 3600000)
	public void dnsInput() {
		System.out.println("dns "+DATE_FORMAT.format(new Date()));
		//读取路径下所有的文件和目录
		File file = new File(DNS_FILE_PATH);
		File[] files = file.listFiles();
		//按日期名字从小到大排序
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
				//为目录时
				if(files[i].isDirectory()){
					DateFormat dayFormat = new SimpleDateFormat("yyyyMMdd");
					try {
						//从目录名获取捕获日期
						Date dayDate = dayFormat.parse(files[i].getName());
						//查询数据库获取最新一条数据
						List<DnsInfo> newest = dnsInfoRespository.findFirst1ByTimeGreaterThan("0",
								new Sort(Direction.DESC,"time"));
						if (newest.size() != 0) {
							System.out.println("newest time "+newest.get(0).getTime());
						}
						else {
							System.out.println("info is empty");
						}
						//当数据库没有数据或最新数据的日期小于等于捕获日期
						if (newest.size() == 0 || Long.valueOf(newest.get(0).getTime()) < (dayDate.getTime() + 86400000)) {
							File dirFile = new File(DNS_FILE_PATH+"/"+files[i].getName());
							//获取该目录下的所有文件
							File[] dirFiles = dirFile.listFiles();
							//按时间从小到大排序
							if (dirFiles != null) {
								Arrays.sort(dirFiles, new Comparator<File>() {
									@Override
									public int compare(File o1, File o2) {
										String s1 = o1.getName();
										String s2 = o2.getName();
										return s1.compareTo(s2);
									}
								});
								//遍历每个文件
								for (File in : dirFiles) {
									String fileName = in.getName().split("\\.")[0];
									//当文件名不为空且不含temp字段时（temp字段代表正在捕获中的文件）
									if (in.isFile() && !fileName.equals("") && !fileName.contains("temp")) {
										DateFormat fileFormat = new SimpleDateFormat("yyyyMMddHHmm");
										//从文件明获取捕获时间
										Date hourDate = fileFormat.parse(fileName);
										//当数据库没有数据或最新数据的时间小于捕获时间
										if (newest.size() == 0 || Long.valueOf(newest.get(0).getTime()) < hourDate.getTime()) {
											//pcap to csv
											DnsInfo dnsInfo = newest.size() == 0?new DnsInfo():newest.get(0);
											dnsInfo.setTime(String.valueOf(hourDate.getTime()));
											dnsThreadPool.submit(()->{
												dnsPcap.pcapToCsv(in,dnsInfo);
											});
										}
									}
								}
							}
						}
					} catch (ParseException e1) {
						// TODO Auto-generated catch block
						System.out.println("file name parse err");
					}
				}
			}
		}
	}
//	@Scheduled(fixedDelay = 3600000)
	public void trojanInput() {
		System.out.println("trojan "+DATE_FORMAT.format(new Date()));
		File file = new File(TROJAN_FILE_PATH);
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
						List<TrojanInfo> newest = trojanInfoRepository.findFirst1ByTimeGreaterThan("0",
								new Sort(Direction.DESC,"time"));
						if (newest.size() != 0) {
							System.out.println("newest time "+newest.get(0).getTime());
						}
						else {
							System.out.println("info is empty");
						}
						if (newest.size() == 0 || Long.valueOf(newest.get(0).getTime()) < (dayDate.getTime() + 86400000)) {
							File dirFile = new File(TROJAN_FILE_PATH+"/"+files[i].getName());
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
											TrojanInfo trojanInfo = newest.size() == 0?new TrojanInfo():newest.get(0);
											trojanInfo.setTime(String.valueOf(hourDate.getTime()));
											trojanThreadPool.submit(()->{
												trojanPcap.trojanPcapToPng(in,trojanInfo);
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

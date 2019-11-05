package bupt.hbq.spring.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.dmg.pmml.FieldName;
import org.springframework.stereotype.Service;

import bupt.hbq.spring.objects.dns.DomainDetectResult;
@Service
public class DNSDetection {
	private static final String PMML_PATH = "dataInput/dns/pmml/DecisionTreeIris.pmml";
	//private static final String PMML_PATH = "/home/user1/hbq/informationCenter/dataInput/dns/pmml/DecisionTreeIris.pmml";
    public  ArrayList<DomainDetectResult> modelPrediction (String modelArgsFilePath) throws IOException{
        ModelInvoker invoker = new ModelInvoker(PMML_PATH);
        List<Map<FieldName, Object>> paramList = readInParams(modelArgsFilePath);
        ArrayList<String> detectResult = new ArrayList<String>();
        ArrayList<Integer> resultIndex = new ArrayList<>();
        int lineNum = 0;  //当前处理行数
        for(Map<FieldName, Object> param : paramList){
            lineNum++;
            Map<FieldName, ?> result = invoker.invoke(param);
            Set<FieldName> keySet = result.keySet();  //获取结果的keySet

            for(FieldName fn : keySet){
                String resultString = result.get(fn).toString();
                if(fn.toString().equals("y")){

                    int firstindex =resultString.indexOf("=");
                    int lastindex = resultString.indexOf(" ");
                    String  detectnum =resultString.substring(firstindex+1,lastindex-1);
                    if(detectnum.equals("1")){
                        resultIndex.add(lineNum);
                    }
                }
            }

        }
        ArrayList<DomainDetectResult> pre_result =getResultListByResultIndex(resultIndex,modelArgsFilePath);
        return pre_result;
    }

    public static  ArrayList<DomainDetectResult> getResultListByResultIndex(ArrayList<Integer> resultIndex, String filepath) throws FileNotFoundException,IOException{
        ArrayList<DomainDetectResult> result = new ArrayList<>();

        int linenum =1;
        int i = 0;
        File file = new File(filepath);
        FileReader fr = new FileReader(file);
        BufferedReader br = new BufferedReader(fr);
        String temp =null;
        while((temp=br.readLine())!=null){

            String[] temparray = temp.split(",");
            if(i<resultIndex.size()&&resultIndex.get(i)==linenum){
                StringBuilder sb = new StringBuilder();
                for(int j = 6;j<temparray.length;j++){
                    sb.append(temparray[j]);
                    sb.append(" ");
                }
                DomainDetectResult ddr = new DomainDetectResult(temparray[0],sb.toString());
                result.add(ddr);
                i++;
            }
            linenum++;
        }
        return result;
    }

    /**
     * 读取参数文件
     * @param filePath
     * @return
     * @throws IOException
     */
    private static List<Map<FieldName,Object>> readInParams(String filePath) throws IOException{
        BufferedReader br = new BufferedReader(new FileReader(filePath));
        String[] nameArr = {"1","2","3","4","5"};  //读取表头的名字

        List<Map<FieldName,Object>> list = new ArrayList();
        String paramLine = null;  //一行参数
        //循环读取  每次读取一行数据
        while((paramLine = br.readLine()) != null){
            Map<FieldName,Object> map = new HashMap<FieldName, Object>();
            String[] paramLineArr = paramLine.split(",");
//          一次循环处理一行数据
            for(int i=1; i<=5; i++){
                map.put(new FieldName(nameArr[i-1]), paramLineArr[i]); //将表头和值组成map 加入list中
            }
            list.add(map);
        }
        return list;
    }
}

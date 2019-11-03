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
@Service
public class DNSDetection {
	private static final String PMML_PATH = "dataInput/dns/pmml/DecisionTreeIris.pmml";
    public ArrayList<String> modelPrediction (String modelArgsFilePath) throws FileNotFoundException,IOException{
        ModelInvoker invoker = new ModelInvoker(PMML_PATH);
        List<Map<FieldName, Object>> paramList = readInParams(modelArgsFilePath);
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
        ArrayList<String> pre_result =getResultListByResultIndex(resultIndex,modelArgsFilePath);
        return pre_result;
    }
    public ArrayList<String> getResultListByResultIndex(ArrayList<Integer> resultIndex,String filepath) throws FileNotFoundException,IOException{
        ArrayList<String> result = new ArrayList<>();
        for(int i =0;i<resultIndex.size();i++){
            int index =resultIndex.get(i);
        }
        int linenum =1;
        int i = 0;
        File file = new File(filepath);
        FileReader fr = new FileReader(file);
        BufferedReader br = new BufferedReader(fr);
        String temp =null;
        while((temp=br.readLine())!=null){
            String[] temparray = temp.split(",");
            if(i<resultIndex.size()&&resultIndex.get(i)==linenum){
                result.add(temparray[0]);
                i++;
            }
            linenum++;
        }
        br.close();
        return result;
    }

    /**
     * 读取参数文件
     * @param filePath
     * @return
     * @throws IOException
     */
    private List<Map<FieldName,Object>> readInParams(String filePath) throws IOException{
        BufferedReader br = new BufferedReader(new FileReader(filePath));
        String[] nameArr = {"1","2","3","4","5"};  //读取表头的名字
        List<Map<FieldName,Object>> list = new ArrayList<Map<FieldName, Object>>();
        String paramLine = null;  //一行参数
        //循环读取  每次读取一行数据
        while((paramLine = br.readLine()) != null){
            Map<FieldName,Object> map = new HashMap<FieldName, Object>();
            String[] paramLineArr = paramLine.split(",");
//          一次循环处理一行数据
            for(int i=1; i<paramLineArr.length; i++){
                map.put(new FieldName(nameArr[i-1]), paramLineArr[i]); //将表头和值组成map 加入list中
            }
            list.add(map);
        }
        br.close();
        return list;
    }
}

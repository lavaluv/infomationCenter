package bupt.hbq.spring.service;

import java.io.FileInputStream;
import java.io.InputStream;
import java.io.IOException;
import java.util.Map;

import javax.xml.bind.JAXBException;

import org.dmg.pmml.FieldName;
import org.dmg.pmml.PMML;
import org.jpmml.evaluator.ModelEvaluator;
import org.jpmml.evaluator.ModelEvaluatorFactory;
import org.jpmml.model.PMMLUtil;
import org.xml.sax.SAXException;

public class ModelInvoker {
    private ModelEvaluator<?> modelEvaluator;

    // 通过文件读取模型
    public ModelInvoker(String pmmlFileName) {
        PMML pmml = null;
        InputStream is = null;
        try {
            if (pmmlFileName != null) {
                is = ModelInvoker.class.getClassLoader().getResourceAsStream(pmmlFileName);
                if(is==null){
                    is = new FileInputStream(pmmlFileName);
                }
                pmml = PMMLUtil.unmarshal(is);
            }
            try {
                is.close();
            } catch (IOException localIOException) {
            }
            this.modelEvaluator = ModelEvaluatorFactory.newInstance().newModelEvaluator(pmml);
        } catch (SAXException e) {
            pmml = null;
            System.out.println("error");
        } catch (JAXBException e) {
            pmml = null;
            System.out.println("error");
        } catch(Exception e){
            e.printStackTrace();
        } finally {
            if(is!=null){


            try {
                is.close();
            } catch (IOException localIOException3) {
            }
            }
        }
        this.modelEvaluator.verify();

    }

    // 通过输入流读取模型
    public ModelInvoker(InputStream is) {
        PMML pmml = null;
        try {
            pmml = PMMLUtil.unmarshal(is);
            try {
                is.close();
            } catch (IOException localIOException) {
            }
            this.modelEvaluator = ModelEvaluatorFactory.newInstance().newModelEvaluator(pmml);
        } catch (SAXException e) {
            pmml = null;
        } catch (JAXBException e) {
            pmml = null;
        } finally {
            try {
                is.close();
            } catch (IOException localIOException3) {
            }
        }
        this.modelEvaluator.verify();
    }

    public Map<FieldName, ?> invoke(Map<FieldName, Object> paramsMap) {
        return this.modelEvaluator.evaluate(paramsMap);
    }
}



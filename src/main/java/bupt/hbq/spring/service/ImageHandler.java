package bupt.hbq.spring.service;

import java.awt.image.BufferedImage;
import java.awt.image.Raster;
import java.io.File;

import javax.imageio.ImageIO;

public class ImageHandler {
	public int[] imageToDoubleArray(String imagePath) {
		try {
			BufferedImage image = ImageIO.read(new File(imagePath));
            Raster raster = image.getData();
            System.out.println("");
            int [] temp = new int[raster.getWidth()*raster.getHeight()*raster.getNumBands()];
            //通过getPixels()方式获得像素矩阵
            //此方式为沿Width方向扫描
            int [] pixels  = raster.getPixels(0,0,raster.getWidth(),raster.getHeight(),temp);
//            for (int i=0;i<pixels.length;) {
//                //输出一列数据比对
//                if((i%raster.getWidth()*raster.getNumBands())==0)
//                    System.out.printf("ff%x%x%x\t",pixels[i],pixels[i+1],pixels[i+2]);
//                i+=3;
//            }
            return pixels;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}

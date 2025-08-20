import java.util.*;

public class StringTextAlign{
    
    //implement left aligned
    public static void leftAlign(String[] words, int width){
        StringBuilder line = new StringBuilder();
        for(String word : words){
            if(line.length() + word.length() + 1> width){
                System.out.println(line.toString());
                line = new StringBuilder(word);
            }else{
                if(line.length()> 0) line.append(" ");
                line.append(word);
            }
        }
        if(line.length() > 0) System.out.println(line.toString());
    }
    
    //function to right align
    public static void rightAlign(String[] words, int width){
        StringBuilder line = new StringBuilder();
        for(String word : words){
            if(line.length() + word.length() + 1 > width){
                System.out.printf("%" + width + "s%n", line.toString());
                line = new StringBuilder(word);
            }else{
                if(line.length()>0) line.append(" ");
                line.append(word);
            }
        }
        if(line.length() > 0) System.out.printf("%" + width + "s%n", line.toString());
    }
    
    public static void main(String[] args){
        String text = "Aditya mota h, Chirayu kum padh rha h, Rishita ka nind aari h, Gaurav good boi h, Prashant pareshan h";
        int width = 30;
        String[] words = text.split(" ");
        
        System.out.println("---------left aligned ---------");
        leftAlign(words, width);
        
        System.out.println(" ------------right aligned -----");
        rightAlign(words, width);
    }
}
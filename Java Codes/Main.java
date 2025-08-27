public class Main {

    // implement Left-Alignment
    public static void leftAlign(String[] words, int width){
        StringBuilder line = new StringBuilder();
        for(String word : words){
            if(line.length() + word.length() + 1>width){
                System.out.println(line.toString());
                line = new StringBuilder(word);
            }else{
                if(line.length()>0) line.append("");
                line.append(word);
            }
        }
        if(line.length() > 0) System.out.println(line.toString());
    }

    // implementing Right-Aligned Function
    public static void rightAlign(String[] words, int width){
        StringBuilder line = new StringBuilder();
        for(String word : words){
            if(line.length() + word.length() + 1> width){
                System.out.printf("%" + width + "s%n", line.toString());
                line = new StringBuilder(word);
            } else{
                if(line.length() > 0) line.append("");
                line.append(word);
            }

        }
        if(line.length() > 0) System.out.printf("%" + width + "s%n", line.toString());
    }

    public static void main(String[] args){
        String text = "Aditya motha hain, Chirayu kum padh rha hain, Rishika ki nind aa rhi hain, gourav Kam phad rha hain";
        int width = 30;
        String[] words = text.split("");

        System.out.println("----------left aligned----------");
        leftAlign(words, width);

        System.out.println("-----------right aligned----------");
        rightAlign(words, width);
    }
    
}

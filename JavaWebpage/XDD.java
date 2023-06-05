import java.util.Scanner;

class XDD{
    public static void main(String[] args){
        int[] tablica= {0,3,6,7,4,3,2,1,5,7,8,2};
        System.out.println("Podaj 0");
        Scanner sc = new Scanner(System.in);
        int a = Integer.parseInt(sc.nextLine());
        if(a == 0){
            sortierien. quicksort(tablica, 0, tablica.length-1);
        }else{
            sortierien.bubblesort(tablica);
        }

        
        for(int i=0; i < tablica.length; i++){
            System.out.print(tablica[i]+" ");
        }
    }
        
}
class sortierien{
    public static void quicksort(int tab[], int min, int max){
        if(min < max){
            int indeksiarz = indeksowanie(tab, min, max);
            quicksort(tab, min, indeksiarz-1);
            quicksort(tab, indeksiarz+1, max);
        }
            
    }
    private static int indeksowanie(int tab[], int min, int max){
        int srak = tab[max];
        int i = min-1;

        for(int j=min; j<max; j++){
            if(tab[j] <= srak){
                i++;

                int temp = tab[i];
                tab[i] = tab[j];
                tab[j] = temp;
            }
        }
        int temp = tab[i+1];
        tab[i+1] = tab[max];
        tab[max] = temp;
        return i+1;
    }
    public static void bubblesort(int tab[]){
        int max = tab.length;
        for(int i=0; i< max;i++){
            for(int j=0; j < max-i-1;j++){
                if(tab[j] > tab[j+1]){
                    int temp = tab[j];
                    tab[j] = tab[j+1];
                    tab[j+1] = temp;
                }
            }
        }
    }
}

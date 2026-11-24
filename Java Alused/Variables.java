public class Variables {
    public static void main(String[] args) {
        //deklareerime muutuja
        int snackCount;
        //omistame muutuja väärtuse
        snackCount = 5; //int - täisarvuline muutuja
        int snackCount2 = 10; //deklareerime ja omistame väärtuse ühes reas
        // snackCount = "15"; //VIGA! See on Stringiks tehud number
        int puppies = 2;
        System.out.println("puppies: " + puppies + ", avaivable snacks: " + snackCount);
        // byte on 8-bitiline täisarvutüüp mis võib võtta väärtusi vahemikus -128 kuni 127
        byte puppyAgeMonths = 4; //byte - täisarvuline muutuja, mis võtab ühe baiti mällu
        System.out.println("Puppy age in months: " + puppyAgeMonths);
    }
}

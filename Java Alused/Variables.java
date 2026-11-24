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

        //short on 16-bitiline täisarvutüüp, mis võib võtta väärtusi vahemikus -32 768 kuni 32 767
        short footStepsOnWalk = 2_400;
        System.out.println("Foot steps on walk: " + footStepsOnWalk);

        //long on 64-bitiline täisarvutüüp
        long puppyVideosViews = 3_000_000_000L; //L tähistab long tüüpi
        System.out.println("Puppy video views: " + puppyVideosViews);
        //float on 32-bitiline ujukomaarvtüüp
        float roomTemperature = 22.5F; //F tähistab float tüüpi MITTE farenheit
        System.out.println("room Temperature: " + roomTemperature + "°C");

        //double on 64 bitiline ujukomaarvutüüp
        double puppyWeightKg = 3.5D; //d tähistab double tüüpi
        System.out.println("Puppy weight: " + puppyWeightKg + "kg");

        //boolean võib olla kas tru või fake
        boolean feedingTime = true;
        System.out.println("Is it feeding time? " + feedingTime);

        //char on 16-bitiline täisarvutüüp, mis esindab ühte Unicode märki
        char room = 'A'; // char 'A' tähistab ühte Unicdoe märki
        System.out.println("Feeding room: " + room);

        //String on objekt, mis esindab teksti
        String keeper = "John"; // BTW suur algustäht tähistab, et tegemis on objektiga nt S-tring, S-ystem, V-airables 
        System.out.println("Puppy keeper: " + keeper + ", feeding room: " + room);

        final int MINUTES_PER_HOUR = 60; //final tähendab, et muutuja väärtust ei saa muuta
        System.out.println("Minutes per hour: " + MINUTES_PER_HOUR);
        //MINUTES_PER_HOUR = 61; //VIGA! final muutuja väärtust ei saa hiljem muuta
    }
}

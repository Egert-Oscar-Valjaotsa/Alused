import java.math.BigInteger;
import java.math.BigDecimal;
public class Variables {
    public static void main(String[] args) {
        //deklareerime muutuja
        int snackCount;

        //omistame muutuja väärtuse
        snackCount = 5; //int - täisarvuline muutuja

        int snackCount2 = 10; //deklareerime ja omistame väärtuse ühes reas
        /*
        snackCount = "15"; //VIGA! See on Stringiks tehud number
        */

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
        /*
        MINUTES_PER_HOUR = 61; //VIGA! final muutuja väärtust ei saa hiljem muuta
        */

        System.out.println("Whole snacks per puppy: " + (snackCount / puppies));
        System.out.println("Snacks left after feeding: " + (snackCount % puppies));
        System.out.println("Whole snacks per puppy: " + (double)snackCount / puppies); //double, sest int annab ainult täisarvud

        //Integer on wrapper klass, mis võimaldab kasutada int tüüpi objektina
        Integer backupSnackCount = Integer.valueOf(12);
        System.out.println("Backup snack count: " + backupSnackCount);

        //Long on wrapper klass, mis võimaldab kasutada long tüüpi objektina ja võtab rohkem mälu
        Long boxedViews = Long.valueOf(puppyVideosViews);
        System.out.println("Puppy video views [boxed]: " + boxedViews);

        //Double on wrapper klass, mis võimaldab kasutada double tüüpi objektina
        Double boxedWeight = Double.valueOf(puppyWeightKg);
        System.out.println("Puppy weight [boxed]: " + boxedWeight + "kg");

        //BigInteger on klass mis võimaldab kasutada suurt täisarvu, mis ületab long tüübi piire
        BigInteger virtualPuppyPoints = new BigInteger("92337493937698693895");
        BigInteger updatedVirtualPuppyPoints = virtualPuppyPoints.add(BigInteger.ONE);
        System.out.println("Virtual puppy points: " + updatedVirtualPuppyPoints);

        //BigDecimal on 
        BigDecimal biscuitPrice = new BigDecimal("0.99");
        BigDecimal ribbonPrice = new BigDecimal("0.20");
        BigDecimal totalPrice = biscuitPrice.add(ribbonPrice);
        System.out.println("Total price in BigDecimal: " + totalPrice);
        System.out.println("Total price in double: " + (0.10 + 0.20));


    }
}

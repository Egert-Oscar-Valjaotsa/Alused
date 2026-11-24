public class Enum {
    // enum tüüp sobib etteantud väärtuste jaoks
    enum PetKind {
        DOG, CAT, BIRD, FISH, RABBIT
    }
    public static void main(String[] args) {
        //enum on kasulik kui meil on etteantud väärtused mida me ei taha muuta
        PetKind myPet = PetKind.DOG;
        System.out.println("My pet is a " + myPet.name());
    }
}
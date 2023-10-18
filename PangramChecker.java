import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {

    private static boolean checkIfPangram(String sentence) {
        Set<Character> uniqueChars = new HashSet<>();

        for (char ch : sentence.toCharArray()) {
            if (Character.isLetter(ch)) {
                uniqueChars.add(ch);
            }
        }

        return uniqueChars.size() == 26;
    }
    
        public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String inputSentence = scanner.nextLine().toLowerCase();

        boolean isPangram = checkIfPangram(inputSentence);

        System.out.println("Is Pangram: " + isPangram);

        scanner.close();
    }
}
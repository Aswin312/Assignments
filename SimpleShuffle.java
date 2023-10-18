import java.util.Arrays;
import java.util.Random;

public class SimpleShuffle {

    // Method to shuffle an int array
    private static void shuffleIntArray(int[] array) {
        Random rand = new Random();

        for (int i = array.length - 1; i > 0; i--) {
            // Generate a random index between 0 and i (inclusive)
            int randomIndex = rand.nextInt(i + 1);

            // Swap array[i] with array[randomIndex]
            int temp = array[i];
            array[i] = array[randomIndex];
            
            array[randomIndex] = temp;
        }
    }
    
    
        public static void main(String[] args) {
        // Create an int array with values (1, 2, 3, 4, 5, 6, 7)
        int[] array = {1, 2, 3, 4, 5, 6, 7};

        // Shuffle the array
        shuffleIntArray(array);

        // Print the shuffled array
        System.out.println("Shuffled Array: " + Arrays.toString(array));
    }
}
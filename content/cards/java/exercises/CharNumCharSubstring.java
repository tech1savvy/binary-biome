/*
Given a string which includes characters and numbers, 
we have to find the count of substrings which start with a character, 
end with a character, and have a number in between.
*/

public class CharNumCharSubstring {

  public static int solution(String s) {
    char[] arr = s.toCharArray();
    int count = 0;
    for (int i = 0; i < arr.length; i++) {
      if (Character.isLetter(arr[i])) {
        for (int j = i + 1; j < arr.length; j++) {
          if (Character.isLetter(arr[j])) {
            for (int k = i + 1; k < j; k++) {
              if (Character.isDigit(arr[k])) {
                count++;
                break; // count for only one digit between letters

              }
            }
          }
        }
      }
    }
    return count;
  }

  public static void main(String[] args) {
    String input = "a1b2c";
    // Expected output: 3
    // "a1b"
    // "a1b2c"
    // "b2c"
    System.out.println("Input: " + input);
    System.out.println("Output: " + solution(input));
  }
}

/*
* An array is given where, at any index i,
* the value indicates how many previous values can be accessed.
* We need to find the sum of all those accessible values for every index,
* and in the end, return the total sum among all these accessible sums.
*/

public class SumOfPreviousElements {
  public static int solution(int[] arr) {
    int sum = 0;
    int totalSum = 0;
    for (int i = 0; i < arr.length; i++) {
      for (int j = 0; j < i; j++) {
        sum += arr[j];
      }
      totalSum += sum;
    }
    return totalSum;
  }

  public static void main(String[] args) {
    int[] arr = { 1, 2, 0, 3 };
    System.out.println(solution(arr));
  }
}

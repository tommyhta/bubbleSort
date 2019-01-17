package me.com.bubbleSort;

public class Main {

    public static void main(String[] args) {
	    int [] arr = {5,3,6,1,4,2,0};

	    //for this implementation, we start with the highest/last index and works toward 0
	    for(int i = arr.length-1; i>0; i--){
	        //since the last index would be sorted, this loop will stop before the sorted portion of the array
	        for(int j = 0; j<i; j++){
	            Swap(arr, j,(j+1));
            }
        }

	    for (int i = 0; i<arr.length; i++){
	        System.out.println(arr[i]);
        }
    }
    public static void Swap(int [] arr, int i, int j){
        if(i == j){
            return;
        }else{
            if(arr[i]>arr[j]){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

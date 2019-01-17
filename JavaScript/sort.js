/*
Bubble Sort
This sorting method looks at 2 numbers at a time; if the two are not in the correct order, they will be swapped.
O(n^2)
*/

uA= [2,1,6,9,7,8,5,6]

function bubbleSort(arr){
    for(var i = 0; i<arr.length-1; i++){
        //because at the end of each loop, the very last element will be sorted (largest element will be at the end)
        //the sorted portion is the arr.length-1-i
        for(var j = 0; j<arr.length-1-i; j++){
            //compares two numbers that are next to each other, swapping will happen if the smaller number is to the right of the larger number
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j]=arr[j+1]
                arr[j+1]= temp
            }
        }
    }
    return arr
}
console.log(bubbleSort(uA))

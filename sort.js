/*
Bubble Sort
This sorting method looks at 2 numbers at a time; if the two are not in the correct order, they will be swapped.
(O)n^2 [big O of n square]
*/

uA= [9,2,1,6,9,7,8,5,6,9]

function bubbleSort(arr){
    for(var i = 0; i<arr.length-1; i++){
        for(var j = 0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j]=arr[j+1]
                arr[j+1]= temp
            }
            console.log(arr)
        }
    }
}
console.log(bubbleSort(uA))

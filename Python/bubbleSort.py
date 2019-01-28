uA = [3,1,4,2,0,5]

def bubbleSort(arr):
    for i in range(0, len(arr)-1):
        for j in range(0, len(arr) - 1 - i):
            if(arr[j]>arr[j+1]):
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
    return arr

print(bubbleSort(uA))

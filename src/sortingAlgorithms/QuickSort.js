
export function getQuickSortAnimations(array) {
    let animations =[]
    quickSortHelper(array, 0, array.length -1, animations)
	return animations
  }

function quickSortHelper(array, start, end, animations){
    if (start >= end){
        return
    }
  
    let leftIdx = start +1
    let pivotIdx = start
    let rightIdx =end
   
    while (leftIdx <= rightIdx){
        
        animations.push([leftIdx,rightIdx])
        animations.push([leftIdx,rightIdx])
       
        
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]){
            animations.push([leftIdx,array[rightIdx],rightIdx,array[leftIdx]])
            let temp = array[leftIdx];
            array[leftIdx] = array[rightIdx];
            array[rightIdx] = temp;
        }else{
            animations.push([leftIdx,array[leftIdx],rightIdx,array[rightIdx]])
        }
            
        if (array[leftIdx] <= array[pivotIdx] ){
            leftIdx +=1;
        }
            
        if (array[rightIdx] >= array[pivotIdx] ){
            rightIdx -=1;
        }
    }
        
    animations.push([pivotIdx,rightIdx])
    animations.push([pivotIdx,rightIdx])  
    animations.push([pivotIdx,array[rightIdx],rightIdx,array[pivotIdx]])

    let temp = array[rightIdx];
    array[rightIdx] = array[pivotIdx];
    array[pivotIdx] = temp;
    
    let leftSubarrayIsSmaller =rightIdx -1 -leftIdx < end -(rightIdx+1)
  
    if (leftSubarrayIsSmaller){
        quickSortHelper(array, start, rightIdx -1,animations)
        quickSortHelper(array, rightIdx+1, end,animations)
    }else{
        quickSortHelper(array, rightIdx + 1, end,animations);
        quickSortHelper(array, start, rightIdx -1,animations)
    }
}
  
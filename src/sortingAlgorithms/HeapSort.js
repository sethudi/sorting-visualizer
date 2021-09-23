
export function getHeapSortAnimations(array){
    let animations =[]
    buildMaxHeap(array,animations)
	for (let i =array.length-1; i>0; i-- ){
        animations.push([0,i])
        animations.push([0,i])
        animations.push([0,array[i],i,array[0]])
        let temp =array[i];
        array[i] =array[0];
        array[0] =temp;
		shiftDown(array, 0, i-1,animations)
    }		
	return animations
}
	
		
function buildMaxHeap(array,animations){
    let start =((array.length-2)/2)
    console.log(start);
	for(let i=start; i >=0; i--){
        shiftDown(array, i, array.length-1,animations)
    } 
}
	
		
function shiftDown(array, currentIdx, end,animations){
    let childOneIdx =(2*currentIdx) +1
	let idxToSwap =0
    let childTwoIdx =0
	while (childOneIdx <= end){
        if ((2*currentIdx)+2 <=end){
            childTwoIdx =(2*currentIdx)+2
        }else{
            childTwoIdx =-1
        }
		
		if (childTwoIdx > -1 && array[childTwoIdx] > array[childOneIdx]){
            idxToSwap = childTwoIdx
            animations.push([currentIdx,idxToSwap])
            animations.push([currentIdx,idxToSwap])
        }else{
            idxToSwap = childOneIdx
            animations.push([currentIdx,idxToSwap])
            animations.push([currentIdx,idxToSwap])
        }
				
		if (array[idxToSwap] > array[currentIdx]){
            animations.push([currentIdx,array[idxToSwap],idxToSwap,array[currentIdx]])
            let temp =array[idxToSwap];
            array[idxToSwap] = array[currentIdx];
            array[currentIdx] = temp;
			currentIdx =idxToSwap
			childOneIdx =(currentIdx*2)+1
        }else{
            animations.push([currentIdx,array[currentIdx],idxToSwap,array[idxToSwap]])
            return
        }
    }
		
}
	
				


export function getBubbleSortAnimations(array) {
    let animations =[]
    for(let i =0; i  < array.length; i++){
        for(let j =0; j <array.length -i-1; j++){
            animations.push([j,j+1]);
            animations.push([j,j+1]);
            if (array[j] > array[j+1]){
                
                animations.push([j,array[j+1],j+1,array[j]]);
                [array[j],array[j+1]] =[array[j+1],array[j]];
            }else{
                animations.push([j,array[j],j+1,array[j+1]]);
            }
        }
    }

    return animations;
  }
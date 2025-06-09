function maxOnes(arr){
    let maxCount = 0, count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            count++;
        }
        else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
        
    }
    return Math.max(maxCount, count);
}

const arr = [1, 0, 1, 1, 0, 1, 1, 1];
console.log(maxOnes(arr));
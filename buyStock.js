function buyStock(arr){
    profit =0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i-1]){
            profit += arr[i-1] - arr[i];
        }
    }
    return profit;
}

const arr = [1, 2,6,3,5,6];
console.log(buyStock(arr));
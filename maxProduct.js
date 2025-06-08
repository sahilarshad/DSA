function maxProduct(arr){
    if(arr.length < 2) return null;
    arr = arr.sort();
    product = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
    return product;
}

const arr =  [2, 6, 4, 4, 5];
console.log(maxProduct(arr));
function secondLargest(arr) {
    if (arr.length < 2) return null;
    let first = 0, second = 0;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
    return second;
}


const arr = [10, 15, 20, 8, 20];
console.log(secondLargest(arr));
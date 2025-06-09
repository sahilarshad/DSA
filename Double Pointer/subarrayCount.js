function countSubarrays(arr, l, r) {
    
    let n = arr.length;
    let count = 0;
    let lastInvalid = -1, lastValid = -1;


    for (let i = 0; i < n; i++) {
        

        if (arr[i] > r) {
            lastInvalid = i;
            lastValid = -1;
        }

        if (arr[i] >= l && arr[i] <= r) {
            lastValid = i;
        }

        if (lastValid !== -1) {
            count += lastValid - lastInvalid;
        }
    }

    return count;
}

let arr = [1, 2, 3, 4, 5];
let l = 2, r = 5;

console.log(countSubarrays(arr, l, r));
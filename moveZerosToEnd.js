function moveZerosToEnd(arr) {
    let temp = [];
    zeros = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            temp.push(arr[i]);
        }
        else{
            zeros.push(0);
        }
    }

    return temp.concat(zeros);
}

const arr = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(arr));
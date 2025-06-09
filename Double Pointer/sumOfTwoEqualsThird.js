
function findTriplet(arr) {
    const n = arr.length;
    
    arr.sort((a, b) => a - b);

    for (let i = 2; i < n; i++) {  
        let left = 0, right = i - 1;  
        
        while (left < right) {
            const sum = arr[left] + arr[right];
            
            if (sum === arr[i])  
                return true;
            else if (sum < arr[i])  
                left++;
            else  
                right--;
        }
    }
    
    return false;  
}

const arr = [1, 2, 4, 4, 7];  

if (findTriplet(arr))
    console.log("true");
else
    console.log("false");
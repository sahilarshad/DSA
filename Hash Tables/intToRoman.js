const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

function intToRoman(num) {
    let ans = ""
    for (let i = 0; num; i++)
        while (num >= val[i]) ans += rom[i], num -= val[i]
    return ans
};

let num = 1567;
console.log(intToRoman(num));
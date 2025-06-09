function longestKSubstr(s, k) {
  let n = s.length;
  let answer = -1;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let distinct = new Set();
      for (let x = i; x < j; x++) {
        distinct.add(s.charAt(x));
      }
      if (distinct.size === k) {
        answer = Math.max(answer, j - i);
      }
    }
  }

  return answer;
}

let s = "aabacbebebe";
let k = 3;

console.log(longestKSubstr(s, k));
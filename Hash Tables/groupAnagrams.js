function groupAnagrams(strs) {
    let MAP={}
    for(let word of strs){
        let sorted = word.split('').sort().join('')
        if(!MAP[sorted]){
            MAP[sorted] = []
        }
            MAP[sorted].push(word);
    
        // console.log(MAP)

    }

    let result = Object.values(MAP);

    return result
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
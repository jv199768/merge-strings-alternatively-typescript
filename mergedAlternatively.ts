function mergeAlternately(word1: string, word2: string): string {    
    let mergedString: string [] = [];
    let i: number = 0;
    let j: number = 0;
    while (i < word1.length && j < word2.length){
        mergedString.push(word1[i++]);
        mergedString.push(word2[j++]);
    }
    while (i < word1.length){
        mergedString.push(word1[i++]); 
    }
    while (j < word2.length) {
        mergedString.push(word2[j++]); 
    }
    return mergedString.join('');
};

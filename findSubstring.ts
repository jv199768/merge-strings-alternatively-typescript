function findSubstring(s: string, words: string[]): number[] {
    // Create a map to store the frequency of words.
    const wordCountMap: Map<string, number> = new Map();
    // Populate the word frequency map.
    for (const word of words) {
        wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1);
    }
    const stringLength: number = s.length;
    const wordArrayLength: number = words.length;
    const wordLength: number = words[0].length;
    const indices: number[] = [];

    // Iterate through the string in increments of word length
    for (let i = 0; i < wordLength; ++i) {
        const tempCountMap: Map<string, number> = new Map();
        let left = i;
        let right = i;
        let matchedWordCount = 0;

        // Scan the string in chunks the size of the words' length
        while (right + wordLength <= stringLength) {
            const currentWord = s.slice(right, right + wordLength);
            right += wordLength;

            // Skip the word if it's not in the frequency map
            if (!wordCountMap.has(currentWord)) {
                tempCountMap.clear();
                left = right;
                matchedWordCount = 0;
                continue;
            }

            // Update the temporary count map
            tempCountMap.set(currentWord, (tempCountMap.get(currentWord) || 0) + 1);
            ++matchedWordCount;

            // If the current word has been seen more times than it is present in words array, slide the window to the right
            while ((tempCountMap.get(currentWord)! - wordCountMap.get(currentWord)!) > 0) {
                const wordToLeft = s.slice(left, left + wordLength);
                tempCountMap.set(wordToLeft, tempCountMap.get(wordToLeft)! - 1);
                left += wordLength;
                --matchedWordCount;
            }

            // Check if all words match; if so, add to results
            if (matchedWordCount === wordArrayLength) {
                indices.push(left);
            }
        }
    }
  
    return indices;
}

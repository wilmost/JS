function findLongestWordLength(str) {
    let wordList = str.split (' ')
    let maxWord = wordList[0].length 
    let i;
    for (i = 0; i < wordList.length ; i++){ 
      console.log(wordList[i].length)
      if (maxWord < wordList[i].length) {
          maxWord = wordList[i].length
  
      }
       
    } 
      
    return maxWord;
  }
  
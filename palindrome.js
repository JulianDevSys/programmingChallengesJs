

const palindrome=(word1)=>{
    const newWord= []
    const wordPalindrome= Array.from(word1)
    for(let i= wordPalindrome.length -1; i >= 0; i--){
         newWord.push(wordPalindrome[i])
    }
    console.log(newWord)
    if(newWord.join().toUpperCase()== wordPalindrome.join().toUpperCase()){
        return "This word is a palindrome"
    }else{
        return "This word is not a palindrome"
    }
    
}

console.log(palindrome("orro"))
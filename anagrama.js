


const anagrama=(word1, word2)=>{
    if(word1.length === word2.length){
        for(let i=0; i< word1.length; i++){
            const palabra= Array.from(word1).sort() 
            const palabra2= Array.from(word2).sort() 
            if(palabra[i] != palabra2[i]) {
                return "no es un anagrama"
            }
                
            
    }return "es un anagrama"
        

    }return "No es un anagrama"
}

console.log(anagrama("roma", "amor"))



const anagrama2=(word1,word2)=>{
    if(word1.length!= word2.length){
        return "This is not a Anagram"
    }
    if(Array.from(word1).sort().join()== Array.from(word2).sort().join()){
        return "This is a anagram"
    }
    return "This is not a Anagram"
}
console.log(anagrama2("perro", "perros"))
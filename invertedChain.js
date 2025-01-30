
const  invertedStrings=(chain)=>{
    const word= Array.from(chain)
    const newChain= []
    
    for(let i= word.length; i >=0 ; i-- ){
        newChain.push(chain[i])
    }
    return newChain.join("")
}
console.log(invertedStrings("hola"))
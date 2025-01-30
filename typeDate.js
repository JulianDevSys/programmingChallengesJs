


const typeDate=(value)=>{
    if(isNaN(parseInt(value))){
        return "this is not a number"
    }
    if(value %2== 0){
        return "this is a number pair"
    }
    return "this is a number inpair"
       
}

console.log(typeDate("hola"))

const findValue=(array,number)=>{
    for(let i= 0; i < array.length; i++){
        if(number == array[i]){
            return `The number ${number} if it is found in the list at position ${i+1}`
        }
    }
    return "The number is unlisted"
}
const array1= [2,1,6,10,2,4,3,9,9,10,3,1,12,14,16]
console.log(findValue(array1, 3))
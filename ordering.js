/* 
function that receives an array of numbers and orders it from smallest to largest */

const ordering =(array)=>{
    let newArray=[]
     for(let i= 0; i < array.length; i++){
        newArray.push(parseInt(array[i]))
     }

     return newArray.sort((a,b)=>a-b)
}
const array1= [2,1,6,10,2,4,3,9,9,10,3,1,12,14,16]
console.log(ordering(array1))


/* 
function that receives an array of numbers and orders it from smallest to largest */

const ordering1=(array)=>{
    for(let i= 0; i < array.length; i++){
        for(let j= 0; j < array.length; j++){
            let valor= 0
            if(array[j+1]< array[j]){
                valor= array[j]
                array[j]=array[j+1]
                array[j+1]=valor
            }
        } i --
    }
    return array

} 
console.log(ordering1(array1))
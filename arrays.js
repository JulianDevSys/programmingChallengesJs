/*
function that receives an array of numbers and returns the sum of all the numbers.*/
const sumArray=(array)=>{
    let suma= 0
    for(let i= 0; i< array.length; i++){
        suma+=array[i]
    }
    return suma
}
const valores= [1,2,3,4,5,6,7,8,9,10]
console.log(sumArray(valores))


/* function that receives an array of numbers and returns the largest number. */

const largestNumber=(array)=>{
    let numeber=array[0]
    for(let i= 1; i < array.length; i++){
        if(array[i] > numeber){
            numeber= array[i]
        }
    }
    return numeber
}
const array= [2,5,6,10,2,4,3,9,1]
console.log(largestNumber(array))


/* 
function that removes duplicate values ​​from an array. */

const removeDuplicates=(array)=>{
    let newArray= new Set(array)
    return newArray
}
console.log(removeDuplicates(array))


/* 
function that removes duplicate values ​​from an array. */

const removeDuplicate2=(array)=>{
    let newArray=[array[0]]
    for(let i= 1; i < array.length; i++){
        if(!newArray.includes(array[i])){
            newArray.push(array[i])
        }
    }
    return newArray
}
const array1= [2,5,6,10,2,4,3,9,9,10,3,1,12,14,16]
console.log(removeDuplicate2(array1))
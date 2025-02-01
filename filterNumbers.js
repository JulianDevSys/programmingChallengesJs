/* function that filters and returns only the even numbers of an array. */


const filterNumbers=(array)=>{
    
    const newArray= array.filter((x)=> x%2== 0)
    return newArray

}

const numbers= [1,2,3,4,5,6,7]

console.log(filterNumbers(numbers))


/* The objective is to select products whose sum of prices is as close as possible to the budget without exceeding it. */

/* hacer despues */

/* const storeProblem=(array,budget)=>{
    let possibleProducts=[]
    for(let i= 0 ; i< array.length; i++){
        const sumProducts= array[i]
        for(let j= 1; j < array.length; j++){
            if(sumProducts< budget){
                sumProducts+= array[j]

            }
        }
    }

}

const productos= [50, 70, 30, 100, 20]
const budget= 135
console.log(storeProblem(productos)) */
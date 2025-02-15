

const generarSubConjuntos=(array)=>{
    const resultado= []
    
    function backtrack(indice,subconjunto){

        resultado.push([...subconjunto])

        for(let i= indice; i<array.length;i++){
            subconjunto.push(array[i])
            backtrack(i + 1, subconjunto);
            subconjunto.pop();
        }
    }
    backtrack(0, []);
    return resultado;

}

const array= [1,2,3]
console.log(generarSubConjuntos(array))
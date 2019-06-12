// Divisivel por 3 => fizz
// Divisivel por 5 => Buzz
// Divisível por 3 e 5 => fizzBuzz
// Não divisivel por 3 ou 5 => entrada
// não é um número => 'não é um número'
const resultado = fizzBuzz(true);
console.log(resultado);

function fizzBuzz(entrada){
    if ((entrada % 5 ==0) && (entrada % 3== 0)){
        return "fizzBuzz";
    }
    else
    {
        if (entrada % 3 == 0){
            return "fizz";
        }
        else
        {
        if (entrada % 5 == 0){
            return "Buzz";
        }
        else
        {
            if (typeof entrada =="number"){
                return entrada ;
            }
            else
            {
                if (typeof(entrada) !== "number"){
                    return "Não é um número" ;
                }
            }
        
        }
    
    }
}
};
//3

function imprime1(n:number)
{
    for(let i=1;i<=n;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
imprime1(20)
//--------------------------------------------------------------------------------------------------------------------
//4

function array(array:number[]):number[]
{
    let array2:number[]=[]
    for(let i=array.length -1; i>=0 ; i--)
    {
        array2.push(array[i])
    }
    return array2
}
console.log(array([9,8,7,6]))
//--------------------------------------------------------------------------------------------------------------------
//6

function numeros(numeros:number[])
{
    let frase:string=''
    let resultado:String=''

    for(let i=0;i<numeros.length;i++){
        if(numeros[i]%2==0)
        {
            frase =`El numero ${numeros[i]} es par ${'\n'}`
        }
        else{
            frase=`El numero ${numeros[i]} no es par ${'\n'}`
        }
        resultado +=frase + '\n'
    }
    console.log(resultado)
}
numeros([2,3,4,5,6])
//--------------------------------------------------------------------------------------------------------------------
//8

function contarletras(nombres:string[])
{

    let resultado:number=0

    for(let i=0;i<nombres.length;i++){
        
        resultado += nombres[i].length
    }
    console.log(resultado)
}
contarletras(['Maria','Rita','Maripili'])
contarletras(['Maria','Margarita','Maripili'])
//--------------------------------------------------------------------------------------------------------------------
//9

function esPar(numero:number)
{
    let frase:string=''

    for(let i=0;i<numero;i++){
        if(numero%2==0)
        {
            frase =`El numero ${numero} es par ${'\n'}`
        }
        else{
            frase=`El numero ${numero} es impar ${'\n'}`
        }
    }
    console.log(frase)
}
esPar(5)
//--------------------------------------------------------------------------------------------------------------------

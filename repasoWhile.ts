// 7

function nombres(nombres:string[])
{
    let boolean:boolean=true
    let i=0
    while(i<nombres.length) {

        if(nombres[i][0]!=='M'){
            boolean=false;
            i=nombres.length;
        }
        i++
    };
    console.log(boolean)  
}
    
nombres(['Maria','Rita','Maripili'])
nombres(['Maria','Margarita','Maripili'])
//--------------------------------------------------------------------------------------------------------------------

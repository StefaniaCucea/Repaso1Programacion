
//1

function signo(dia:number, mes:string):string
{
    let mes1= 'enero'
    let mes2='febrero'
    let mes3='marzo'
    let mes4= 'abril'
    let mes5= 'mayo'
    let mes6='junio'
    let mes7= 'julio'
    let mes8= 'agosto'
    let mes9= 'septiembre'
    let mes10= 'octubre'
    let mes11= 'noviembre'
    let mes12= 'diciembre'
    let signo:string=''
    switch (mes)
    {
        case mes1:
            if(dia<=20){
            signo='capricornio'};
            if(dia>20){
            signo='acuario'};
        break;
        case mes2:
            if(dia<=18){
            signo='acuario'};
            if(dia>18){
            signo='piscis'};
        break;
        case mes3:
            if(dia<=21){
            signo='piscis'};
            if(dia>21){
            signo='aries'};
        break;
        case mes4:
            if(dia<=20){
            signo='aries'};
            if(dia>20){
            signo='tauro'};
        break;
        case mes5:
            if(dia<=21){
            signo='tauro'};
            if(dia>21){
            signo='geminis'};
        break;
        case mes6:
            if(dia<=21){
            signo='geminis'};
            if(dia>21){
            signo='cancer'};
        break;
        case mes7:
            if(dia<=22){
            signo='cancer'};
            if(dia>22){
            signo='leo'};
        break;
        case mes8:
            if(dia<=22){
            signo='leo'};
            if(dia>22){
            signo='virgo'};
        break;
        case mes9:
            if(dia<=23){
            signo='virgo'};
            if(dia>23){
            signo='libra'};
        break;
        case mes10:
            if(dia<=23){
            signo='libra'};
            if(dia>23){
            signo='escorpio'};
        break;
        case mes11:
            if(dia<=23){
            signo='escorpio'};
            if(dia>23){
            signo='sagitario'};
        break;
        case mes12:
            if(dia<=21){
            signo='sagitario'};
            if(dia>21){
            signo='capricornio'};
        break;
        default:
            console.log('signo no reconocido')
        
    }

    return signo
 }

 console.log(signo(30,'diciembre'))
//--------------------------------------------------------------------------------------------------------------------
//2

function continente(pais:string)
{
    let continente:string=''
    if((pais=='Canadá')||(pais=='Estados Unidos')||(pais=='Mexico')||(pais=='Venezuela')||(pais=='Colombia')){
    continente='América'   
    }
    else if((pais=='Alemania')||(pais=='España')||(pais=='Italia')||(pais=='Noruega')||(pais=='Bulgaria')){
    continente='Europa'
    }
    else if((pais=='Vietnam')||(pais=='Japón')||(pais=='Mongolia')||(pais=='Indonesia')||(pais=='China')){
    continente='Asia'
    }
    else if((pais=='Marruecos')||(pais=='Sudáfrica')||(pais=='Kenia')||(pais=='Nigeria')||(pais=='Sudáfrica')){
    continente='África'
    }
    else if((pais=='Islas Solomon')||(pais=='Papua Nueva Guinea')||(pais=='Islas Fiyi')||(pais=='Nueva Zelanda')||(pais=='Australia')){
    continente='Oceanía'
    }
        
    console.log(continente)

}

continente('Islas Fiyi')
//--------------------------------------------------------------------------------------------------------------------
//5

function colores(colores:string[])
{
    let frase:string=''
    let resultado:String=''

    for(let i=0;i<colores.length;i++){
        if(colores[i]=='Azul')
        {
            frase ='El color azul está en el arcoiris' 
        }
        else if(colores[i]=='Verde')
        {
            frase ='El color verde está en el arcoiris' 
        }
        else if(colores[i]=='Amarillo')
        {
            frase ='El color amarillo está en el arcoiris' 
        }
        else if(colores[i]=='Rojo')
        {
            frase ='El color rojo está en el arcoiris' 
        }
        else if(colores[i]=='Naranja')
        {
            frase ='El color naranja está en el arcoiris' 
        }
        else if(colores[i]=='Añil')
        {
            frase ='El color añil está en el arcoiris' 
        }
        else if(colores[i]=='Morado')
        {
            frase ='El color morado está en el arcoiris' 
        }
        else{
            frase='Este color no está en el arcoiris'
        }
        resultado +=frase + '\n'
    }
    console.log(resultado)
}
colores(['Amarillo','Azul','Gris'])
//--------------------------------------------------------------------------------------------------------------------

function caracteresEsPar(nombres:string[])
{

    let resultado:number=0
    let frase:string=''

    for(let i=0;i<nombres.length;i++){
        
        resultado += nombres[i].length
    }
    if(resultado%2==0)
    {
        frase =`La suma de los caracteres es par ${'\n'}`
    }
    else{
        frase=`La suma de los caracteres es impar ${'\n'}`
    }
    console.log(frase)
}

caracteresEsPar(['Casa','Ciudad','Coche','Cesta'])
caracteresEsPar(['Barco','Baca','Bicicleta','Balon','Bisiesto','Brasil'])
caracteresEsPar(['Venezuela','Veneno','Voltaje'])
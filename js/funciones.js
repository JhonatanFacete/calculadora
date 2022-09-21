
// *** FUNCION CALCULADORA
const calculadora=tipo=>{
    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=0;

    if(!numero1.trim()){
        alert("Por favor, ingrese un valor en el número #1")
        return false;
    }
    if(!numero2.trim()){
        alert("Por favor, ingrese un valor en el número #2")
        return false;
    }
    //Sumar
    if(tipo==1){
        resultado=parseFloat(numero1)+parseFloat(numero2);
    }

    //Restar
    if(tipo==2){
        resultado=parseFloat(numero1)-parseFloat(numero2);
    }

    //Multiplicar
    if(tipo==3){
        resultado=parseFloat(numero1)*parseFloat(numero2);
    }

    //Dividir
    if(tipo==4){
        resultado=parseFloat(numero1)/parseFloat(numero2);
    }

    document.getElementById("resultado").value=resultado;
}

const limpiar=()=>{
    document.getElementById("numero1").value='';
    document.getElementById("numero2").value='';
    document.getElementById("resultado").value='';
}
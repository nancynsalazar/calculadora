let boton = document.getElementById('sumar');
let boton2 = document.getElementById('restar');
let boton3 = document.getElementById('dividir');
let boton4 = document.getElementById('multiplicar');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacersuma);
boton2.addEventListener('click', hacerresta);
boton3.addEventListener('click', hacerdivision);
boton4.addEventListener('click', hacermultiplicacion);


function hacersuma(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let s = n1+n2;
    respuesta.innerHTML=`El resultado de la suma es: ${s}`;
}


function hacerresta(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let s = n1-n2;
    respuesta.innerHTML=`El resultado de la resta es: ${s}`;
}

function hacerdivision(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let s = n1/n2;
    respuesta.innerHTML=`El resultado de la división es: ${s}`;
}

function hacermultiplicacion(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let s = n1*n2;
    respuesta.innerHTML=`El resultado de la multiplicación es: ${s}`;
}

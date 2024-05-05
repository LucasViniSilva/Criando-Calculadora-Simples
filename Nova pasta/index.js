

// Uso do parseFloat para converter string em valor

function somar(){
    const n1 = parseFloat(document.getElementById('n1').value); 
    const n2 = parseFloat(document.getElementById('n2').value);
    var resultado = n1 + n2;
    alert("Seu resultado é: " + resultado);
}


function subtrair(){
    const n1 = parseFloat(document.getElementById('n1').value); 
    const n2 = parseFloat(document.getElementById('n2').value);
    var resultado = n1 - n2;
    alert("Seu resultado é: " + resultado);
}


function multiplicar(){
    const n1 = parseFloat(document.getElementById('n1').value); 
    const n2 = parseFloat(document.getElementById('n2').value);
    var resultado = n1 * n2;
    alert("Seu resultado é: " + resultado);
}


function dividir(){
    const n1 = parseFloat(document.getElementById('n1').value); 
    const n2 = parseFloat(document.getElementById('n2').value);
    var resultado = n1 / n2;
    alert("Seu resultado é: " + resultado);
}


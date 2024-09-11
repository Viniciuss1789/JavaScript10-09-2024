const numeros = [50, 5, 10, 20, 30];

let dado = "";
for (let contadora in numeros) {
    dado += numeros[contadora] + "<br>";
}

document.getElementById("dado").innerHTML = dado;
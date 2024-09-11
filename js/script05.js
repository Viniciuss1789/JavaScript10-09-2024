const pessoa = { nome: "Vinicius", sobreNome01: "Silva", idade: 19 };

let dadosCompletos = "";

for (let contadora in pessoa) {

    dadosCompletos += dadosCompletos + pessoa[contadora] + " ";

}

document.getElementById('pessoa').innerHTML = dadosCompletos;
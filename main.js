function hoppy(){
    alert("Bem vindo ao site Hoppy Happy");
    let altura = Number (prompt ("Digite sua Altura para verificar se pode entrar no brinquedo:"));
  if (altura <= 1.7){
    alert ("Pode entrar");
  }
  else{
    alert("Não Pode");
  }
}

function estoque(){
    alert("Confira a situação do estoque");
    let quantidade = Number (prompt("Digite as unidades disponíveis"));
    if (quantidade <5){
        alert("Estoque Baixo!!!");
    }
    else{
        alert("OK!");
    }
}

function menor(){
    let valor = Number (prompt("Digite o Valor:"))
    if (valor < 765.5){
        alert("Isento!")
    }
    else{
        alert("Taxa de 10%")
    }
}

function maior(){
    let nota = Number (prompt("Digite a Nota:"));
    if (nota > 5){
        alert("Aprovado!!")
    }
    else{
        alert("Reprovado!!!")
    }
}

function diferente(){
    let cor = prompt ("Digite uma cor:")
    let cor2 = prompt ("Digite outra cor:")
    if (cor !== cor2){
        alert("Falso!")
    }
    else{
        alert   ("Verdadeiro!")
    }
}

function menorouIgual(){
    let valor = Number (prompt("Digite o valor:"));
    if(valor <= 1) {
        alert("Baixo")
    }
    else{
        let resultado = valor * 100
        alert(`O valor será ${resultado}` )
    }
}

function menorouIgual2(){
    let valor = Number (prompt("Digite o valor:"));
    if(valor <= 3.5){
        alert("Está Barato!")
    }
    else{
        alert(`Valor ${valor}`)
    }
}

function igual(){
    alert ("BEm vindo");
    let nome = prompt("Digite um Nome:")
    if(nome == "marisa"){
        alert("Acertou")
    }
    else{
        alert("Errou");
    }
}
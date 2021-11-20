
var iColunas = 23;
var iLinhas = 3;
var aGrid = [];

inicializaGridArray();
escreveConteudoDoGridArray();

function inicializaGridArray() {
    for (let linhaCounter = 0; linhaCounter < iLinhas; linhaCounter++) {
        var aLinha = [];
        for (let colunaCounter = 0; colunaCounter < iColunas; colunaCounter++) {
           aLinha.push("X");
        }
        aGrid.push(aLinha);
    }
}

function escreveConteudoDoGridArray() {
    console.log("Desenhar Grid:");
    for (let i = 0; i < aGrid.length; i++) {
        var sLinha = "";
        for (let ii = 0; ii < aGrid[i].length; ii++) {
            sLinha = sLinha + aGrid[i][ii];           
        }
        console.log(sLinha);
    }
}

// var sInputString = process.argv[2] ? process.argv[2] : "";

var sInputString = "EOOEEE";
var aCoordenadasOndeEstou = [];
var iPokemonsAcumulados = 1;
var aGrid = [[]];
var iColunasDaGrid = 0;
var iLinhasDaGrid = 0;

try {
    for (let i = 0; i < sInputString.length; i++) {
        sInputString[i] = sInputString[i].toUpperCase();
        validaChar(sInputString[i]);
        daUmPasso(sInputString[i]);
    }
    desenhaGrid();
    apresentaResultado();
} catch (oError) {
    console.log("Erro: " + oError);
}

function validaChar(sChar) {
    if (sChar !== "N" && sChar !== "S" && sChar !== "E" && sChar !== "O") {
        throw (`O caracter '${sChar}' não é válido`);
    }
}

function daUmPasso(sChar) {
    actualizaGrid(sChar);
    // actualizaCoordenadasOndeEstou(sChar);
}

function apresentaResultado() {
    console.log(iPokemonsAcumulados);
}

function actualizaGrid(sChar) {
    switch (sChar) {
        case "N":
            iLinhasDaGrid++;
            actualizaGridLinhas("up");
            break;
        case "S":
            iLinhasDaGrid--;
            actualizaGridLinhas("down");
            break;
        case "E":
            iColunasDaGrid++;
            actualizaGridColunas("direita");
            break;
        case "O":
            iColunasDaGrid--;
            actualizaGridColunas("esquerda");
            break;
    }
}

function actualizaGridLinhas(sUpOrDown) {
    if (!aGrid[iLinhasDaGrid]) {
        switch (sUpOrDown) {
            case "up":
                aGrid.unshift(new Array(iColunasDaGrid));
                break;
            case "down":
                aGrid.push(new Array(iColunasDaGrid));
                break;
            default:
                throw ("A função actualizaGridLinhas apenas aceita 'up' ou 'down'");
                break;
        }
    }
}

function actualizaGridColunas(sDireitaOuEsquerda) {
    if (!aGrid[iColunasDaGrid]) {
        switch (sDireitaOuEsquerda) {
            case "direita":
                for (let i = 0; i < aGrid.length; i++) {
                    var aLinha = aGrid[i];
                    aLinha.push(null);                 
                }
                break;
            case "esquerda":
                for (let i = 0; i < aGrid.length; i++) {
                    var aLinha = aGrid[i];
                    aLinha.unshift(null);                 
                }
                break;        
            default:
                throw ("A função actualizaGridColunas apenas aceita 'direita' ou 'esquerda'");
                break;
        }
    }
}

function desenhaGrid() {
    var sLinha = "";
    console.log("--------------------------------------------");
    for (let i = 0; i < aGrid.length; i++) {
        for (let ii = 0; ii < aGrid[i].length; ii++) {
            sLinha += "X ";
        }
        console.log(sLinha);
        sLinha = "";
    }
    console.log("--------------------------------------------");
}

var sInputString = process.argv[2] ? process.argv[2] : "";
//var sInputString = "NNNEESSEEENNOOO";
var oCoordenadasOndeEstou = { x: 0, y: 0 };
var iPokemonsAcumulados = 1;
var aGrid = [["S"]];
var iColunas = 0;


for (let i = 0; i < sInputString.length; i++) {
    var sChar = sInputString[i] = sInputString[i].toUpperCase();
    validaChar(sChar);
    daUmPasso(sChar);
}

//desenhaGrid();
apresentaResultado();


function validaChar(sChar) {
    if (sChar !== "N" && sChar !== "S" && sChar !== "E" && sChar !== "O") {
        throw (`O caracter '${sChar}' não é válido`);
    }
}

function daUmPasso(sChar) {
    actualizaGrid(sChar);
    apanhaPokemon();
}

function apanhaPokemon() {
    if (aGrid[oCoordenadasOndeEstou.y][oCoordenadasOndeEstou.x] && aGrid[oCoordenadasOndeEstou.y][oCoordenadasOndeEstou.x] === "X") {
        aGrid[oCoordenadasOndeEstou.y][oCoordenadasOndeEstou.x] = ".";
        iPokemonsAcumulados++;
    }
}

function apresentaResultado() {
    console.log(iPokemonsAcumulados);
}

function actualizaGrid(sChar) {
    switch (sChar) {
        case "N":
            actualizaGridLinhas("up");
            break;
        case "S":
            actualizaGridLinhas("down");
            break;
        case "E":
            actualizaGridColunas("direita");
            break;
        case "O":
            actualizaGridColunas("esquerda");
            break;
    }
}

function actualizaGridLinhas(sUpOrDown) {
    switch (sUpOrDown) {
        case "up":
            if (oCoordenadasOndeEstou.y - 1 < 0) {
                aGrid.unshift(criaNovaLinha());
                oCoordenadasOndeEstou.y = 0;
            } else {
                oCoordenadasOndeEstou.y--;
            }
            break;
        case "down":
            if (!aGrid[oCoordenadasOndeEstou.y + 1]) {
                aGrid.push(criaNovaLinha());
                oCoordenadasOndeEstou.y++;
            } else {
                oCoordenadasOndeEstou.y++;
            }
            break;
        default:
            throw ("A função actualizaGridLinhas apenas aceita 'up' ou 'down'");
            break;
    }
}

function actualizaGridColunas(sDireitaOuEsquerda) {
    switch (sDireitaOuEsquerda) {
        case "esquerda":
            if (oCoordenadasOndeEstou.x - 1 < 0) {
                iColunas++;
                oCoordenadasOndeEstou.x = 0;
                criaNovaColuna(true);
            } else {
                oCoordenadasOndeEstou.x--;
            }
            break;
        case "direita":
            if (oCoordenadasOndeEstou.x + 1 > iColunas) {
                iColunas++;
                oCoordenadasOndeEstou.x = iColunas;
                criaNovaColuna(false);
            } else {
                oCoordenadasOndeEstou.x++;
            }
            break;
        default:
            throw ("A função actualizaGridColunas apenas aceita 'direita' ou 'esquerda'");
            break;
    }
}

function criaNovaColuna(bEsquerda) {
    for (let i = 0; i < aGrid.length; i++) {
        var aLinha = aGrid[i];
        if (bEsquerda) {
            aLinha.unshift('X');
        } else {
            aLinha.push('X');
        }
    };
}

function criaNovaLinha() {
    var aNewLinha = new Array(iColunas + 1);
    for (let i = 0; i < aNewLinha.length; i++) {
        aNewLinha[i] = "X";
    }
    return aNewLinha;
}

function desenhaGrid() {
    var sLinha = "";
    console.log("sInputString: " + sInputString);
    console.log("--------------------------------------------");
    for (let i = 0; i < aGrid.length; i++) {
        for (let ii = 0; ii < aGrid[i].length; ii++) {
            sLinha += aGrid[i][ii] + " ";
        }
        console.log(sLinha);
        sLinha = "";
    }
    console.log("--------------------------------------------");
}
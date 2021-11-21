
var sInputString = process.argv[2] ? process.argv[2] : "";
//var sInputString = "NNNEESSEEENNOOO";
var oCoordenadasOndeEstou = { x: 0, y: 0 };
var iPokemonsAcumulados = 1;
var aGrid = [["S"]]; // a grid é inicializada com a posição inicial "S"
var iColunasDaGrid = 0;


for (let i = 0; i < sInputString.length; i++) {
    var sChar = sInputString[i] = sInputString[i].toUpperCase();
    validaChar(sChar);
    daUmPasso(sChar);
}

//desenhaGrid();
apresentaResultado();

// valida se a coordenada é válida
function validaChar(sCoordenada) {
    if (sCoordenada !== "N" && sCoordenada !== "S" && sCoordenada !== "E" && sCoordenada !== "O") {
        throw (`O caracter '${sCoordenada}' não é válido`);
    }
}

// dá um passo na direcção da coordenada fornecida
function daUmPasso(sCoordenada) {
    actualizaGrid(sCoordenada);
    apanhaPokemon();
}

// actualiza o contador de pokemons e limpa-o da grid
function apanhaPokemon() {
    if (aGrid[oCoordenadasOndeEstou.y][oCoordenadasOndeEstou.x] && aGrid[oCoordenadasOndeEstou.y][oCoordenadasOndeEstou.x] === "X") {
        aGrid[oCoordenadasOndeEstou.y][oCoordenadasOndeEstou.x] = ".";
        iPokemonsAcumulados++;
    }
}

function apresentaResultado() {
    console.log(iPokemonsAcumulados);
}

// actualiza a grid em cada nova coordenada
function actualizaGrid(sCoordenada) {
    if (sCoordenada === "N" || sCoordenada === "S") {
        actualizaGridLinhas(sCoordenada);
    } else {
        actualizaGridColunas(sCoordenada);
    }
}

// move para nova posicao Y e, caso ultrapasse o limite da grid, cria nova LINHA
function actualizaGridLinhas(sNorteSul) {
    switch (sNorteSul) {
        case "N":
            if (oCoordenadasOndeEstou.y - 1 < 0) {
                aGrid.unshift(criaNovaLinha());
                oCoordenadasOndeEstou.y = 0;
            } else {
                oCoordenadasOndeEstou.y--;
            }
            break;
        case "S":
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
// move para nova posicao X e, caso ultrapasse o limite da grid, cria nova COLUNA
function actualizaGridColunas(sEsteOeste) {
    switch (sEsteOeste) {
        case "O":
            if (oCoordenadasOndeEstou.x - 1 < 0) {
                iColunasDaGrid++;
                oCoordenadasOndeEstou.x = 0;
                criaNovaColuna(true);
            } else {
                oCoordenadasOndeEstou.x--;
            }
            break;
        case "E":
            if (oCoordenadasOndeEstou.x + 1 > iColunasDaGrid) {
                iColunasDaGrid++;
                oCoordenadasOndeEstou.x = iColunasDaGrid;
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

// acrescenta uma nova coluna à grid (pode ser à esquerda ou direita)
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

// acrescenta uma nova linha à grid (pode ser em cima ou em baixo)
function criaNovaLinha() {
    var aNewLinha = new Array(iColunasDaGrid + 1);
    for (let i = 0; i < aNewLinha.length; i++) {
        aNewLinha[i] = "X";
    }
    return aNewLinha;
}

// escreve a grid na consola
function desenhaGrid() {
    var sLinha = "";
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
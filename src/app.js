var App = function () {
    this.sInputString = "";
    this.oCoordenadasOndeEstou = { x: 0, y: 0 };
    this.iPokemonsAcumulados = 1;
    this.aGrid = [["S"]]; // A grid é inicializada com a posição "S". O "S" marca o inicio do percurso
    this.iColunasDaGrid = 0;
}

App.prototype.init = function (str) {
    this.sInputString = str;
    for (let i = 0; i < this.sInputString.length; i++) {
        var sChar = this.sInputString[i] = this.sInputString[i].toUpperCase();
        this.validaChar(sChar);
        this.daUmPasso(sChar);
    }

    // this.escreveGridConsola();
    // this.escreveResultadoConsola();
}

// valida se a coordenada é válida
App.prototype.validaChar = function (sCoordenada) {
    if (sCoordenada !== "N" && sCoordenada !== "S" && sCoordenada !== "E" && sCoordenada !== "O") {
        throw (`O caracter '${sCoordenada}' não é válido`);
    }
}

// dá um passo na direcção da coordenada fornecida
App.prototype.daUmPasso = function (sCoordenada) {
    if (!sCoordenada) {
        throw ("É necessário uma coordenada");
    }
    this.actualizaGrid(sCoordenada);
    this.apanhaPokemon();
}

// actualiza o contador de pokemons e limpa-o da grid
App.prototype.apanhaPokemon = function () {
    if (this.aGrid[this.oCoordenadasOndeEstou.y][this.oCoordenadasOndeEstou.x] &&
        this.aGrid[this.oCoordenadasOndeEstou.y][this.oCoordenadasOndeEstou.x] === "X") {
        this.aGrid[this.oCoordenadasOndeEstou.y][this.oCoordenadasOndeEstou.x] = ".";
        this.iPokemonsAcumulados++;
    }
}

App.prototype.escreveResultadoConsola = function () {
    console.log(this.iPokemonsAcumulados);
}

// actualiza a grid em cada nova coordenada
App.prototype.actualizaGrid = function (sCoordenada) {
    if (sCoordenada === "N" || sCoordenada === "S") {
        this.actualizaGridLinhas(sCoordenada);
    } else {
        this.actualizaGridColunas(sCoordenada);
    }
}

// move para nova posicao Y e, caso ultrapasse o limite da grid, cria nova LINHA
App.prototype.actualizaGridLinhas = function (sNorteSul) {
    switch (sNorteSul) {
        case "N":
            if (this.oCoordenadasOndeEstou.y - 1 < 0) {
                this.aGrid.unshift(this.criaNovaLinha());
                this.oCoordenadasOndeEstou.y = 0;
            } else {
                this.oCoordenadasOndeEstou.y--;
            }
            break;
        case "S":
            if (!this.aGrid[this.oCoordenadasOndeEstou.y + 1]) {
                this.aGrid.push(this.criaNovaLinha());
                this.oCoordenadasOndeEstou.y++;
            } else {
                this.oCoordenadasOndeEstou.y++;
            }
            break;
        default:
            throw ("A função actualizaGridLinhas apenas aceita 'N' ou 'S'");
            break;
    }
}

// move para nova posicao X e, caso ultrapasse o limite da grid, cria nova COLUNA
App.prototype.actualizaGridColunas = function (sEsteOeste) {
    switch (sEsteOeste) {
        case "O":
            if (this.oCoordenadasOndeEstou.x - 1 < 0) {
                this.iColunasDaGrid++;
                this.oCoordenadasOndeEstou.x = 0;
                this.criaNovaColuna(true);
            } else {
                this.oCoordenadasOndeEstou.x--;
            }
            break;
        case "E":
            if (this.oCoordenadasOndeEstou.x + 1 > this.iColunasDaGrid) {
                this.iColunasDaGrid++;
                this.oCoordenadasOndeEstou.x = this.iColunasDaGrid;
                this.criaNovaColuna(false);
            } else {
                this.oCoordenadasOndeEstou.x++;
            }
            break;
        default:
            throw ("A função actualizaGridColunas apenas aceita 'E' ou 'O'");
            break;
    }
}

// acrescenta uma nova coluna à grid (pode ser à esquerda ou direita)
App.prototype.criaNovaColuna = function (bEsquerda) {
    if (typeof bEsquerda !== "boolean") {
        throw ("O argumento bEsquerda tem que ser boolean");
    }
    for (let i = 0; i < this.aGrid.length; i++) {
        var aLinha = this.aGrid[i];
        if (bEsquerda) {
            aLinha.unshift('X');
        } else {
            aLinha.push('X');
        }
    };
}

// acrescenta uma nova linha à grid (pode ser em cima ou em baixo)
App.prototype.criaNovaLinha = function () {
    var aNewLinha = new Array(this.iColunasDaGrid + 1);
    for (let i = 0; i < aNewLinha.length; i++) {
        aNewLinha[i] = "X";
    }
    return aNewLinha;
}

// escreve a grid na consola
App.prototype.escreveGridConsola = function () {
    var sLinha = "";
    console.log("--------------------------------------------");
    for (let i = 0; i < this.aGrid.length; i++) {
        for (let ii = 0; ii < this.aGrid[i].length; ii++) {
            sLinha += this.aGrid[i][ii] + " ";
        }
        console.log(sLinha);
        sLinha = "";
    }
    console.log("--------------------------------------------");
}

module.exports = App;
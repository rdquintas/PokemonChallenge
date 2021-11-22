const chai = require('chai');
const expect = chai.expect;
const done = chai.done;
const App = require('../src/app');

describe("App Unit Tests | validaChar", function () {

    let app = new App();

    it("Verifica se validaChar(1) dá erro", function () {
        expect(function () {
            app.validaChar("1")
        }).to.throw("O caracter '1' não é válido");
    })

    it("Verifica se validaChar(X) dá erro", function () {
        expect(function () {
            app.validaChar("X")
        }).to.throw("O caracter 'X' não é válido");
    })

    it("Verifica se validaChar($) dá erro", function () {
        expect(function () {
            app.validaChar("$")
        }).to.throw("O caracter '$' não é válido");
    })

    it("Verifica se validaChar(N) ok", function () {
        expect(function () {
            app.validaChar("N")
        }).not.to.throw("O caracter 'N' não é válido");
    })

    it("Verifica se validaChar(S) ok", function () {
        expect(function () {
            app.validaChar("S")
        }).not.to.throw("O caracter 'S' não é válido");
    })

    it("Verifica se validaChar(E) ok", function () {
        expect(function () {
            app.validaChar("E")
        }).not.to.throw("O caracter 'E' não é válido");
    })

    it("Verifica se validaChar(O) ok", function () {
        expect(function () {
            app.validaChar("O")
        }).not.to.throw("O caracter 'O' não é válido");
    })

    it("Verifica se validaChar(n) ok", function () {
        expect(function () {
            app.validaChar("n")
        }).not.to.throw("O caracter 'N' não é válido");
    })

    it("Verifica se validaChar(s) ok", function () {
        expect(function () {
            app.validaChar("s")
        }).not.to.throw("O caracter 'S' não é válido");
    })

    it("Verifica se validaChar(e) ok", function () {
        expect(function () {
            app.validaChar("e")
        }).not.to.throw("O caracter 'E' não é válido");
    })

    it("Verifica se validaChar(o) ok", function () {
        expect(function () {
            app.validaChar("o")
        }).not.to.throw("O caracter 'O' não é válido");
    })

});

describe("App Unit Tests | daUmPasso", function () {

    let app = new App();

    it("Verifica se daUmPasso('') dá erro", function () {
        expect(function () {
            app.daUmPasso("")
        }).to.throw("É necessário uma coordenada");
    })

    it("Verifica se daUmPasso(null) dá erro", function () {
        expect(function () {
            app.daUmPasso(null)
        }).to.throw("É necessário uma coordenada");
    })

    it("Verifica se daUmPasso('n') ok", function () {
        expect(function () {
            app.daUmPasso("n")
        }).not.to.throw("É necessário uma coordenada");
    })

    it("Verifica se daUmPasso('N') ok", function () {
        expect(function () {
            app.daUmPasso("N")
        }).not.to.throw("É necessário uma coordenada");
    })
});

describe("App Unit Tests | apanhaPokemon", function () {
    let app = new App();
    app.aGrid = null;
    app.oCoordenadasOndeEstou = { x: 10, y: 5 };

    it("Verifica se apanhaPokemon() com aGrid=null dá erro", function () {
        expect(function () {
            app.apanhaPokemon()
        }).to.throw();
    })
});

describe("App Unit Tests | apanhaPokemon ok", function () {
    let app = new App();
    app.aGrid = [["X", "X", "X"], ["X", "X", "X"], ["S", "X", "X"]];
    app.oCoordenadasOndeEstou = { x: 1, y: 2 };
    app.apanhaPokemon();
    it("Verifica se apanhaPokemon(x: 1, y: 2) = '.'", function () {
        expect(app.aGrid[2][1]).to.equal(".");
    })
    it("Verifica se apanhaPokemon(x: 1, y: 2) iPokemonsAcumulados = 2", function () {
        expect(app.iPokemonsAcumulados).to.equal(2);
    })
});


describe("App Unit Tests | actualizaGridLinhas", function () {
    let app = new App();
    it("Verifica se actualizaGridLinhas('A') dá erro", function () {
        expect(function () {
            app.actualizaGridLinhas("A")
        }).to.throw();
    })

    it("Verifica se actualizaGridLinhas('N') ok", function () {
        expect(function () {
            app.actualizaGridLinhas("N")
        }).not.to.throw();
    })
});


describe("App Unit Tests | actualizaGridColunas", function () {
    let app = new App();
    it("Verifica se actualizaGridColunas('A') dá erro", function () {
        expect(function () {
            app.actualizaGridColunas("A")
        }).to.throw();
    })

    it("Verifica se actualizaGridColunas('O') ok", function () {
        expect(function () {
            app.actualizaGridColunas("O")
        }).not.to.throw();
    })
});

describe("App Unit Tests | criaNovaColuna", function () {
    let app = new App();
    it("Verifica se criaNovaColuna() dá erro", function () {
        expect(function () {
            app.criaNovaColuna();
        }).to.throw();
    })
});

describe("App Unit Tests | criaNovaColuna(true)", function () {
    let app = new App();
    app.aGrid = [["X", "X", "X"], ["X", "X", "X"], ["S", "X", "X"]];
    app.criaNovaColuna(true);
    it("Verifica se criaNovaColuna() criou coluna à ESQUERDA", function () {
        expect(app.aGrid).to.deep.equal([["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "S", "X", "X"]]);
    })
});

describe("App Unit Tests | criaNovaColuna(false)", function () {
    let app = new App();
    app.aGrid = [["X", "X", "X"], ["X", "X", "X"], ["S", "X", "X"]];
    app.criaNovaColuna(false);
    it("Verifica se criaNovaColuna() criou coluna à DIREITA", function () {
        expect(app.aGrid).to.deep.equal([["X", "X", "X", "X"], ["X", "X", "X", "X"], ["S", "X", "X", "X"]]);
    })
});

describe("App Unit Tests | criaNovaLinha()", function () {
    let app = new App();
    app.iColunasDaGrid = 5;
    it("Verifica se criaNovaLinha() criou nova linha", function () {
        expect(app.criaNovaLinha()).to.deep.equal(["X", "X", "X", "X", "X", "X"]);
    })
});

describe("App Unit Tests | init('NNN')", function () {
    let app = new App();
    app.init("NNN");
    it("Verifica se aGrid está ok", function () {
        expect(app.aGrid).to.deep.equal([["."], ["."], ["."], ["S"]]);
    })
    it("Verifica se iPokemonsAcumulados = 4", function () {
        expect(app.iPokemonsAcumulados).to.equal(4);
    })
});

describe("App Unit Tests | init('NNNS')", function () {
    let app = new App();
    app.init("NNNS");
    it("Verifica se aGrid está ok", function () {
        expect(app.aGrid).to.deep.equal([["."], ["."], ["."], ["S"]]);
    })
    it("Verifica se iPokemonsAcumulados = 4", function () {
        expect(app.iPokemonsAcumulados).to.equal(4);
    })
});


describe("App Unit Tests | init('NNNSSSSS')", function () {
    let app = new App();
    app.init("NNNSSSSS");
    it("Verifica se aGrid está ok", function () {
        expect(app.aGrid).to.deep.equal([["."], ["."], ["."], ["S"], ["."], ["."]]);
    })
    it("Verifica se iPokemonsAcumulados = 6", function () {
        expect(app.iPokemonsAcumulados).to.equal(6);
    })
});
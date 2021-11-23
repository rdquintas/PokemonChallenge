# App | v.3

## DESCRIÇÃO
Esta aplicação pretende resolver o seguinte problema/enunciado:

  > Pokemon: apanhá-los todos
  > O Ash está a apanhar pokémons num mundo que consiste numa grelha bidimensional infinita de casas.
  > Em cada casa há exatamente um pokémon.
  > O Ash começa por apanhar o pokémon que está na casa onde começa. A seguir, move-se para a casa
  > imediatamente a norte, sul, este ou oeste de onde se encontra e apanha o pokémon que aí se encontrar,
  > e assim sucessivamente. Atenção: se ele passar numa casa onde já passou (e, portanto, onde já apanhou
  > um pokémon), já lá não está um pokémon para ele apanhar!
  > O que queremos saber é: começando com um mundo cheio de pokémons (um em cada casa!), quantos
  > pokémons o Ash apanha para uma dada sequência de movimentos?
  > Formato do input
  > O programa deve ler uma linha do stdin, que contém uma sequência de movimentos. Cada movimento é
  > descrito por uma letra N , S , E ou O (respetivamente: norte, sul, este, oeste).
  > Formato do output
  > O programa deve escrever uma linha para o stdout, apenas com um número: quantos pokémons o Ash
  > apanhou?

## DOCUMENTAÇÃO TÉCNICA
  - A aplicação corre em NODEJS. É necessário ter o NODEJS instalado. Podes fazer o download [aqui](https://nodejs.dev/)
  - Utiliza a seguinte framework de testes:
    - [Mocha](https://mochajs.org/)
    - [Chai](https://www.chaijs.com/) 
  - A app tem a seguinte estrutura

      ![](/docs/img1.jpg)

    - **/src/app.js**: contém o código da nossa app
    - **/index.js**: utilizado para correr em modo consola
    - **/web.js**: utlizado para correr em modo web/rest api
    - **/index.html**: utilizado pelo Express quando corremos em modo web/res api
    - **/tests**: folder onde estão os nossos testes
    - **/docs**: tem alguns ficheiros utilitários da app (img do readme, etc...)


## COMO COMPILAR A APP ?
 - Fazer `git clone` do seguinte repo [https://github.com/rdquintas/ricardoquintas.com.git](https://github.com/rdquintas/ricardoquintas.com.git)
 - No folder da app coorer o comando `npm install` para instalar as dependências necessárias para correr a aplicação

## COMO EXECUTAR A APP ? (na consola)
  - No folder da app correr o comando `node index` com o input necessário. Alguns exemplos: (a aplicação aceita input em lowercase)
    - `node index NN`
    - `node index NSEO`
    - `node index NNNSSEE`
    - `node index nnn`
    - `node index nnSNeeEE`

## COMO EXECUTAR A APP ? (como REST API)
 - Também é possível correr a app como se fosse uma REST API. Para tal foi criado um serviço web à volta do código usando [Express](https://expressjs.com/) que mostra uma página
  web para testarmos o nosso serviço
 - No folder da app correr o comando `node web` que irá lançar uma página no [http://localhost:3000/](http://localhost:3000/)
 - Esta página irá buscar os dados à nossa app em formato JSON


## COMO CORRER OS TESTES ?
  - A aplicação utliza a framework de testes [MOCHA](https://mochajs.org/) e [Chai](https://www.chaijs.com/). Para executar os testes através da consola é necessário que essa framework já esteja instalada globalmente.  Para tal é necessário correr os seguinte comando `npm install -g mocha`
  - **NOTA IMPORTANTE:** só se deve correr o comando `npm install -g mocha` 1 vez para instalar esse componente - não é necessário executar este comando cada vez que se executam os testes!!
 - No folder da app correr o comando `mocha tests` para correr todos os testes que estão definidos no ficheiro **/tests/appTests.js**. No fim da execução (que poderá demorar alguns segundos a terminar) irá aparecer um relatório com o resutlado desses testes


---

# Branches (código de cada versão)
 - ### v.1 - versão inicial
   Esta versão inclui a versão inicial da aplicação.
 - ### v.2 - inclusão dos testes
   Nesta versão foi acrescentada a framework de testes [MOCHA](https://mochajs.org/) e [Chai](https://www.chaijs.com/) 
 - ### v.3 - api_rest
   Nesta versão foi incluída a framework [Express](https://expressjs.com/) para transformar a nossa app numa REST API

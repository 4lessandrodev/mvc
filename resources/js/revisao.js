let $frutas = [1, 20, 18, 14, 22, 7, 12, 11, 13, 15, 17, 2, 5, 8, 9, 9];
let $tr;
let $texto;
let $td;
let $body = document.createElement('tbody');
let $bodyIndex = document.querySelector('table tbody');

//------------------Lista usando o metodo ES5 ----------------

function criarLista() {
  for (var i = 0; i < $frutas.length; i++) {
    $tr = document.createElement('tr');
    $td = document.createElement('td');
    $texto = document.createTextNode($frutas[i]);
    $td.appendChild($texto);
    $tr.appendChild($td);
    $body.appendChild($tr);
  }
  $bodyIndex.innerHTML = $body.innerHTML;
}

criarLista();
//-----------------------------------------------------




function eliminarFiltros() {
  $body = document.createElement('tbody');
  $frutas = [1, 20, 18, 14, 22, 7, 12, 11, 13, 15, 17, 2, 5, 8, 9, 9];
  criarLista();
}




//-------------------------------------------------------------------------
//Funcao filter
//let numeros = [1, 20, 18, 14, 22, 7, 12, 11, 13, 15, 17, 2, 5, 8, 9, 9];

//funcao que retorna valores iguais ou maiores que 18
function filtrar() {
  $frutas = $frutas.filter(function (numero) {
    return numero >= 18;
  });
  console.log($frutas);
  $body = document.createElement('tbody');
  criarLista();
}
//--------------------------------------------------------------------------













/*
//-------------------Criar lista usando o forEach -------------
function carregarLista(list) {
  let lista = criarLista(list);
  $bodyIndex.innerHTML = lista.innerHTML;
}

function criarLista() {
  $frutas.forEach(function (fruta) {
    $tr = document.createElement('tr');
    $td = document.createElement('td');
    $texto = document.createTextNode(fruta);
    $td.appendChild($texto);
    $tr.appendChild($td);
    $body.appendChild($tr);
  });
  return $body;
}
carregarLista();
//-------------------------------------------------------------
*/








//-----------------------------------------------------------------------------------
/*Criando um algoritimo que recebe um array com uma sequencia de números e se existir
um número faltando na sequência retorna quais são os números faltantes
*/

/*
let numeros = [1, 20, 18, 14, 22, 7, 12, 11, 13, 15, 17, 2, 5, 8, 9, 9];


//Ordenar a lista em ordem crescente-----------------
numeros = numeros.sort(function (a, b) {
  return a - b;
});
//------------------------

//---------------Variáveis
let numerosFaltando = [];
let numero;
//-----------------------

//-------Função algorítimo-------------------------------------
function check() {
  let indice = 1;
  console.log('lista original: ' + numeros);
  numeros.forEach(function (numero) {
    if (numeros[indice] && numeros[indice] - numero != 1) {
      numero = numero + 1;
      numerosFaltando.push(numero);
      numero = numero + 1;
      while (numeros[indice] - numero != 0 && numero[indice] != numero && numero[indice] > numero) {
        numerosFaltando.push(numero);
        numero = numero + 1;
      }
    }
    indice++;
  });
  numerosFaltando = [...new Set(numerosFaltando)];
  console.log(numerosFaltando);
}
//-----------------------------------------------------------------
check();
*/








/*------------------------------------------------------------------
* Funcao MAP
//Passa por cada item da lista e imprime o valor + indice
let numeros = [1, 20, 18, 14, 22, 7, 12, 11, 13, 15, 17, 2, 5, 8, 9, 9];
let dobro = numeros.map(function (numero, i) {
  return `numero: ${numero} indice: ${i}`;
});

console.log(dobro);
//---------------------------------------------------------------------
*/





//Funcao FIND ------------------------------------------------------------
let fruit = $frutas.find(function (frut) {
  return frut === 5;
});

function imprimirResultado() {
  if (fruit == undefined) {
    console.log('Não encontrato o valor correspondente');
  } else {
    console.log('Funcao FIND retornou: ' + fruit);
  }
}
imprimirResultado();
//-------------------------------------------------------------------------





/**------------------------------------------------------------------------------
* Esta função tem como objetivo testar se todos os itens de um array atendem a um critério
* Em nosso exemplo utilizamos a função para checar se todos os números da lista são maiores que 17
* Como resposta teremos um boleano de retorno true ou false
*/
let $list = [18, 18, 18, 18, 18, 18];
//Usando a função EVERY para buscar numeros acima de 18
let everyMaior18 = $list.every(function (numero) {
  return numero > 17;
});
console.log('Imprimindo retorno de everyMaior18: ' + everyMaior18);
//------------------------------------------------------------------------------












/**------------------------------------------------------------------------------
* Esta função tem como objetivo testar se algum dos itens de um array atendem a um critério
* Em nosso exemplo utilizamos a função para checar se algum dos números da lista é maior que 17
* Como resposta teremos um boleano de retorno true ou false
*/
let $list2 = [18, 17, 18, 18, 18, 18];
let someIgual17 = $list2.some(function (numero) {
  return numero == 17;
});
console.log('Imprimindo retorno de someIgual17: ' + someIgual17);
//------------------------------------------------------------------------------










/**------------------------------------------------------------------------------
* Esta função tem como objetivo passar por cada item do array e iterar de cada um dele
* Em nosso exemplo utilizamos a função para realizar a soma de cada numero do array
* Como resposta teremos a soma
*/
let $list3 = [1, 3, 4, 5, 8, 11];
//Usando a função EVERY para buscar numeros acima de 18
let reduce = $list3.reduce(function (resultado, numero) {
  return resultado + numero;
});
console.log('Imprimindo retorno soma do reduce: ' + reduce);
//------------------------------------------------------------------------------










/**

let bruxos = ['Harry', 'Herminione', 'Rony'];
let iteradorBruxos = bruxos[Symbol.iterator]();

let iterador = bruxos[Symbol.iterator]();
let done = false;
let proximo = iterador.next();
do {
  let bruxo = proximo.value;
  chapeuSeletor.fazerSelecaoDaCasa(bruxo);
  proximo = iterador.next();
} while (!proximo.done);

iterador.next();
*
*/





//A funcao for of realiza uma ação para cada item de uma lista -----------------------------
//Em nosso exemplo utilizamos o console para imprimmir cada valor da lista
for (let num of $list3) {
  console.log('Numero: ' + num);
}

//----------------------------------------------------------------------------------------







//----------------------------------------------------------------------------------------
let produtos = [
  {
    'Descricao': 'Maça',
    'Preco': 10
  }, {
    'Descricao': 'Pera',
    'Preco': 8
  }, {
    'Descricao': 'Uva',
    'Preco': 7
  }
];
//Laço FOR IN que passa por cada propriedade de um objeto 

for (let prop in produtos) {
  let info = produtos[prop];
  console.log(info);
}
//----------------------------------------------------------------------------------------------

//Laço FOR OF que passa por cada propriedade de um objeto 
for (let produto of produtos) {
  console.log(produto.Descricao);
}












//-------------------------------------------------------------------------
//Criando MAP
let mapa = new Map();
mapa.set('Item 1', 9.90);
mapa.set('Item 2', 9.80);
mapa.set('Item 3', 9.99);
mapa.set('Item 4', 10.20);

for (let key of mapa.keys()) {
  console.log(key);
}

for (let value of mapa.values()) {
  console.log(value);
}

for (let entrada of mapa.entries()) {
  console.log(entrada);
}
//--------------------------------------------------------------------------







//--------------------------------------------------------------------------
//Lista sem repetições com SET 
let set = new Set();
set.add(1);
set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.add(3);
set.add(4);

console.log('------------------');
for (const valor of set) {
  console.log(valor);
}

//ou 

let set2 = new Set([2, 1, 2, 4, 5, 9, 9, 1]);
console.log('------------------');
for (const valor of set2) {
  console.log(valor);
}

//Verificar se existe o numero 2 na lista.. Este exemplo irá retornar um boleano
console.log(set2.has(2));
//-----------------------------------------------------------------------------





//Novo padrão de funções --- Arraw Functions 
/**
* No ES5 tinhamos a seguinte estrutura de funções
* --------------------
* function desligar(x, y, z){
  * //corpo da funcao
  * }
  * ---------------------
  * Com a nova sintaxe do ES6 essa mesma funcão tem a seguinte estrutura
  * -----------------------
  * let desligar = (x, y, z) =>{
    * //corpo da funcao
    * }
    *------------------------
    * Quando temos apenas um argumento podemo eliminar os parenteses
    * ---------------------------
    * let desligar = x => {
      * //corpo da funcao
      * }
      * --------------------------
      */




//-------------------------------------
let calculo = (x, y) => x * y;
console.log('Resultaddo do calculo é: ' + calculo(2, 5));
//-------------------------------------
//OU
let calculo2 = (x, y) => {
  return x * y;
}
console.log('Resultaddo do calculo2 é: ' + calculo(3, 5));
//-------------------------------------
//Vamos ver a mesma função que criamos anteriormente em uma Arraw Function
/**
*eliminarFiltros = e => {
  $body = document.createElement('tbody');
  $frutas = [1, 20, 18, 14, 22, 7, 12, 11, 13, 15, 17, 2, 5, 8, 9, 9];
  criarLista();
}
*/
class Pessoa {
  constructor (nome, tel, niver) {
    this._nome = nome,
      this._telefone = tel,
      this._aniversario = niver;
    return this;
  }
}

let pessoa1 = new Pessoa('Ale', '6499225-8441', '31/05/1989');
console.log(pessoa1);


const time = {
  nome: 'Galcond',
  membros: ['Alessandro', 'Clayton', 'Panda', 'Jamile'],
  membrosDaEquipe: function () {
    this.membros.forEach(membro => {
      console.log(`${membro} é da equipe ${this.nome}`);
    });
  }
}
time.membrosDaEquipe();


const cesta = {
  descricao: 'Cesta de Frutas',
  preco: 8.99,
  validade: '31/12/2019'
}

//Selecionando o valor da propriedade validade dentro do objeto cesta
const { validade } = cesta;
console.log(validade);



const propriedades = new WeakMap();
class Cesta {
  constructor (produtos, preco, descricao, qtdItens) {
    propriedades.set(this, {
      produtos, preco, descricao, qtdItens
    });
  }
  retornarPropriedade(propriedade) {
    return propriedades.get(this)[propriedade];
  }
}

const cestaABC = new Cesta(['Banana', 'Pera', 'Uva', 'Maça', 'Alface'], 9.99, 'Cesta Personalizada', 6);
console.log(cestaABC.retornarPropriedade('produtos'));
console.log();
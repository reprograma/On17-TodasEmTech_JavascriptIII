# On17-TodasEmTech-JavaScriptIII

Esta é a 10ª semana da turma online: Todas em Tech on17 - Front-end, nesta aula do dia 29/05/2022 teremos os seguintes conteúdos:

- Revisão de JavaScript;
  - Condicionais;
  - Loops;
  - Callbacks;
  - Arrays;
  - Métodos de Array;
  - Objetos;
  - Objeto Date e seus métodos;
  - DOM;

## Apresentação

### Quem é a professora Lilit?

<img src='./assets/lilit.jpeg' width=400 alt='selfie de Lilit com cabelos cacheados pretos longos amarrados com franja média divida ao meio, blusa preta, baton rosa e corrente dourada no pescoço, o fundo é chapado de um tom de verde petróleo'>

[Lilit Bandeira](https://www.instagram.com/lilitravesti), sou uma travesti paraibana residente em São Paulo, trabalho como Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam;

#### Contatos

- E-mail: devlilitbandeira@gmail.com
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

### Quem são as monitoras?

<img src='./assets/carrot.jpg' width=700 alt='personagem carrot do anime one piece na sua forma Sulong, ela é uma personagem humanoide com características de coeelho, tem pelagem totalmente branca especialmente cheios na cabeça como cabelo humano liso e longo e na calda, orelhas grandes, olhos vermelhos com fundo preto e veste um laço rosa no pescoço e um shor preto curto, ao fundo a noite com uma lua cheia'>

### Quem são as alunas?

<img src='./assets/kunoichis.jpg' width=700 alt='6 personagens do anime naruto shippuden, da esquerda para direita temos a temari com cabelos cacheados loiros amarrados em dois coques laterais e uma franja lateral, a Ino com cabelos loiros longos amarrados em rabo de cavalo e com franja média lateral, a hinata com cabelos pretos médios com franja reta curta, sakura com cabelos rosas chanel com faixa vermelha amarrada, tenten com cabelos pretos lisos presos em e dois coques laterais e karui com cabelos vermelhos cacheados médios com um lenço amarrado, todas vestem traje de batalha das kunoichi,, ao fundo a cidade de toquio a noite e uma lua crescente'>

## Acordos

- Manter atenção nas explicações e codar nos momentos definidos;
- Enviar dúvidas no chat para as monitoras;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível;

## Plano de aula - Revisão JavaScript

---

### Como um programa funciona?

Entrada, processamento e saída de dados;

### Exemplo do caixa eletrônico de um banco.¹

- Entrada de dados;
- Escolha da operação desejada;
- Exibição dos dados ou do status da solicitação;

### Fluxos

- Programação sequencial (uma tarefa após a outra);
- Programação condicional (uma verificação a partir do conceito de verdadeiro e falso que determina o que ocorre a seguir);
- Programação de Repetição (instruções que definem um padrão de repetição finito);

| A lógica é sobre organizar pensamentos, colocando-os em ordem e decidindo a partir de deduções as melhores soluções para os problemas encontrados, com a lógica somos capazes de compreender o que é pedido, realizar deduções lógicas, enumerar etapas, analisar outras possibilidades, ensinar ao computador a sua solução, analisar detalhes.

---

### 1. Estruturas Condicionais

São instruções da linguagem baseadas no binário lógico `true` ou `false` (1 ou 0) que nos permite desviar o fluxo do algoritmo de acordo com um teste baseado em condições.

#### 1.1. `If... else`

A condicional `if` é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de `else`. _(MDN)_ Podemos encadear vários ifs com `else if`

```js
const horario = 7; // valor esperado entre 0 e 23
```

```js
if (horario < 12) {
  console.log("dia");
} else {
  console.log("noite");
}
```

#### 1.1.1. Reduzindo com condicional ternário

```js
horario < 12 ? console.log("dia") : console.log("noite");
```

#### 1.1.2. Podemos encadear `else if`

```jsx
if (horario >= 0 && horario < 6) {
  console.log("madrugada");
} else if (horario >= 6 && horario < 12) {
  console.log("manhã");
} else if (horario >= 12 && horario < 18) {
  console.log("tarde");
} else if (horario >= 18 && horario < 24) {
  console.log("noite");
} else {
  console.log("horário inválido");
}
```

#### 1.2. `Switch/case`

A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case. (MDN) Passamos o break para sair da condicional quando um case é correspondido e sua instrução executada. Caso nenhum case seja correspondido podemos usar a cláusula default (opcional)

```jsx
let regiao = "centro-oeste";

switch (regiao) {
  case "nordeste":
    console.log("possui 9 estados");
    break;
  case "norte":
    console.log("possui 7 estados");
    break;
  case "centro-oeste":
    console.log("possui 3 estados e DF");
    break;
  case "sudeste":
    console.log("possui 4 estados");
    break;
  case "sul":
    console.log("possui 3 estados");
    break;
}
```

---

### 2. Estruturas de Repetição

- Podemos chamar também de Loop, laço ou método de iteração. Trata-se de comandos que mantém um trecho de código sendo executado até que uma condição de parada seja satisfeita;
- Sua principal função é possibilitar que possamos repetir um trecho de código sem a necessidade de escrever várias vezes esse trecho, para isso basta ter um ponto de partida e um ponto de chegada para a repetição;

#### 2.0 array para exemplos:

```js
const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
```

#### 2.1. `for`

É uma estrutura de repetição com variável de controle, usada quando se sabe exatamente o ponto de partida e de chegada, o bloco será repetido enquanto a condição for verdadeira, ou seja, para quando a condição retorne false.

```js
for ([inicialização]; [condição]; [expressão final]) {
  declaração
}   
```

##### Exemplos:

```js
for (let i = 0; i < numeros.lenght; i++) {
  const dobro = numeros[i] * 2;
  console.log(dobro);
}
```

#### 2.2. `while`

Tem um funcionamento muito parecido com o do `for`, de executar sua intrução desde que a condição seja verdadeira, é sempre possível substituir o uso do `for` pelo do `while`, sendo o critério obter o código de melhor leitura, o `while` está mais atrelado à condição ser atendida enquanto o `for` é mais usado para iterar com contadores.

```js
  while (condicao) {
    código aqui;
  }
```

##### Exemplos:

```js
let i = 0;
while (i < numeros.lenght) {
  const dobro = numeros[i] * 2;
  console.log(dobro);
  i++;
}
```

#### 2.3. `for...of`

É um laço que percorre objetos iterativos, sendo o mais comum a array, chamando uma função para cada valor deste objeto;

```js
for (variavel of iteravel) {
  declaração;
}
```

##### Exemplo:

```js
for (let numero of numeros) {
  const dobro = numero * 2;
  console.log(dobro);
}
```

---

### 3. Callbacks

Uma função callback é uma função passada a outra função como parâmetro, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação. _(MDN)_ A Callback é chamada no retorno da função externa.

```js
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function calcular(a, b, callback) {
  return callback(a, b);
}

const num1 = 7;
const num2 = 2;

const somaDoisNumeros = calcular(num1, num2, somar);
const subtracaoDoisNumeros = calcular(num1, num2, subtrair);
const multiplicacaoDoisNumeros = calcular(num1, num2, multiplicar);
const divisaoDoisNumeros = calcular(num1, num2, dividir);

console.log([somaDoisNumeros]); // 9
console.log(subtracaoDoisNumeros); // 5
console.log(multiplicacaoDoisNumeros); // 14
console.log(divisaoDoisNumeros); // 3.5
```

#### 3.1. Deixando a sintaxe reduzida com arrow function:

```js
const somar = (a, b) => a + b;

const subtrair = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;

const calcular = (a, b, callback) => callback(a, b);
```

---

### 4. Arrays

#### 4.1. Criando uma array:\*\*

```js
const tipos = ["String", "Números", "Booleanos"];
const cidades = new Array("Recife", "São Paulo", "Manaus");
const cursos = "frontend backend".split(" ");
const tecnologias = Array.of("HTML", "CSS", JS);
```

#### 4.2. Acessando o valor de um elemento da array:

```js
console.log(tipos[1]);
```

---

### 5. Métodos de Array

#### 5.0. array para exemplos:

```js
const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
```

#### 5.1. Métodos de iteração

- `find()`

  ```js
  const encontrarPrimeiro = numeros.find((element) => element == 2);
  console.log(encontrarPrimeiro); // retorno 2
  ```

- `filter()`

  ```js
  const filtrarPor = numeros.filter((element) => element == 3);
  console.log(filtrarPor); // retorno [3, 3, 3]
  ```

- `map()`

  ```js
  const executarTodos = numeros.map((element) => (element = 4));
  console.log(executarTodos); // retorn  [4, 4, 4, 4, 4, 4, 4, 4, 4]
  ```

- `forEach()`

  ```js
  const verTodos = numeros.forEach((element) => console.log(element));
  console.log(verTodos); // retorno  3\n2\n4\n3\n5\n1\n3\n4\n2
  ```

- `reduce()` -> O método reduce() uma callback que será executada para cada elemento da array, resultando num único valor de retorno, esta callback pode receber alguns parâmetros, sendo os mais comuns o `acumulador` e o `valorAtual`

  ```js
  const ReduzirPara = numeros.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual
  );
  console.log(ReduzirPara); // retorno 27
  ```

#### 5.2. Outros métodos

- `concat()` -> retorna um novo array contendo todos os arrays ou valores passados como parâmetro. _(MDN)_

  ```js
  const arrayConcatenada = numeros.concat(1, [2, 3], "café");
  console.log(arrayConcatenada); // retorno [3, 2, 4, 3, 5, 1, 3, 4, 2, 1, 4, 5, 2, 'café']
  ```

- `push():` -> adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. _(MDN)_

  ```js
  const adicionaNoFinal = numeros.push(2, 3);
  console.log(adicionaNoFinal); // retorno 11
  ```

- `pop():` -> remove o último elemento de um array e retorna aquele elemento. _(MDN)_

  ```js
  const removeUltimo = numeros.pop();
  console.log(removeUltimo); // retorno 2
  ```

- `shift()` -> remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. _(MDN)_

  ```js
  const removePrimeiro = numeros.shift();
  console.log(removePrimeiro); // retorno 3
  ```

- `unshift()` -> adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado. _(MDN)_

  ```js
  const adicionaNoInicio = numeros.unshift(4, 1);
  console.log(adicionaNoInicio); // retorno 11
  ```

- `slice()` -> retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado. _(MDN)_

  ```js
  const copiaParte = numeros.slice(2, 5);
  console.log(copiaParte); //retorno [4, 3, 5]
  ```

- `splice()` -> altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos. _(MDN)_

  ```js
  const removeEAdiciona = numeros.splice(2, 2, "novo");
  console.log(removeEAdiciona); //retorno [4, 3] -> removidos
  console.log(numeros); // retorno [3, 2, 'novo', 5, 1, 3, 4, 2]
  ```

- `indexOf()` -> retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente. _(MDN)_

  ```js
  const localizaElemento = numeros.indexOf(2);
  console.log(localizaElemento); // retorno 1
  ```

- `includes()` -> determina se um array contém um determinado elemento, retornando true ou false apropriadamente. _(MDN)_

  ```js
  const verificaSeExiste = numeros.includes(4);
  console.log(verificaSeExiste); // true
  ```

- `join()` -> junta todos os elementos de um array em uma string e retorna esta string. _(MDN)_

  ```js
  const transformaString = numeros.join("-");
  console.log(transformaString); // retorno "3, 2, 4, 3, 5, 1, 3, 4, 2"
  ```

---

### 6. Objetos

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). _(MDN)_ Os objetos são formados por chave e valor

#### 6.1. Criando um objeto:

```js
const aluna = {
  nome: { primeiro: "Lilit", segundo: "Bandeira" },
  idade: 32,
  cidade: "Recife",
  interesses: ["música", "animes"],
  saudacao: () => console.log("olá meninas"),
};
```

#### 6.2. Acessando o valor de uma propriedade ou método de objetos usando:

1. notação de ponto - Digitando o ponto, podemos acessar todos as propriedades e métodos encapsuladas dentro do objeto

```js
console.log(aluna.nome.primeiro);
aluna.saudacao();
```

2. notação de cochetes - Parecido com a maneira que acessamos itens de um array, só que ao invés de usarmos índice (número), usamos a chaves (strings) para acessar o valor de um item

```js
console.log(aluna["nome"]["primeiro"]);
console.log(aluna["idade"]);
console.log(aluna["interesses"][0]);
```

#### 6.3. Desestruturando um objeto:

```js
const { idade, saudacao } = aluna;
```

---

### 7. Objeto Date e seus métodos

Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC). _(MDN)_

```js
const hoje = new Date();

console.log(hoje); // 2022-05-29T10:56:49.693Z

const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();

console.log(`${dia}/${mes + 1}/${ano}`); // 29/05/2022 🤔
```

#### 7.1. `toLocaleDateString()`

Método que retorna uma string com a representação de parte da data baseando-se no idioma. _(MDN)_ Argumentos _locales_ e _options_

```js
const dataFormatada = hoje.toLocaleDateString("pt-BR");
console.log(dataFormatada); // 29/05/2022

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dataLonga = hoje.toLocaleDateString("pt-BR", options);
console.log(dataLonga); // domingo, 29 de maio de 2022
```

---

### 8. DOM

<img src='./assets/dom.png' width=700 alt='árvore de estrutura do DOM'>

DOM é uma sigla que significa Document Object Model. Quando a página é carregada o browser cria um objeto que representa os elementos da página a partir do HTML. A forma mais fácil de acessar e manipular o DOM é usando JavaScript.

- document: representa o documento HTML
- element: são todas as tags que estão no arquivo HTML e se transformam em elementos da árvore DOM
- text: é o conteúdo de texto que vai entre os elementos (tags).
- attribute: são os todos atributos para um nó específico. No caso, o attribute href="http:// instagram .com/lilitbandeira" está associado ao elemento, outros exemplos de atributos são o class, o src, o id, entre outros.

O DOM é a representação do objeto do documento HTML e atua como uma interface de programação que permite a manipulação de sua estrutura com o JavaScript ou outras linguagens. Podemos manipular o DOM para realizar alterações na estrutura do HTML, alterar estilos, modificar conteúdos e adicionar diversos eventos.

#### 8.1. Métodos de manipulação DOM

O DOM possui muitos métodos, são eles que fazem a ligação entre os nós (elementos) e os eventos.

Seguem alguns dos principais métodos, para a lista completa acesse a [documentação.](https://developer.mozilla.org/en-US/docs/Web/API/Document)

- `getElementById()` -> Retorna o elemento que possui o id passado como argumento;
- `getElementsByClassName()` -> Retorna uma coleção de todos os elementos que possuem a classe passada como argumento;
- `getElementsByTagName()` -> Retorna uma coleção de todos elementos que possuem a tag name informada
- `querySelector()` -> Retorna o primeiro elemento do DOM que possui a .class, #id ou tag passada como argumento;
- `querySelectorAll()` -> Retorna todos os elementos do DOM que possuem a .class, #id ou tag passada como argumento;
- `createElement()` -> Cria um elemento na página;
- `createAttribute()` -> Cria um atributo na página;
- `appendChild()` -> Insere um elemento filho ao final do elemento mãe;
- `removeChild()` -> Remove um elemento filho e retorna o elemento removido;
- `parentNode()` -> Retorna a mãe de um elemento.

#### 8.2 Propriedades de manipulação DOM

- `innerText` -> define ou obtém o conteúdo textual "renderizado" de um nó e seus descendentes;
- `innerHTML` -> define ou obtém a sintaxe HTML contida no elemento;
- `value` -> define ou retorna o valor do atributo value de um campo de texto.
- `classList` -> propriedade somente leitura que retorna uma coleção com as classes do elemento;
  - `add()` -> adiciona uma classe ao elemento;
  - `remove()` -> remove uma classe do elemento;
  - `toggle()` -> adiciona uma classe ao elemento caso a classe não exista, caso exista a remove;
  - `contains()` -> Retorna um valor booleano, indicando se um elemento tem o nome da classe especificada;
- `style` -> Acrescenta/modifica um estilo ao elemento;

#### 8.3 Eventos

Um eventos é um conjunto de ações que são realizadas em um determinado elemento da página web, seja ele um texto, uma imagem, ou uma div, por exemplo. A Grande maiorria dos eventos nascem na interação da usuária com a aplicação, como:

| Evento      | Descrição                                                    |
| ----------- | ------------------------------------------------------------ |
| onBlur      | remove o foco do elemento                                    |
| onChange    | muda o valor do elemento                                     |
| onClick     | o elemento é clicado pela usuária                            |
| onFocus     | o elemento é focado                                          |
| onKeyPress  | a usuária pressiona uma tecla sobre o elemento               |
| onKeyUp     | define ação quando a usuária libera a tecla é pressionada    |
| onLoad      | carrega o elemento por completo                              |
| onMouseOver | define ação quando a usuária passa o mouse sobre o elemento  |
| onMouseOut  | define ação quando a usuária retira o mouse sobre o elemento |
| onSubmit    | define ação ao enviar um formulário                          |

Para manipular evento externo podemos usar `Event listener` que adiciona ou remove um evento sobre qualquer elemento. O Event Listener disponibiliza duas funções principais, são elas:

> Listener é um objeto que recebe uma notificação quando um evento do tipo especificado ocorre.

`addEventListener` - Adiciona um listener que dispara uma função quando ocorrer determinado evento no elemento.
`removeEventListener` - Remove um listener previamente adicionado em um objeto/elemento e retorna true em caso de sucesso.

```
elemento.addEventListener('click', function (evento) {
  //ação a ser executada no clique do elemento
  console.log(evento);
});
```

> Usamos o método preventDefault() para cancelar a ação padrão que pertence a um determinado evento.

---

### 9. Para praticar na aula;

#### 9.1. Exercício de fixação do `if... else`

- Vamos criar uma lógica que verifique e retorne a classificação do IDH dos seguintes países de acordo com o a Escala de IDH do Programa das Nações Unidas para o Desenvolvimento – PNUD da ONU

```js
let noruega = 0.944;
let qatar = 0.85;
let canada = 0.913;
let brasil = 0.755;
let japao = 0.891;
let vietna = 0.666;
let afeganistao = 0.465;
let camaroes = 0.512;
```

<img src='./assets/idh.jpg' width=700 alt='índice que mede IDH'>

#### 9.2. Exercício de fixação do `for` e `for of`

- Refatore o exercício anterior adicionando uma estrutura de repetição que retorne a classificação do IDH dos mesmos países, caso tenhamos recebido os dados da seguinte forma:

```js
let data = [
  {
    pais: "noruega",
    idh: 0.944,
  },
  {
    pais: "qatar",
    idh: 0.85,
  },
  {
    pais: "canadá",
    idh: 0.913,
  },
  {
    pais: "brasil",
    idh: 0.755,
  },
  {
    pais: "japão",
    idh: 0.891,
  },
  {
    pais: "vietnã",
    idh: 0.666,
  },
  {
    pais: "afeganistão",
    idh: 0.465,
  },
  {
    pais: "camarões",
    idh: 0.512,
  },
];
```

#### 9.3. Exercício de fixação do `DOM`

- Devemos criar uma página (usando HTML e CSS) e popular os campos corretamente com os dados do objeto JSON (usando JavaScript/DOM), o objeto já está no arquivo script.js na pasta pratica com todos os detalhes sobre o exercício;

---

### 10. Desafios da semana

- Devemos criar uma página (usando HTML e CSS) e popular os campos corretamente com os dados com os dados do arquivo data.json ou do objeto JSON usando JavaScript, o objeto já está no arquivo script.js na pasta desafio com todos os detalhes sobre o desafio;

---

### 11. Referências

```bash
¹.  Livro: Lógica de Programação e Algoritmos com JavaScript
    Autor: Edécio Fernando Lepsen
    Editora: novatec
```

| Conteúdo          | Fonte | Link                                                                                                     |
| ----------------- | ----- | -------------------------------------------------------------------------------------------------------- |
| Callbacks         | MDN   | https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function                                     |
| If..else          | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else                   |
| Switch            | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch                      |
| Ternário          | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator         |
| While             | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while                       |
| For               | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for                         |
| For...of          | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of                    |
| Arrays            | MDN   | https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays                             |
| find()            | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find              |
| filter()          | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter            |
| map()             | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map               |
| forEach()         | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach           |
| Reduce()          | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce            |
| concat()          | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat            |
| Objetos           | MDN   | https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects                                        |
| Objetos           | MDN   | https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics                                 |
| Desestruturação   | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment     |
| Date              | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date                    |
| toLocalDateString | MDN   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString |
| JSON              | MDN   | https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON                                   |
| DOM               | MDN   | https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model                                   |
| Eventos           | MDN   | https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events                         |

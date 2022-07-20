//*A)

// const nome = ""

//*B)

// let idade

//*C)

// console.log(typeof nome , typeof idade)

//*D)

//O tipo da variável nome apareceu string, devido as aspas como atribuição de tipo porém sem valor indicado.
//O tipo da variável idade apareceu undefined, foi não foi atribuido nenhum valor à ela.

//*E)

let pergunta1 = prompt('Qual é o seu nome?')
let pergunta2 = prompt('Qual é a sua idade?')

const nome = pergunta1
let idade = pergunta2

//*F)

console.log(typeof nome , typeof idade)
//Os tipos das variáveis mudaram devido ao fato de serem atribuidos novas variáveis a elas com tipos diferentes.
//Antes a const nome = "" era uma string e recebeu um prompt como novo valor, então ela se manteve string
//E a variável let idade recebeu um novo valor de prompt que sempre recebe um string, ou seja, mudou seu valor original de undefined para string.

//*G)

let bemVindo = alert ("Olá " + nome + " você tem " + idade + " anos.")
console.log("Olá " , nome , "você tem " , idade , "anos.")
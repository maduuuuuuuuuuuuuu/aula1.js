let texto = String(
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis reprehenderit, quasi soluta debitis ab rem recusandae explicabo possimus molestias, sit quisquam excepturi sunt ad velit distinctio repudiandae amet laborum voluptatibus."
);

console.log(texto.length); //tamanho
console.log(texto.toUpperCase()); //maiusculo
console.log(texto.toLowerCase()); //minusculo
console.log(texto.charAt(2)); //caráctere na posição

//funções de números 
let num = 10;

console.log("BINÁRIO: " + num.toLocaleString(2));

//biblioteca MATCH
console.log("PI: " + Math.PI);
console.log("PI redondo: " + Math.round(Math.PI));
console.log("PI com 4 depois da vírgula: " + Math.PI.toFixed(4));

//decisão
let idade = 16;

if(idade >= 18){
    console.log("Você pode jogar no tigrinho");
}
else{
    console.log("Você NÃO pode jogar no tigrinho");
}

let textinho;

if(textinho){
    console.log("Tem algo definido");
}
else if(textinho == " "){
    console.log("Espaço em branco");
}
else{
    console.log("Não tem nada definido");
}

let opcao = 1;

switch(opcao){
case 0:
    console.log("0");
case 1:
    console.log("1");
default:
    console.log("Diferente");
    break;

}
let idade2 = 17;
let msg = idade2 >= 18 ? "Maior de idade" : "Menor de idade";

console.log(msg);

//laços
for(let i=0; i<10; i++){
    console.log(i+1);
}

let x = 0;

while(true){
    console.log(x);
    x++;

    if (x >= 10) break;
}
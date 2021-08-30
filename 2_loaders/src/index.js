import Button from './components/buttons';
import Image from './components/image';
import Title from './components/title';
import warning from './templates/warning.html'
import './styles/warning.css'
import fraseTxt from './files/frases.txt'
import descricao from './files/descricao.json';


const title = new Title();

title.crate('Primeira página');

const image = new Image();

image.insertFotoImage();

const button = new Button;

button.create();

// Babel spread
const obj = {a:1, b:2, c:3, d:4}

let {a,b, ...teste} = obj

console.log(a);
console.log(b);
console.log(teste)

// import to html
const body = document.querySelector('body');
body.innerHTML += warning;

// import arquio de texto
const frase = fraseTxt;
console.log(frase);

// impor jsons
const descricaoJson = descricao;
console.log(descricaoJson.nome);




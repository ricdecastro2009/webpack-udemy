import print from './msg';


console.log(_.difference([1,2,3], [1,4,5]));

console.log(_.lastIndexOf([1,2,3], 2));

if(module.hot){
  module.hot.accept('./msg.js', function(){
    console.log("O módulo de msg atualizou");
    print();
  })
}

function createButton(){
  const btn = document.createElement('button');
  btn.innerText = 'Clique aqui';

  document.querySelector('body').appendChild(btn);

  btn.onclick = e =>  import('./lazy').then(module => {
    const lazy = module.default;
    lazy();
  });


  //npx webpack --profile --json=status.json


}

createButton();
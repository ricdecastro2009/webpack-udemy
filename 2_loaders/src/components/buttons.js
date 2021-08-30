import './button.scss'
class Button{
  
  create(){
    const button = document.createElement('button');
    button.innerText = 'Clique Aqui';
    button.classList = 'btn';
    document.querySelector('body').appendChild(button);
  }
}

export default Button;
import Foto from '../img/foto1.jpeg'

class Image {
  
  insertFotoImage(){
    const img = document.createElement('img');
    img.src = Foto;
    img.width = 200;

    document.querySelector('body').appendChild(img);
  }
}

export default Image;
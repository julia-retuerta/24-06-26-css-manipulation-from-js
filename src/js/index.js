// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const boxElement = document.getElementById('box');

const buttonElement = document.getElementById('button');

buttonElement.addEventListener('click', () => {
  boxElement.classList.toggle('box-green');
});

// validar formulario: display block o display none <span>

// event.preventDefault(); esto hay que ponerlo siempre para que no se envíe el formulario

const formElement = document.getElementById('form');

const checkForm = event => {
  event.preventDefault();
  console.log('hola');
  console.dir(event.target);
};

formElement.addEventListener('submit', checkForm);
formElement.addEventListener('input', event => {
  console.log(event.target);
});

const helloElement = document.querySelector('#hello');
helloElement.addEventListener('click', (event) => {
    event.preventDefault(); 
    alert('Hello world')
});

const alxElement = document.querySelector('#alx');
const body = document.querySelector('body');
alxElement.addEventListener('click', (event) => {
    event.preventDefault();
    body.innerHTML+= '<p>Kurs ALX wiele mnie uczy</p>';
});

const addClassElement = document.querySelector('#addClass');
const h1Elements = document.querySelectorAll('h1');
addClassElement.addEventListener('click', (event) => {
    h1Elements.forEach(el =>{ 
        el.classList.add('warning')
    })
});

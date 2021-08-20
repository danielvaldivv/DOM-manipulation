/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)');

// URL API
const baseUrl = 'https://platzi-avo.vercel.app'
const appNode = document.querySelector('section#container')

appNode.addEventListener('click', (event) =>{
  if(event.target.nodeName ==="H2"){
    window.alert('hola');
  }
})

const formatPrice = (price) => {

  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency:'USD'
  }).format(price)

  return newPrice
}
//intl

// Web API
// Pasos para trabajar
// 1. Conectarnos al servidor, el fetch devuelve una promesa por lo tanto es importante usar .then y .catch
window.fetch(`${baseUrl}/api/avo`)
// 2. Procesar la respuesta y convertirla en JSON
.then(response => response.json())
// 3. JSON -> Data -> Renderizar info en browser
.then(responseJson => {
  //Array de items para hacer una sola ejecución al DOM por medio de un array y no hacerr una ejecución por cada item
  const allItems = []
  responseJson.data.forEach(item => {

    //create image
    const image = document.createElement('img');
    image.src = `${baseUrl}${item.image}`;

    //create title
    const title = document.createElement('h2');
    title.textContent = item.name;
    title.className = "title";

    //create price
    const price = document.createElement('div');
    price.textContent = formatPrice(item.price);
    price.className = 'price';

    //contenedor de los items
    const container = document.createElement('section')
    const containerElement = document.createElement('div')
    containerElement.className = 'container__element';
    containerElement.append(image, title, price);
    container.append(containerElement);
    allItems.push(container);
  });
  //Añadir al DOM por una sola ejecición
  appNode.append(...allItems)
})

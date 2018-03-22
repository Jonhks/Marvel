// Your public key
// 586b18cad7e0e9c211f61f8222f57401
// Your private key
// d3eaae343e975512554412eb04d65d980d927b36

const priveteKey = "d3eaae343e975512554412eb04d65d980d927b36";
const publicKey = "586b18cad7e0e9c211f61f8222f57401";
const contents = document.getElementById("content");

// creando metodo fetch
getConnection = () => {
  // creando el numero unico
  const ts = Date.now();
  // console.log(ts)
  // Generando un MD5
  const hash = md5(ts+ priveteKey + publicKey); 
  // console.log(hash);
  const URL =  `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  
  // haciendo la peticion con fetch
  fetch(URL)
  .then(response => response.json())
  .then(response => {
    response.data.results.forEach(item =>{
      drawHero(item);
      console.log(response);
    })
  });
}

drawHero = item => {
  const img = `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`;
  // console.log(img);
  const hero = 
  `<div>
    <figure>  
        <h3>${item.name}</h3>
        <img src="${img}">
        <figcaption>${item.description}</figcaption>    
    </figure>    
  </div>`;
// console.log(hero);

  // content.innerHTML = hero;
  contents.insertAdjacentHTML('beforeEnd', hero);
}



getConnection()
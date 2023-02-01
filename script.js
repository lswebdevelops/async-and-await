const container = document.querySelector('.containerOne');
const input = document.querySelector('input');
const button = document.querySelector('button');
const img = document.createElement('img');
container.appendChild(img);
img.classList.add('container');


button.addEventListener('click', () => {
  const searchTerm = input.value;
  fetchGif(searchTerm);
  }); 

async function fetchGif(searchTerm) {
 
 try {
   const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XjW9YGEYlR8XavZ8Su1WJJI6UOgqp33P&s=${searchTerm}`,
   {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      img.src = response.data.images.original.url;
    })
  }
  catch(error){
    console.log("error: ", error);
  };
}



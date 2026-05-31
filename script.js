
```javascript id="u9v4pe"
// TMDB API

const TMDB_API_KEY = "6a782c30983b74d5e01dbab7cf128327";


// ELEMENTS

const sidebar =
document.getElementById('sidebar');

const menuBtn =
document.getElementById('menuBtn');

const closeSidebarBtn =
document.getElementById('closeSidebar');

const hero =
document.getElementById('hero');

const heroTitle =
document.getElementById('heroTitle');

const heroText =
document.getElementById('heroText');

const heroBtn =
document.getElementById('heroBtn');

const cardsContainer =
document.getElementById('cardsContainer');

const backgroundGlow =
document.getElementById('backgroundGlow');

const searchBtn =
document.getElementById('searchBtn');

const searchInput =
document.querySelector('.search-box input');


// SIDEBAR

menuBtn.addEventListener('click',()=>{

sidebar.classList.add('active');

});

closeSidebarBtn.addEventListener('click',()=>{

sidebar.classList.remove('active');

});


// CLOSE SIDEBAR OUTSIDE CLICK

document.addEventListener('click',(e)=>{

if(
sidebar.classList.contains('active') &&
!sidebar.contains(e.target) &&
!menuBtn.contains(e.target)
){
sidebar.classList.remove('active');
}

});


// CATEGORY DATA

const categories = {

home:{
title:"MovieDex Universe",
text:"Discover movies, anime, cartoon movies, web series and games in one futuristic entertainment platform.",
bg:"https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
glow:"#00bfff",
button:"Start Exploring",
cards:[
{
id:157336,
title:"Interstellar",
image:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
},
{
id:27205,
title:"Inception",
image:"https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
},
{
id:155,
title:"Dark Knight",
image:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
}
]
},

movies:{
title:"Trending Movies",
text:"Explore blockbuster cinematic experiences from around the world.",
bg:"https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
glow:"#ff3b3b",
button:"Watch Movies",
cards:[
{
id:157336,
title:"Interstellar",
image:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
},
{
id:27205,
title:"Inception",
image:"https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
}
]
},

anime:{
title:"Anime World",
text:"Enter the world of anime adventures and emotional stories.",
bg:"https://wallpaperaccess.com/full/3819037.jpg",
glow:"#ff00ff",
button:"Watch Anime",
cards:[
{
title:"Attack on Titan",
image:"https://cdn.myanimelist.net/images/anime/10/47347.jpg"
},
{
title:"Demon Slayer",
image:"https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
}
]
}

};


// LOAD CATEGORY

function loadCategory(category){

const data = categories[category];

hero.style.backgroundImage =
`url(${data.bg})`;

heroTitle.textContent =
data.title;

heroText.textContent =
data.text;

heroBtn.textContent =
data.button;

backgroundGlow.style.background =
data.glow;

cardsContainer.innerHTML = "";

data.cards.forEach(card=>{

cardsContainer.innerHTML += `

<div class="card glass fade-up"
onclick="openMovie(${card.id})">

<img src="${card.image}">

<h3>${card.title}</h3>

</div>

`;

});

}


// OPEN MOVIE PAGE

function openMovie(movieId){

window.location.href =
`movie.html?id=${movieId}`;

}


// REAL SEARCH SYSTEM

searchBtn.addEventListener('click', async()=>{

const query = searchInput.value.trim();

if(!query){

alert("Type movie name");

return;

}

try{

const response = await fetch(
`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
);

const data = await response.json();

if(data.results.length > 0){

const movie = data.results[0];

window.location.href =
`movie.html?id=${movie.id}`;

}else{

alert("Movie not found");

}

}catch(error){

console.error(error);

alert("Search failed");

}

});


// ENTER KEY SUPPORT

searchInput.addEventListener('keypress',(e)=>{

if(e.key === 'Enter'){

searchBtn.click();

}

});


// LOAD DEFAULT CATEGORY

loadCategory('home');
```

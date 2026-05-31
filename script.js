const TMDB_API_KEY = "6a782c30983b74d5e01dbab7cf128327";
const sidebar=document.getElementById('sidebar');
const menuBtn=document.getElementById('menuBtn');
const closeSidebar=document.getElementById('closeSidebar');

const hero=document.getElementById('hero');
const heroTitle=document.getElementById('heroTitle');
const heroText=document.getElementById('heroText');
const heroButton=document.getElementById('heroButton');
const sectionTitle=document.getElementById('sectionTitle');
const cardsContainer=document.getElementById('cardsContainer');

const logo=document.getElementById('homeBtn');
const searchBtn=document.getElementById('searchBtn');
const sidebarTitle=document.getElementById('sidebarTitle');
const backgroundGlow=document.getElementById('backgroundGlow');

menuBtn.addEventListener('click',()=>{
sidebar.classList.add('active');
});

closeSidebar.addEventListener('click',()=>{
sidebar.classList.remove('active');
});

const categories={
home:{
title:'Welcome To MovieDex',
text:'Explore movies, anime, cartoons, games and web series.',
button:'Explore Now',
theme:'#ff3c3c',
glow:'radial-gradient(circle, rgba(255,60,60,0.18), transparent 70%)',
section:'🔥 Trending Entertainment',
background:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1800&auto=format&fit=crop',
cards:[
['Interstellar','https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'],
['Suzume','https://image.tmdb.org/t/p/w500/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg'],
['Toy Story','https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg']
]
},
movies:{
title:'Movie Universe',
text:'Luxury cinematic movie experience.',
button:'Explore Movies',
theme:'#ff3c3c',
glow:'radial-gradient(circle, rgba(255,60,60,0.18), transparent 70%)',
section:'🔥 Trending Movies',
background:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1800&auto=format&fit=crop',
cards:[['Interstellar','https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg']]
},
anime:{
title:'Anime Universe',
text:'Enter futuristic anime worlds.',
button:'Explore Anime',
theme:'cyan',
glow:'radial-gradient(circle, rgba(0,255,255,0.18), transparent 70%)',
section:'🌌 Trending Anime',
background:'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1800&auto=format&fit=crop',
cards:[['Naruto','https://image.tmdb.org/t/p/w500/8VlM3nE0Mg3lQz6sKjA5QvK7xPd.jpg']]
},
animeMovies:{
title:'Anime Movie World',
text:'Legendary anime movie masterpieces.',
button:'Explore Anime Movies',
theme:'#9b5cff',
glow:'radial-gradient(circle, rgba(155,92,255,0.18), transparent 70%)',
section:'🎥 Trending Anime Movies',
background:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop',
cards:[['Suzume','https://image.tmdb.org/t/p/w500/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg']]
},
cartoons:{
title:'Cartoon Universe',
text:'Fun cartoon adventures.',
button:'Explore Cartoons',
theme:'#ffcc00',
glow:'radial-gradient(circle, rgba(255,204,0,0.18), transparent 70%)',
section:'🧸 Trending Cartoons',
background:'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop',
cards:[['Tom and Jerry','https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg']]
},
cartoonMovies:{
title:'Animated Movie World',
text:'Pixar and DreamWorks adventures.',
button:'Explore Cartoon Movies',
theme:'#ff8800',
glow:'radial-gradient(circle, rgba(255,136,0,0.18), transparent 70%)',
section:'🍿 Trending Cartoon Movies',
background:'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1800&auto=format&fit=crop',
cards:[['Toy Story','https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg']]
},
webseries:{
title:'Web Series Universe',
text:'Premium binge-watch atmosphere.',
button:'Explore Web Series',
theme:'#ff3c3c',
glow:'radial-gradient(circle, rgba(255,60,60,0.18), transparent 70%)',
section:'📺 Trending Web Series',
background:'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1800&auto=format&fit=crop',
cards:[['Stranger Things','https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg']]
},
games:{
title:'Gaming Universe',
text:'Futuristic gaming adventures.',
button:'Explore Games',
theme:'#00ff66',
glow:'radial-gradient(circle, rgba(0,255,102,0.18), transparent 70%)',
section:'🎮 Trending Games',
background:'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1800&auto=format&fit=crop',
cards:[['GTA VI','https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop']]
}
};

function loadCategory(category){
const data=categories[category];

hero.style.backgroundImage=`linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.25)), url(${data.background})`;
backgroundGlow.style.background=data.glow;

heroTitle.textContent=data.title;
heroTitle.style.color=data.theme;

heroText.textContent=data.text;

heroButton.textContent=data.button;
heroButton.style.background=data.theme;

sectionTitle.textContent=data.section;
sectionTitle.style.color=data.theme;

logo.style.color=data.theme;
searchBtn.style.background=data.theme;
sidebarTitle.style.color=data.theme;

cardsContainer.innerHTML='';

data.cards.forEach(card=>{
const div=document.createElement('div');
div.classList.add('card','fade-up');

div.innerHTML=`
<img src="${card[1]}">
<h3>${card[0]}</h3>
`;

div.style.boxShadow=`0 8px 35px ${data.theme}55`;

cardsContainer.appendChild(div);
});

sidebar.classList.remove('active');
}

document.querySelectorAll('.side-btn').forEach(btn=>{
btn.addEventListener('click',()=>{
const category=btn.dataset.category;

if(category && categories[category]){
loadCategory(category);
}

sidebar.classList.remove('active');
});
});

logo.addEventListener('click',()=>{
loadCategory('home');
});

loadCategory('home');

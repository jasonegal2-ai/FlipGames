const games=[
 {title:"Cyber Drift",category:"Racing",desc:"Schnelle Straßenrennen, Neonlichter und intensive Drifts.",tags:["Racing","Arcade"],img:"https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"},
 {title:"Night Ops",category:"Action",desc:"Taktische Missionen in einer dunklen futuristischen Welt.",tags:["Action","Tactical"],img:"https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"},
 {title:"Block World",category:"Simulation",desc:"Baue deine eigene Welt und entdecke grenzenlose Möglichkeiten.",tags:["Sandbox","Simulation"],img:"https://images.unsplash.com/photo-1605898834849-94c4f1c1c1c6?auto=format&fit=crop&w=1200&q=80"},
 {title:"Street Legends",category:"Open World",desc:"Erkunde eine riesige Stadt, fahre Rennen und entdecke neue Orte.",tags:["Open World","Cars"],img:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"},
 {title:"Space Frontier",category:"Adventure",desc:"Reise durch fremde Galaxien und entdecke neue Planeten.",tags:["Adventure","Sci-Fi"],img:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80"},
 {title:"Arena X",category:"Shooter",desc:"Schnelle Matches und intensive Arena-Kämpfe.",tags:["Shooter","Multiplayer"],img:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"}
];
let active="Alle";
const cats=["Alle",...new Set(games.map(g=>g.category))];
const chips=document.getElementById("categories");
cats.forEach(c=>{const b=document.createElement("button");b.className="chip"+(c==="Alle"?" active":"");b.textContent=c;b.onclick=()=>{active=c;document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderGames()};chips.appendChild(b)});
function renderGames(){const q=document.getElementById("search").value.toLowerCase();const list=games.filter(g=>(active==="Alle"||g.category===active)&&g.title.toLowerCase().includes(q));document.getElementById("gameGrid").innerHTML=list.map(g=>`<article class="card" onclick="openGame('${g.title.replaceAll("'","\\'")}')"><div class="cover" style="background-image:url('${g.img}')"></div><div class="info"><span class="badge">${g.category}</span><h3>${g.title}</h3><p>${g.desc}</p></div></article>`).join("")||"<p>Kein Spiel gefunden.</p>"}
function openGame(title){const g=games.find(x=>x.title===title);document.getElementById("modalImg").src=g.img;document.getElementById("modalTitle").textContent=g.title;document.getElementById("modalCategory").textContent=g.category;document.getElementById("modalDescription").textContent=g.desc;document.getElementById("modalTags").innerHTML=g.tags.map(t=>`<span>${t}</span>`).join("");document.getElementById("modal").classList.add("show")}
function closeModal(e){if(!e||e.target.id==="modal"||e.target.classList.contains("close"))document.getElementById("modal").classList.remove("show")}
function focusSearch(){document.getElementById("search").focus();document.getElementById("games").scrollIntoView()}
renderGames();
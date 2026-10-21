/* ===== EDIT HERE ===== */
const CFG={wa:"",hours:"Mon–Sat, 10 AM–8 PM"}; // wa = WhatsApp number, international format, no "+" (e.g. "923001234567")
// Add real products here. img: "images/your-photo.jpg" (optional, replaces the emoji tile)
const P=[
{n:"Girls' Winter Fleece 2-Piece Suit",sku:"PP-GRL-FLC-001",g:"Girls",w:1,p:1990,e:"🧥",bg:"#FFE5D4",s:["2-3 Y","4-5 Y","6-7 Y"],b:"New",d:"A warm, soft fleece two-piece for chilly days.",img:""},
{n:"Boys' Cosy Tracksuit Set",sku:"PP-BOY-TRK-001",g:"Boys",w:1,p:2190,e:"👕",bg:"#DCEBF5",s:["2-3 Y","4-5 Y","6-7 Y"],b:"Pick",d:"A comfy tracksuit set made for play and everyday wear.",img:""},
{n:"Little Panda Sleepwear Set",sku:"PP-INF-SLP-001",g:"Infants",w:0,p:1290,e:"🐼",bg:"#E4F2EA",s:["0-6 M","6-12 M","1-2 Y"],b:"Soft",d:"Gentle sleepwear for peaceful nights.",img:""},
{n:"Floral Cotton Frock",sku:"PP-GRL-FRK-001",g:"Girls",w:0,p:1490,e:"👗",bg:"#FFE0E6",s:["2-3 Y","4-5 Y","6-7 Y"],b:"",d:"A pretty, light cotton frock for sunny days.",img:""},
{n:"Boys' Cotton Kurta Set",sku:"PP-BOY-KRT-001",g:"Boys",w:0,p:1790,e:"👔",bg:"#FFF3C9",s:["4-5 Y","6-7 Y","8-9 Y"],b:"",d:"A neat kurta set for celebrations and Eid.",img:""},
{n:"Hooded Baby Romper",sku:"PP-INF-RMP-001",g:"Infants",w:1,p:1390,e:"🧸",bg:"#EADFF5",s:["0-6 M","6-12 M"],b:"Cosy",d:"A snuggly hooded romper to keep babies warm.",img:""},
{n:"Girls' Puffer Jacket",sku:"PP-GRL-JKT-001",g:"Girls",w:1,p:2890,e:"🧣",bg:"#DCEBF5",s:["4-5 Y","6-7 Y","8-9 Y"],b:"",d:"A light, warm puffer jacket for cold mornings.",img:""},
{n:"Everyday Soft Trouser",sku:"PP-BOY-TRS-001",g:"Boys",w:0,p:1190,e:"👖",bg:"#E4F2EA",s:["2-3 Y","4-5 Y","6-7 Y"],b:"",d:"Soft, easy trousers for every day.",img:""}
];
/* ===================== */
const $=(s,r=document)=>r.querySelector(s),fmt=n=>"PKR "+n.toLocaleString("en-US"),Q=new URLSearchParams(location.search),sel={};
let DRAW=()=>{},qty=1;
const wl=t=>"https://wa.me/"+CFG.wa+"?text="+encodeURIComponent(t);
const msg=(x,z,q)=>`Hi PikoPanda! 🐼\n\nI'd like to order this from your website:\n\n🛍️ Product: ${x.n}\n🏷️ SKU: ${x.sku}\n📏 Size: ${z||"Please advise / see options"}\n🔢 Quantity: ${q||1}\n\nPlease confirm availability and total price.`;
const pic=x=>x.img?`<img src="${x.img}" alt="${x.n}" loading="lazy" style="width:100%;height:100%;object-fit:cover">`:x.e;
const chips=x=>x.s.map(z=>`<button class="chip ${z===sel[x.sku]?"on":""}" data-size="${x.sku}|${z}">${z}</button>`).join("");
const card=x=>`<article class="card"><a class="ph" href="product.html?sku=${x.sku}" style="background:${x.bg}" aria-label="${x.n}">${x.b?`<span class="badge">${x.b}</span>`:""}${pic(x)}</a><div class="body"><h3><a href="product.html?sku=${x.sku}">${x.n}</a></h3><button class="sku" data-copy="${x.sku}" title="Copy SKU">${x.sku} ⧉</button><div class="chips">${chips(x)}</div><div class="price">${fmt(x.p)}</div><button class="btn wa sm" data-order="${x.sku}">💬 Order on WhatsApp</button></div></article>`;
function openWA(t){$("#msg").textContent=t;$("#again").href=wl(t);$("#modal").classList.add("open");if(CFG.wa)window.open(wl(t),"_blank","noopener")}
const hi="Hi PikoPanda! 🐼 I'd like to know more about your baby & kids clothing.";

const pages={
home(){DRAW=()=>{$("#grid").innerHTML=P.slice(0,4).map(card).join("")};DRAW()},
shop(){
 const f={q:Q.get("q")||"",g:Q.get("g")||"All",max:Q.get("max")||"",sort:Q.get("sort")||""};
 $("#q").value=f.q;$("#max").value=f.max;$("#sort").value=f.sort;
 DRAW=()=>{
  let l=P.filter(x=>(f.g==="All"||x.g===f.g||(f.g==="Winter"&&x.w))&&(!f.max||x.p<=+f.max)&&(!f.q||(x.n+" "+x.sku).toLowerCase().includes(f.q.toLowerCase())));
  if(f.sort==="lo")l.sort((a,b)=>a.p-b.p);if(f.sort==="hi")l.sort((a,b)=>b.p-a.p);
  $("#tabs").innerHTML=["All","Boys","Girls","Infants","Winter"].map(t=>`<button class="tab ${t===f.g?"on":""}" data-g="${t}">${t}</button>`).join("");
  $("#count").textContent=`Showing ${l.length} of ${P.length} pieces`;
  $("#grid").innerHTML=l.length?l.map(card).join(""):`<div class="empty"><h3>We couldn't find that combination</h3><p>Try widening your search, or ask us and we'll find it for you.</p><a class="btn wa sm" href="#" data-wa>💬 Ask on WhatsApp</a></div>`;
  const u=new URLSearchParams();for(const k in f)if(f[k]&&f[k]!=="All")u.set(k,f[k]);
  history.replaceState(null,"",u.toString()?"?"+u:location.pathname)};
 $("#tabs").onclick=e=>{const t=e.target.closest("[data-g]");if(t){f.g=t.dataset.g;DRAW()}};
 $("#q").oninput=e=>{f.q=e.target.value;DRAW()};$("#max").onchange=e=>{f.max=e.target.value;DRAW()};$("#sort").onchange=e=>{f.sort=e.target.value;DRAW()};
 DRAW()},
product(){
 const x=P.find(p=>p.sku===Q.get("sku")),m=$("#pd");
 if(!x){m.innerHTML=`<div class="empty"><h3>Piece not found</h3><a class="btn sm" href="shop.html">Back to shop</a></div>`;return}
 document.title=x.n+" | PikoPanda";
 DRAW=()=>{m.innerHTML=`<div class="pgrid"><div class="pimg" style="background:${x.bg}">${pic(x)}</div><div><a class="crumb" href="shop.html">← All pieces</a><h1>${x.n}</h1><button class="sku" data-copy="${x.sku}">${x.sku} ⧉</button><div class="price big">${fmt(x.p)}</div><p class="muted">${x.d}</p><b>Size</b><div class="chips" style="margin-top:8px">${chips(x)}</div><div class="qty"><button data-q="-1" aria-label="Less">−</button><span>${qty}</span><button data-q="1" aria-label="More">+</button></div><button class="btn wa" style="width:100%" data-order="${x.sku}">💬 Order on WhatsApp 🐼</button><ul class="pts"><li>Cash on Delivery</li><li>Delivery charges are confirmed on WhatsApp</li><li>Not sure of the size? Message us your child's age and height.</li></ul></div></div><h2 class="rel">You may also like</h2><div class="grid">${P.filter(p=>p.g===x.g&&p!==x).slice(0,4).map(card).join("")}</div>`};
 DRAW()}
};

document.addEventListener("DOMContentLoaded",()=>{
 const L=(h,t)=>`<li><a href="${h}">${t}</a></li>`;
 document.body.insertAdjacentHTML("afterbegin",`<div class="topbar">🐼 Cash on Delivery · Easy WhatsApp ordering · Delivery charges confirmed in chat</div><header><div class="wrap nav"><a class="brand" href="index.html"><img alt="" src="assets/mark.jpg">PikoPanda</a><nav><ul id="mn">${L("shop.html","Shop")}${L("index.html#categories","Categories")}${L("index.html#how","How to Order")}${L("info.html","Info")}${L("index.html#faq","FAQ")}</ul></nav><div style="display:flex;gap:8px;align-items:center"><a class="btn wa sm" href="#" data-wa>💬 <span>Chat on&nbsp;</span>WhatsApp</a><button class="burger" aria-label="Menu" aria-expanded="false">☰</button></div></div></header>`);
 document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap"><div><div class="brand" style="margin-bottom:10px"><img alt="" src="assets/mark.jpg">PikoPanda</div><p style="margin:0;color:var(--muted)">Where comfort meets cuteness. Baby &amp; children's clothing, ordered easily on WhatsApp.</p></div><div><h4>Explore</h4><a href="shop.html">Shop all</a><a href="index.html#how">How to order</a><a href="index.html#faq">FAQ</a></div><div><h4>Help</h4><a href="info.html#sizing">Sizing</a><a href="info.html#shipping">Shipping</a><a href="info.html#returns">Returns</a><a href="info.html#privacy">Privacy</a><a href="info.html#terms">Terms</a><a href="#" data-wa>WhatsApp us</a><span style="color:var(--muted)">Hours: ${CFG.hours}</span></div></div><div class="copy">© ${new Date().getFullYear()} PikoPanda. All rights reserved.</div></footer><a class="fab" href="#" data-wa aria-label="Chat on WhatsApp">💬</a><div class="modal" id="modal" role="dialog" aria-modal="true"><div class="sheet"><h3>Your message is ready to send</h3><p style="margin:6px 0 0;color:var(--muted);font-size:14.5px">WhatsApp should open with these details. If it doesn't, copy this message and send it to us.</p><pre id="msg"></pre><div class="row"><button class="btn sm" id="copy">📋 Copy message</button><a class="btn wa sm" id="again" href="#" target="_blank" rel="noopener">Open WhatsApp again</a><button class="btn sm" id="close">Close</button></div></div></div>`);
 (pages[document.body.dataset.page]||(()=>{}))();
});
document.addEventListener("click",e=>{
 const t=e.target.closest("[data-size],[data-order],[data-copy],[data-wa],[data-q],.burger,#copy,#close,.modal");if(!t)return;
 if(t.dataset.size){const[k,z]=t.dataset.size.split("|");sel[k]=z;DRAW()}
 else if(t.dataset.q){qty=Math.max(1,Math.min(20,qty+ +t.dataset.q));DRAW()}
 else if(t.dataset.copy){navigator.clipboard&&navigator.clipboard.writeText(t.dataset.copy).catch(()=>{});t.textContent="Copied ✓"}
 else if(t.dataset.order){const x=P.find(p=>p.sku===t.dataset.order);openWA(msg(x,sel[x.sku],document.body.dataset.page==="product"?qty:1))}
 else if("wa" in t.dataset){e.preventDefault();openWA(hi)}
 else if(t.classList.contains("burger")){const o=$("#mn").classList.toggle("open");t.setAttribute("aria-expanded",o)}
 else if(t.id==="copy"){navigator.clipboard&&navigator.clipboard.writeText($("#msg").textContent).catch(()=>{});t.textContent="Copied ✓"}
 else if(t.id==="close"||(t.id==="modal"&&e.target===t)){$("#modal").classList.remove("open");$("#copy").textContent="📋 Copy message"}
});

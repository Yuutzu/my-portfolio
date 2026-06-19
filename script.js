const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add('in');
  t.querySelectorAll&&t.querySelectorAll('.fill').forEach(f=>f.style.width=f.dataset.w);
  t.querySelectorAll&&t.querySelectorAll('[data-count]').forEach(c=>{const end=+c.dataset.count,suf=c.dataset.suffix||'';let s=0;const step=Math.max(1,Math.round(end/30));const iv=setInterval(()=>{s+=step;if(s>=end){s=end;clearInterval(iv);}c.textContent=s+suf;},28);});
  io.unobserve(t);}});},{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// scroll-spy nav
const links=[...document.querySelectorAll('.navlinks a')];
const secs=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const so=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){const id='#'+e.target.id;links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')===id));}});},{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>so.observe(s));
document.addEventListener('DOMContentLoaded',()=>{
  // reveal on load
  document.querySelectorAll('.nav-fade, .fade-up').forEach(el=>setTimeout(()=>el.classList.add('show'),50));

  // intersection reveal
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('show');io.unobserve(entry.target)}
    })
  },{threshold:0.12});
  document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));

  // smooth internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});}));
});

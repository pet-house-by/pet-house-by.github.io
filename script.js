const menu=document.querySelector('.menu');const nav=document.querySelector('.site-header nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));document.getElementById('year').textContent=new Date().getFullYear();

const walkGallery=document.querySelector('.walk-gallery');
if(walkGallery){
  const extraWalkPhotos=[
    'photo_2026-08-28_06-35-48.jpg',
    'photo_2026-08-28_06-35-53.jpg',
    'photo_2026-08-28_06-36-18.jpg',
    'photo_2026-08-28_06-36-22.jpg',
    'photo_2026-08-28_06-36-24.jpg',
    'photo_2026-08-28_06-38-07.jpg'
  ];
  extraWalkPhotos.forEach((name,i)=>{
    const figure=document.createElement('figure');
    const img=document.createElement('img');
    img.src='assets/'+name;
    img.alt='Pet House guest enjoying a walk';
    img.loading='lazy';
    figure.appendChild(img);
    walkGallery.appendChild(figure);
  });
}

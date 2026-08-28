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
  extraWalkPhotos.forEach((name)=>{
    const figure=document.createElement('figure');
    const img=document.createElement('img');
    img.src='assets/'+name;
    img.alt='Pet House guest enjoying a walk';
    img.loading='lazy';
    figure.appendChild(img);
    walkGallery.appendChild(figure);
  });
}

const guestsSection=document.querySelector('#guests');
if(guestsSection){
  const reviews=[
    'We were always kept updated throughout the stay. We received regular photos and videos and always knew our dog was happy and well cared for.',
    'Our dog settled in so well that when it was time to go home, he clearly didn’t want to leave! It was wonderful to see how comfortable he felt there.',
    'We felt completely at ease leaving our pet here. Communication was easy, they were always available, and we received updates throughout the stay.',
    'You can really see that the animals are treated like part of the family. Our dog received lots of attention, walks and affection.',
    'We were nervous about leaving our pet at first, but after seeing the photos and videos, we quickly relaxed. He looked completely at home.',
    'I found Pet House through Reddit while looking for a pet sitter, and I’m so glad I did. They were always in touch and sent me photos and videos throughout the stay. My dog was so comfortable with them that he actually seemed sad to leave! I would definitely recommend them.'
  ];
  const section=document.createElement('section');
  section.id='reviews';
  section.className='section reviews-section';
  section.innerHTML='<div class="section-head"><p class="eyebrow">REVIEWS</p><h2>What pet owners say</h2><p>Feedback we regularly receive from the families whose pets stay with us.</p></div><div class="reviews-grid">'+reviews.map(text=>'<article class="review-card"><div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div><p>“'+text+'”</p><div class="review-paw">🐾</div></article>').join('')+'</div>';
  guestsSection.insertAdjacentElement('afterend',section);
  const reviewsLink=document.createElement('a');reviewsLink.href='#reviews';reviewsLink.textContent='Reviews';
  const dogParkLink=nav.querySelector('a[href="#walks"]');
  if(dogParkLink) nav.insertBefore(reviewsLink,dogParkLink);

  const style=document.createElement('style');
  style.textContent='.reviews-section{max-width:none;background:linear-gradient(180deg,#fff,#f4fbff);padding-left:max(28px,calc((100% - 1180px)/2));padding-right:max(28px,calc((100% - 1180px)/2))}.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.review-card{position:relative;background:#fff;border:1px solid var(--line);border-radius:24px;padding:28px 28px 48px;box-shadow:0 12px 34px rgba(34,93,122,.08);min-height:220px}.review-stars{letter-spacing:3px;color:#d8a92e;font-size:18px;margin-bottom:14px}.review-card p{margin:0;color:#425d70;font-size:15px;line-height:1.75}.review-paw{position:absolute;right:22px;bottom:16px;opacity:.35;font-size:21px}@media(max-width:850px){.reviews-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.reviews-grid{grid-template-columns:1fr}.review-card{min-height:0;padding:24px 24px 44px}}';
  document.head.appendChild(style);
}

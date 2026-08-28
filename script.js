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

/* Strong booking / availability calls to action */
const heroPrimary=document.querySelector('.hero-actions .primary');
if(heroPrimary){heroPrimary.textContent='Check availability';heroPrimary.href='#booking-form';}

if(nav && !nav.querySelector('.nav-booking-cta')){
  const navCta=document.createElement('a');
  navCta.href='#booking-form';
  navCta.className='nav-booking-cta';
  navCta.textContent='Check availability';
  nav.appendChild(navCta);
}

const contactSection=document.querySelector('#contact');
if(contactSection){
  const contactCard=contactSection.querySelector('.contact-card');
  if(contactCard){
    const oldPrimary=contactCard.querySelector('.btn.primary');
    if(oldPrimary) oldPrimary.remove();
    const oldHandle=contactCard.querySelector('small');
    if(oldHandle) oldHandle.remove();
    const bookingOptions=document.createElement('div');
    bookingOptions.className='booking-options';
    bookingOptions.innerHTML='<a class="booking-option telegram-book" href="https://t.me/pethouse_phnompenh" target="_blank" rel="noopener"><span>✈️</span><strong>Check availability on Telegram</strong><small>Fastest way to ask about your dates</small></a><a class="booking-option instagram-book" href="https://www.instagram.com/pet.house.by/" target="_blank" rel="noopener"><span>◎</span><strong>Message us on Instagram</strong><small>@pet.house.by</small></a><a class="booking-option email-book" href="mailto:contact.veronika.inbox@gmail.com?subject=Pet%20House%20booking%20request"><span>✉️</span><strong>Send us an email</strong><small>contact.veronika.inbox@gmail.com</small></a>';
    contactCard.appendChild(bookingOptions);
  }

  const cta=document.createElement('section');
  cta.className='booking-banner';
  cta.innerHTML='<div><p class="eyebrow">READY TO PLAN A STAY?</p><h2>Check your dates with Pet House</h2><p>Send us your dates and a little about your pet. We’ll let you know availability and the price for their stay.</p></div><div class="booking-banner-actions"><a href="#booking-form" class="btn booking-main">Check availability</a><a href="#booking-form" class="btn booking-secondary">Book a stay</a></div>';
  contactSection.insertAdjacentElement('beforebegin',cta);
}

const bookingStyle=document.createElement('style');
bookingStyle.textContent='.nav-booking-cta{background:var(--accent)!important;color:#08344c!important;padding:10px 17px;border-radius:999px;box-shadow:0 8px 20px rgba(62,165,217,.24);font-weight:800}.nav-booking-cta:hover{transform:translateY(-1px);color:#08344c!important}.booking-banner{max-width:1120px;margin:40px auto 20px;padding:38px 42px;border-radius:30px;background:linear-gradient(135deg,#17334a,#235b78);color:#fff;display:flex;align-items:center;justify-content:space-between;gap:40px;box-shadow:0 22px 55px rgba(23,51,74,.22)}.booking-banner .eyebrow{color:#8edbff}.booking-banner h2{font-family:Georgia,serif;font-size:clamp(31px,4vw,46px);line-height:1.12;margin:0 0 10px;color:#fff}.booking-banner p:last-child{margin:0;color:#dbeaf2;max-width:660px}.booking-banner-actions{display:flex;gap:12px;flex-shrink:0}.booking-main{background:#6ac7f4;color:#082f45;box-shadow:0 12px 28px rgba(79,183,234,.3)}.booking-secondary{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.55)}.booking-options{display:grid;gap:10px;margin-top:18px}.booking-option{display:grid;grid-template-columns:38px 1fr;grid-template-rows:auto auto;column-gap:11px;align-items:center;padding:14px 16px;border-radius:17px;border:1px solid var(--line);background:#fff;transition:.2s}.booking-option:hover{transform:translateY(-2px);box-shadow:0 10px 26px rgba(31,80,106,.1)}.booking-option>span{grid-row:1/3;width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:var(--blue2);font-size:18px}.booking-option strong{font-size:14px;line-height:1.2}.booking-option small{display:block!important;text-align:left!important;font-size:11px;color:var(--muted);margin-top:3px}.telegram-book>span{color:#229ed9}.instagram-book>span{color:#c62f74}.email-book>span{color:var(--accent2)}@media(max-width:1050px){.site-header nav{gap:12px;font-size:13px}.nav-booking-cta{padding:9px 12px}}@media(max-width:850px){.nav-booking-cta{background:var(--accent)!important;text-align:center}.booking-banner{margin:28px 18px 10px;padding:30px;flex-direction:column;align-items:flex-start}.booking-banner-actions{width:100%}.booking-banner-actions .btn{flex:1}}@media(max-width:520px){.booking-banner{padding:26px 22px;border-radius:24px}.booking-banner-actions{flex-direction:column}.booking-banner-actions .btn{width:100%}}';
document.head.appendChild(bookingStyle);

/* Short booking request form */
if(contactSection && !document.querySelector('#booking-form')){
  const formSection=document.createElement('section');
  formSection.id='booking-form';
  formSection.className='section booking-form-section';
  formSection.innerHTML='<div class="section-head"><p class="eyebrow">BOOKING REQUEST</p><h2>Tell us about your pet</h2><p>Fill in the essentials and send your request. We’ll reply with availability and pricing.</p></div><form class="pet-booking-form"><div class="form-grid"><label><span>Pet’s name *</span><input name="petName" type="text" placeholder="e.g. Luna" required></label><label><span>Pet type *</span><select name="petType" required><option value="">Choose</option><option>Dog</option><option>Cat</option></select></label><label><span>Age *</span><input name="age" type="text" placeholder="e.g. 3 years" required></label><label><span>Breed / type</span><input name="breed" type="text" placeholder="Optional"></label><label><span>Check-in *</span><input name="checkIn" type="date" required></label><label><span>Check-out *</span><input name="checkOut" type="date" required></label><label class="full"><span>Special care, medication or anything we should know</span><textarea name="specialCare" rows="4" placeholder="Temperament, feeding routine, medication, anxiety, habits, etc."></textarea></label><label><span>Your name *</span><input name="ownerName" type="text" required></label><label><span>Best contact *</span><input name="contact" type="text" placeholder="Telegram, Instagram, email or phone" required></label></div><label class="form-consent"><input name="vaccinated" type="checkbox"><span>My pet has up-to-date vaccinations and recent parasite/deworming treatment.</span></label><div class="form-actions"><button class="btn primary form-submit" type="submit">Send booking request</button><button class="btn secondary copy-request" type="button">Copy request</button></div><p class="form-note">Submitting opens your email app with the request already filled in. You can also copy it and send it through Telegram or Instagram.</p></form>';
  const banner=document.querySelector('.booking-banner');
  if(banner) banner.insertAdjacentElement('beforebegin',formSection); else contactSection.insertAdjacentElement('beforebegin',formSection);

  const form=formSection.querySelector('.pet-booking-form');
  const buildRequest=()=>{
    const data=new FormData(form);
    return 'Pet House booking request\n\nPet name: '+(data.get('petName')||'')+'\nPet type: '+(data.get('petType')||'')+'\nAge: '+(data.get('age')||'')+'\nBreed/type: '+(data.get('breed')||'Not specified')+'\nCheck-in: '+(data.get('checkIn')||'')+'\nCheck-out: '+(data.get('checkOut')||'')+'\nSpecial care: '+(data.get('specialCare')||'None specified')+'\n\nOwner name: '+(data.get('ownerName')||'')+'\nBest contact: '+(data.get('contact')||'')+'\nVaccinations/parasite treatment confirmed: '+(data.get('vaccinated')?'Yes':'Not confirmed');
  };
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(!form.reportValidity()) return;
    const subject='Pet House booking request — '+form.elements.petName.value;
    window.location.href='mailto:contact.veronika.inbox@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(buildRequest());
  });
  formSection.querySelector('.copy-request').addEventListener('click',async(e)=>{
    if(!form.reportValidity()) return;
    try{await navigator.clipboard.writeText(buildRequest());e.currentTarget.textContent='Copied ✓';setTimeout(()=>e.currentTarget.textContent='Copy request',1800);}catch(err){alert('Please copy the form details manually.');}
  });

  const formStyle=document.createElement('style');
  formStyle.textContent='.booking-form-section{padding-top:80px;padding-bottom:80px}.pet-booking-form{max-width:920px;margin:0 auto;padding:34px;border:1px solid var(--line);border-radius:28px;background:linear-gradient(145deg,#fff,#f6fbff);box-shadow:var(--shadow)}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.form-grid label{display:flex;flex-direction:column;gap:7px}.form-grid label.full{grid-column:1/3}.form-grid label>span,.form-consent span{font-weight:750;font-size:13px;color:var(--ink)}.pet-booking-form input,.pet-booking-form select,.pet-booking-form textarea{width:100%;border:1px solid #cfe0e9;border-radius:14px;background:#fff;color:var(--ink);font:inherit;padding:13px 14px;outline:none;transition:.2s}.pet-booking-form textarea{resize:vertical;min-height:110px}.pet-booking-form input:focus,.pet-booking-form select:focus,.pet-booking-form textarea:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(89,185,233,.13)}.form-consent{display:flex;align-items:flex-start;gap:10px;margin:20px 2px}.form-consent input{width:18px;height:18px;margin-top:2px;flex:0 0 auto}.form-actions{display:flex;gap:12px;margin-top:20px}.form-actions .btn{border:0;cursor:pointer;font:inherit}.form-note{font-size:12px;color:var(--muted);margin:14px 0 0}.copy-request{background:#fff}@media(max-width:650px){.pet-booking-form{padding:24px 18px}.form-grid{grid-template-columns:1fr}.form-grid label.full{grid-column:auto}.form-actions{flex-direction:column}.form-actions .btn{width:100%}}';
  document.head.appendChild(formStyle);
}

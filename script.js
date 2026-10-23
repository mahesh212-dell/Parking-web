// 1. Configuration shared by contact links and contact actions.
const CONFIG = { justdialUrl: 'https://www.justdial.com/Mumbai/MANGAL-VALET-PARKING-Worli/022PXX22-XX22-260713163524-F9N9_BZDET?via=scode', address: '110-23-29, Ground Floor, Bharat Nagar, Lala Lajpatrai Marg, Worli, Race Course, Godrej, Worli, Mumbai 400018, Maharashtra' };
const SERVICE_LINKS = [
  { id: 'valet-driver', label: 'Valet Driver Services' },
  { id: 'bouncer', label: 'Professional Bouncer Services' },
  { id: 'security-guard', label: 'Security Guard Services' },
  { id: 'parking-management', label: 'Smart Parking Management' }
];
const VALET_LINKS = [{ id: 'remote-shuttles', label: 'Remote Shuttles' }, { id: 'security-guard', label: 'Security Guard' }, { id: 'taxi-service', label: 'Taxi Service' }, { id: 'shopping-mall', label: 'Shopping Mall' }, { id: 'all-private-parties', label: 'Private Parties' }, { id: 'hospital', label: 'Hospital' }, { id: 'restaurant', label: 'Restaurant' }, { id: 'membership-club', label: 'Membership Club' }, { id: 'hotels', label: 'Hotels' }, { id: 'school', label: 'School' }, { id: 'birthday-party', label: 'Birthday Party' }, { id: 'event-management', label: 'Event Management' }];

function renderSiteNavigation() {
  const header = document.querySelector('header');
  if (!header) return;
  const menuItems = items => items.map(item => `<a href="${item.href}" class="nav-menu-link">${item.label}</a>`).join('');
  const listingLink = `<a class="nav-listing" href="${CONFIG.justdialUrl}" target="_blank" rel="noopener"><i class="fa-solid fa-address-card"></i> Justdial Listing</a>`;
  const serviceLinks = `<a href="services.html">All Services</a><a href="service-detail660a.html">Valet Driver Services</a><a href="service-detail2c08.html">Security Guard Services</a><a href="service-detail8b88.html">Parking Management</a>`;
  const valetLinks = `<a href="services.html#valet-driver">Valet Parking</a><a href="services.html#security-guard">Security Support</a><a href="services.html#parking-management">Venue Parking</a>`;
  header.innerHTML = `<nav class="site-nav" aria-label="Main navigation"><a href="index.html" class="site-brand"><span class="site-mark">MV</span><span><strong>Mangal Valet</strong><small>Parking</small></span></a><div class="desktop-nav"><a href="index.html">Home</a><a href="index-2.html">About Us</a><details class="nav-dropdown"><summary>Services</summary><div class="nav-dropdown-panel"><b>Our Services</b>${serviceLinks}</div></details><details class="nav-dropdown"><summary>Valet Parking</summary><div class="nav-dropdown-panel"><b>Valet Solutions</b>${valetLinks}</div></details><a href="index.html#business-details">Our Network</a><a href="gallery.html">Gallery</a><a href="contact.html">Contact</a></div><div class="desktop-actions">${listingLink}</div><button id="menu-button" class="menu-button" aria-label="Open menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button></nav><div id="mobile-panel" class="mobile-panel"><div class="mobile-nav"><a href="index.html">Home</a><a href="index-2.html">About Us</a><details><summary>Services</summary>${serviceLinks}</details><details><summary>Valet Parking</summary>${valetLinks}</details><a href="index.html#business-details">Our Network</a><a href="gallery.html">Gallery</a><a href="contact.html">Contact</a><div class="mobile-actions">${listingLink}</div></div></div>`;
  if (!document.getElementById('floating-actions')) document.body.insertAdjacentHTML('beforeend', `<div id="floating-actions"><a href="${CONFIG.justdialUrl}" target="_blank" rel="noopener" aria-label="View Mangal Valet Parking on Justdial"><i class="fa-solid fa-address-card"></i></a></div>`);
}

function rewriteDistinctPageCopy() {
  const path = window.location.pathname;
  if (path.endsWith('/about.html')) {
    const heading = document.querySelector('main h1');
    if (heading) heading.textContent = 'The team behind a well-run venue entrance.';
    const intro = document.querySelector('main h1 + p');
    if (intro) intro.textContent = 'Mangal Valet Parking takes care of the practical work outside your venue, so hosts and venue teams can stay focused on the people inside.';
    document.querySelectorAll('main article h2')[0]?.replaceChildren('Before the gates open');
    document.querySelectorAll('main article p')[0]?.replaceChildren('We map entrances, vehicle movement, staffing needs, and the busy moments before the first guest arrives.');
    document.querySelectorAll('main article h2')[1]?.replaceChildren('The people on the ground');
    document.querySelectorAll('main article p')[1]?.replaceChildren('Attendants are briefed for the assignment and guided by a lead who keeps decisions moving during service.');
    document.querySelectorAll('main article h2')[2]?.replaceChildren('What you can expect');
    document.querySelectorAll('main article p')[2]?.replaceChildren('Orderly handovers, respectful communication, and careful attention to every vehicle under our care.');
  }
  if (path.endsWith('/faq.html')) {
    const heading = document.querySelector('main h1');
    if (heading) heading.textContent = 'Planning the parking side of your event.';
    const intro = document.querySelector('main h1 + p');
    if (intro) intro.textContent = 'Here are the answers to the things venue managers and hosts usually ask us first.';
    const answers = [['When should I get in touch?', 'Send your date and venue details once they are fixed. Earlier notice gives us more room to arrange the right team, though we still check last-minute requests.'], ['Which types of places do you cover?', 'We work with hotels, hospitals, restaurants, malls, schools, clubs, private homes, and event venues on either regular or one-off assignments.'], ['What do you plan before the event?', 'We look at the entrance, peak timings, attendant positions, keys, signage, vehicle holding space, and how departures will be handled.']];
    document.querySelectorAll('main details').forEach((detail, index) => { if (answers[index]) { detail.querySelector('summary').textContent = answers[index][0]; detail.querySelector('p').textContent = answers[index][1]; } });
  }
  if (path.endsWith('/service-detail.html')) {
    const labels = [['A briefed crew', 'The people assigned to your booking know the location, timing, and responsibility expected of them.'], ['Practical coordination', 'We organize the small operational steps that keep your event moving without confusion.'], ['A clear contact', 'One lead stays available for updates, questions, and on-the-day decisions.']];
    document.querySelectorAll('main article').forEach((article, index) => { if (labels[index]) { article.querySelector('h2').textContent = labels[index][0]; article.querySelector('p').textContent = labels[index][1]; } });
  }
  if (path.endsWith('/valet-parking.html')) {
    const heading = document.querySelector('main section:nth-child(2) h2');
    if (heading) heading.textContent = 'Your entrance, properly organized.';
    const labels = [['A clear welcome point', 'Guests know where to stop, who to speak to, and what happens to their vehicle next.'], ['Fewer moving parts', 'The team accounts for staffing, keys, vehicle movement, and the busiest part of the schedule.'], ['The right level of cover', 'Book support for one occasion, a recurring venue shift, or a larger event-services requirement.']];
    document.querySelectorAll('main section:nth-child(2) article').forEach((article, index) => { if (labels[index]) { article.querySelector('h3').textContent = labels[index][0]; article.querySelector('p').textContent = labels[index][1]; } });
  }
}

// 2. Use the existing icon stylesheet for the few homepage icons.
function initializeInterfaceIcons() {
  const icons = {
    menu: 'fa-bars',
    'arrow-up-right': 'fa-arrow-up-right-from-square',
    sparkles: 'fa-wand-magic-sparkles',
    'heart-handshake': 'fa-handshake',
    'briefcase-business': 'fa-briefcase',
    'building-2': 'fa-building',
    'party-popper': 'fa-champagne-glasses',
    'shield-check': 'fa-shield-halved',
    'car-front': 'fa-car',
    'scan-line': 'fa-qrcode',
    'arrow-right': 'fa-arrow-right',
    'map-pin': 'fa-location-dot',
    'circle-check': 'fa-circle-check'
  };
  document.querySelectorAll('[data-lucide]').forEach(icon => {
    const iconClass = icons[icon.dataset.lucide];
    if (!iconClass) return;
    icon.classList.add('fa-solid', iconClass);
    icon.removeAttribute('data-lucide');
  });
}

renderSiteNavigation();
rewriteDistinctPageCopy();
initializeInterfaceIcons();

/** Toggle the responsive navigation panel and its menu icon. */
function toggleMobileMenu() { const panel = document.getElementById('mobile-panel'); const button = document.getElementById('menu-button'); if (!panel || !button) return; const isOpen = panel.classList.toggle('open'); button.setAttribute('aria-expanded', String(isOpen)); button.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu'); button.innerHTML = `<i class="fa-solid fa-${isOpen ? 'xmark' : 'bars'}"></i>`; }

/** Apply the compact opaque navbar treatment after the user scrolls. */
function updateNavbarOnScroll() { document.querySelector('header')?.classList.toggle('nav-scrolled', window.scrollY > 24); }

/** Close the mobile menu when a navigation destination is selected. */
function closeMobileMenuOnLinkClick() { const closeMenu = () => { const panel = document.getElementById('mobile-panel'); const button = document.getElementById('menu-button'); panel?.classList.remove('open'); button?.setAttribute('aria-expanded', 'false'); button?.setAttribute('aria-label', 'Open menu'); if (button) button.innerHTML = '<i class="fa-solid fa-bars"></i>'; }; document.querySelectorAll('#mobile-panel a').forEach(link => link.addEventListener('click', closeMenu)); document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); }); }

/** Observe reveal elements and add their visible state as they enter the viewport. */
function initializeScrollReveals() { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 }); document.querySelectorAll('.reveal-on-scroll').forEach(element => observer.observe(element)); }

/** Animate a numeric statistic from zero to its target value. @param {HTMLElement} element @param {number} target @param {number} duration */
function animateCounter(element, target, duration = 1300) { const started = performance.now(); const suffix = element.dataset.suffix || ''; function tick(now) { const progress = Math.min((now - started) / duration, 1); const eased = 1 - Math.pow(1 - progress, 3); const value = suffix === '/5' ? (target * eased).toFixed(1) : Math.floor(target * eased); element.textContent = `${value}${suffix}`; if (progress < 1) requestAnimationFrame(tick); } requestAnimationFrame(tick); }

/** Start each hero counter once when the statistics row becomes visible. */
function initializeStatsCounters() { const stats = document.querySelectorAll('.stat-number'); const rating = [...stats].find(stat => stat.dataset.suffix === '/5'); if (rating) rating.dataset.target = '5'; const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { animateCounter(entry.target, Number(entry.target.dataset.target)); observer.unobserve(entry.target); } }), { threshold: .7 }); stats.forEach(stat => observer.observe(stat)); }







/** Validate the booking form and submit it to Netlify Forms. @param {SubmitEvent} event */
async function validateForm(event) {
  event.preventDefault();
  const rules = [{ id: 'full-name', message: 'Please enter your name.' }, { id: 'email', message: 'Please enter a valid email.', valid: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) }, { id: 'phone', message: 'Please enter at least 7 digits.', valid: value => value.replace(/\D/g, '').length >= 7 }];
  let valid = true;
  rules.forEach(rule => { const field = document.getElementById(rule.id); const error = field.parentElement.querySelector('.field-error'); const passes = field.value.trim() !== '' && (!rule.valid || rule.valid(field.value.trim())); field.classList.toggle('input-error', !passes); error.textContent = passes ? '' : rule.message; error.classList.toggle('hidden', passes); if (!passes) valid = false; });
  if (!valid) return;

  const form = document.getElementById('booking-form');
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  try {
    const formData = new FormData(form);
    const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(formData).toString() });
    if (!response.ok) throw new Error('Netlify form submission failed');
    form.classList.add('hidden');
    document.getElementById('form-success').classList.remove('hidden');
    initializeInterfaceIcons();
  } catch (error) {
    submitButton.disabled = false;
    submitButton.textContent = 'Request Availability';
    window.alert('We could not send your inquiry. Please try again or contact us directly.');
  }
}

/** Insert the current year into the footer copyright line. */
function injectFooterYear() { const year = document.getElementById('current-year'); if (year) year.textContent = new Date().getFullYear(); }

/** Replace legacy contact links with the verified Justdial listing. */
function updateContactDetails() { document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]').forEach(link => { link.href = CONFIG.justdialUrl; link.target = '_blank'; link.rel = 'noopener'; if (!link.querySelector('i')) link.textContent = 'Contact on Justdial'; }); document.querySelectorAll('body *').forEach(element => { if (element.children.length === 0 && /093242\s*53964|pankajsheeja@gmail\.com|Ruia Park|Mora Gaon|Juhu, Mumbai/i.test(element.textContent)) element.textContent = element.textContent.replace(/093242\s*53964|pankajsheeja@gmail\.com/gi, 'Contact on Justdial').replace(/Ruia Park, Military Camp Road,\s*Mora Gaon,\s*Juhu, Mumbai,?\s*Maharashtra 400058/gi, CONFIG.address); }); }

/** Render polished testimonial placeholders without misrepresenting them as Google reviews. */
function initializeTestimonials() { const reviewGrid = document.querySelector('#reviews .grid'); if (!reviewGrid) return; if (reviewGrid.children.length > 0) return; const testimonials = [{ quote: 'The arrival flow was calm, organized, and beautifully managed from start to finish.', role: 'Wedding host' }, { quote: 'The team made a strong first impression and kept every guest moving comfortably.', role: 'Corporate event manager' }, { quote: 'Professional attendants, clear communication, and a service standard our guests noticed.', role: 'Hospitality partner' }, { quote: 'Mangal Valet Parking took one more responsibility off our plate and handled it perfectly.', role: 'Private event host' }, { quote: 'Reliable, courteous, and attentive to every detail at the venue entrance.', role: 'Event coordinator' }]; reviewGrid.className = 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3'; reviewGrid.innerHTML = testimonials.map(item => `<blockquote class="reveal-on-scroll rounded-2xl border border-white/10 bg-white/5 p-6"><div class="mb-5 text-amber-300"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div><p class="text-lg leading-8 text-slate-200">"${item.quote}"</p><footer class="mt-6 text-sm font-semibold text-slate-400">${item.role}</footer></blockquote>`).join(''); initializeScrollReveals(); }

/** Replace the contact map placeholder with the supplied Google Maps embed. */
function initializeMapEmbed() { const mapContainer = document.querySelector('#contact .min-h-44'); if (mapContainer) { const isMangalHome = document.body.classList.contains('home-premium'); const address = isMangalHome ? '110-23-29, Ground Floor, Bharat Nagar, Lala Lajpatrai Marg, Worli, Mumbai 400018' : CONFIG.address; const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`; mapContainer.className = 'map-container overflow-hidden rounded-3xl border border-white/10'; mapContainer.innerHTML = `<iframe src="${mapUrl}" title="${isMangalHome ? 'Mangal Valet Parking address in Worli, Mumbai' : 'Business address'}" class="h-72 w-full border-0 sm:h-80" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>`; } }

/** Make each homepage service card open the matching detailed service section. */
function injectFloatingQuickActions() {
  if (document.getElementById('floating-actions')) return;

  const actions = document.createElement('div');
  actions.id = 'floating-actions';
  actions.className = 'floating-actions';
  actions.setAttribute('aria-label', 'Quick contact actions');
  actions.innerHTML = `<a href="${CONFIG.justdialUrl}" target="_blank" rel="noopener" aria-label="View Mangal Valet Parking on Justdial"><i class="fa-solid fa-address-card"></i></a>`;
  document.body.appendChild(actions);
}

document.getElementById('menu-button')?.addEventListener('click', toggleMobileMenu); window.addEventListener('scroll', updateNavbarOnScroll, { passive: true }); document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => { const target = document.querySelector(link.getAttribute('href')); if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); } })); closeMobileMenuOnLinkClick(); initializeScrollReveals(); initializeStatsCounters(); if (!document.body.classList.contains('home-premium')) initializeTestimonials(); document.getElementById('booking-form')?.addEventListener('submit', validateForm); injectFooterYear(); updateContactDetails(); initializeMapEmbed(); updateNavbarOnScroll(); injectFloatingQuickActions();

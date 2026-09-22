// Content and navigation also work without JavaScript.
const year = document.getElementById('copyright-year');
if (year) year.textContent = new Date().getFullYear();

const navigationLinks = [...document.querySelectorAll('nav a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const visibleSections = new Set();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) visibleSections.add(entry.target.id);
      else visibleSections.delete(entry.target.id);
    }
    const active = navigationLinks.find((link) => visibleSections.has(link.hash.slice(1)));
    for (const link of navigationLinks) {
      if (link === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }, { rootMargin: '-10% 0px -35% 0px' });
  for (const link of navigationLinks) {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  }
}

// Preserve existing analytics; exclude local previews from traffic reports.
if (['krishnamullia.com', 'www.krishnamullia.com'].includes(window.location.hostname)) {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-N7CX5RREYT');
  const googleTag = document.createElement('script');
  googleTag.async = true;
  googleTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-N7CX5RREYT';
  document.head.append(googleTag);
  const cloudflare = document.createElement('script');
  cloudflare.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  cloudflare.dataset.cfBeacon = JSON.stringify({ token: '01ae7dbafade4066b5e22209ab1703c0' });
  cloudflare.defer = true;
  document.body.append(cloudflare);
}

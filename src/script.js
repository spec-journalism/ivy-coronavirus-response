import './scripts/scrollcolumbia.js';
import './scripts/page.js';
import './scripts/scrolly';
import './scripts/page';
import { COUNTRY_COLORS } from './scripts/constants';

// Fade in navbar at scroll trigger

const navbar = document.getElementById('navbar');

if (USE_COVER_HED || USE_EYE_NAV) {
  enterView({
    selector: USE_COVER_HED ? '.headline' : '.step-deck',
    offset: USE_COVER_HED ? 1 : 0.957,
    enter: () => {
      navbar.classList.remove('only-logo');
    },
    exit: () => {
      navbar.classList.remove('show-nav-links');
      navbar.classList.add('only-logo');
    },
  });
}

// Mobile navbar hamburger trigger

export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}




textBalancer.balanceText('.headline, .deck, .image-overlay .image-caption-text');

// textBalancer.balanceText('.headline, .deck, .image-overlay .image-caption-text');

// Highlights all country names <c></c>

[].forEach.call(document.getElementsByTagName('c'), el => {
  const color = COUNTRY_COLORS[el.innerText];
  if (color) {
    el.classList.add('country-name-highlight');
    el.style.backgroundColor = color;
  }
})

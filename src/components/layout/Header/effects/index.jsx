import { useEffect } from 'react';

const scrollEffect = () => useEffect(() => {
  const headerNav = document.querySelector('#header');
  const logoHeader = document.querySelector('.logo-header');

  document.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll > 65) {
      headerNav.classList.add('header-fixed');
      logoHeader.classList.add('w');
    } else {
      headerNav.classList.remove('header-fixed');
      logoHeader.classList.remove('w');
    }
  });
}, []);

export default scrollEffect;

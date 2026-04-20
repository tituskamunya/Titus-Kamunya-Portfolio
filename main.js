/*
  main.js — Titus Kamunya Portfolio
  Handles scroll animations and contact form validation.
*/


/* SCROLL-TRIGGERED FADE-IN ANIMATIONS
   Watches .fade-in elements and adds the "visible" class
   when they enter the viewport, triggering a CSS transition. */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));


/* CONTACT FORM VALIDATION
   Checks all fields are filled before confirming submission.
   Note: to actually send emails, integrate Formspree or Netlify Forms. */
const contactBtn = document.querySelector('.contact-right .btn-primary');

if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    const name    = document.querySelector('input[type="text"]').value.trim();
    const email   = document.querySelector('input[type="email"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    alert(`Thanks for reaching out, ${name}! I'll get back to you at ${email} soon.`);
  });
}

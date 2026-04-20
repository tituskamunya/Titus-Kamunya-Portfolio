// Scroll-triggered fade-in animations
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

// Contact form submission handler
const contactBtn = document.querySelector('.contact-right .btn-primary');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    alert(`Thanks for reaching out, ${name}! I'll get back to you at ${email} soon.`);
  });
}

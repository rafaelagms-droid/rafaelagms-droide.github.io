// script.js - Interatividade para Portfolio Rafaela Gomes
console.log('Portfolio Rafaela rodando!');

// Smooth scroll para links internos
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animação fade-in on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

// Observa elementos com data-animate
document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});

// Validação simples do formulário de contato
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name && email && message) {
      alert('Mensagem enviada! (Simulação - integre com EmailJS/Formspree depois)');
      this.reset();
    } else {
      alert('Preencha todos os campos!');
    }
  });
}


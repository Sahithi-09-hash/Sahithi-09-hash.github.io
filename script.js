const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById('search').addEventListener('focus', () => {
  document.getElementById('search').value = '';
});

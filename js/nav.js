// Mobile nav toggle — used on every page that has the hamburger button.
function toggleNav() {
  const nav = document.getElementById('primary-nav');
  const btn = document.querySelector('.nav-toggle');
  const isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
  btn.querySelector('i').className = isOpen ? 'ph ph-x' : 'ph ph-list';
}
document.querySelectorAll('#primary-nav a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('primary-nav');
    if (nav.classList.contains('open')) toggleNav();
  });
});

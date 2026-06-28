fetch('nav.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('navbar').innerHTML = html;
    highlightCurrentPage();
  });

fetch('footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });

function highlightCurrentPage() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#navbar .nav-link').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}
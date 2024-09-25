document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', event => {
      const content = item.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
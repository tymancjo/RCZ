function openLightbox(imgEl) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgEl.getAttribute('data-full') || imgEl.src;
  lightbox.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

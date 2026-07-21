var lightboxImages = [];
var lightboxIndex = 0;

function openLightbox(imgEl) {
  lightboxImages = Array.prototype.slice.call(
    document.querySelectorAll('.entry-photo, .gallery-grid img')
  );
  lightboxIndex = lightboxImages.indexOf(imgEl);
  var lightbox = document.getElementById('lightbox');
  lightbox.classList.add('open');
  showLightboxAt(lightboxIndex);
}

function showLightboxAt(index) {
  if (lightboxImages.length === 0) return;
  lightboxIndex = (index + lightboxImages.length) % lightboxImages.length;
  var imgEl = lightboxImages[lightboxIndex];
  var lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgEl.getAttribute('data-full') || imgEl.src;
}

function lightboxPrev() {
  showLightboxAt(lightboxIndex - 1);
}

function lightboxNext() {
  showLightboxAt(lightboxIndex + 1);
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

window.addEventListener('keydown', function (e) {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxPrev();
  if (e.key === 'ArrowRight') lightboxNext();
});

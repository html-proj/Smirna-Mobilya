// Başaya Dön Butonu
let backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Butonu göster
    } else {
        backToTopButton.style.display = "none"; // Butonu gizle
    }
};
// Resimlere tıklama olayı
const galleryItems = document.querySelectorAll('.product-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Şu anki resmin sırasını takip eden değişken
let currentImageIndex = 0;

// Lightbox içinde resmi gösterme
function showImage(index) {
    currentImageIndex = index; // İlgili resmi göster
    lightboxImage.src = galleryItems[currentImageIndex].src;
    lightbox.style.display = 'flex';
}

// Tıklanan resme göre lightbox'ı aç ve o resmi göster
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showImage(index); // Tıklanan resim ile lightbox'ı aç
    });
});

// İleri ve geri butonları
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length; // Son resimde başa dön
    showImage(currentImageIndex);
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length; // İlk resimde sona dön
    showImage(currentImageIndex);
});

// Lightbox'ı kapatma
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Lightbox dışına tıklandığında kapatma
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});



// Butona tıklandığında sayfayı yukarı kaydır
backToTopButton.onclick = function() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Diğer tarayıcılar
};

// Menü açma/kapama işlevselliği
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    // Menü görünürlüğünü toggle yapıyoruz
    menu.classList.toggle('menu-hidden');
});


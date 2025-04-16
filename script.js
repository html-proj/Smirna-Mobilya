/*/ Başaya Dön Butonu
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




// Menü Toggle (Açma/Kapama) Fonksiyonu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}
*/
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
        galleryItems.forEach((img) => img.style.display = 'none');
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
    galleryItems.forEach((img) => img.style.display = 'block');
});

// Lightbox dışına tıklandığında kapatma
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        // Küçük resimleri tekrar gösterelim
        galleryItems.forEach((img) => img.style.display = 'block');
    }
});

// Butona tıklandığında sayfayı yukarı kaydır
backToTopButton.onclick = function() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Diğer tarayıcılar
};

// Menü Toggle (Açma/Kapama) Fonksiyonu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

// Mobil İçin Kaydırma (Touch Event)
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

lightbox.addEventListener('touchmove', (e) => {
    touchEndX = e.touches[0].clientX;
});

lightbox.addEventListener('touchend', () => {
    if (touchStartX - touchEndX > 50) {
        // Sağdan sola kaydırıldığında
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        showImage(currentImageIndex);
    } else if (touchEndX - touchStartX > 50) {
        // Soldan sağa kaydırıldığında
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        showImage(currentImageIndex);
    }
});

// Bilgisayar için klavye ile ileri ve geri gitme
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            // Sağ ok veya aşağı ok tuşuna basıldığında
            currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
            showImage(currentImageIndex);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            // Sol ok veya yukarı ok tuşuna basıldığında
            currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
            showImage(currentImageIndex);
        }
    }
});
function copyToClipboard(text) {
    // Geçici bir input oluşturup, metni kopyalamak için kullanacağız
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Kopyalandı: " + text);
}
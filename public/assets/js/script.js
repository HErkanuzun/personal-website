// Tüm dropdown öğelerini seçiyoruz
const dropdowns = document.querySelectorAll('.dropdown');

// Her bir dropdown'a tıklama olayını dinliyoruz
dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector('a');
  trigger.addEventListener('click', function(event) {
    event.preventDefault(); // Sayfa yönlenmesini engeller
    
    // Diğer açık dropdown'ları kapat
    dropdowns.forEach(otherDropdown => {
      if (otherDropdown !== dropdown) {
        otherDropdown.querySelector('.dropdown-menu').style.display = 'none';
      }
    });

    // Mevcut dropdown'un görünürlüğünü değiştir
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });
});

// Sayfanın herhangi bir yerine tıklayınca menüyü kapatma
document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown')) {
    dropdowns.forEach(dropdown => {
      dropdown.querySelector('.dropdown-menu').style.display = 'none';
    });
  }
});

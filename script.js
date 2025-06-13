document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.querySelector('.hamburger');
    const nav_list = this.documentElement.querySelector('.nav-list')

    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('active');
        nav_list.classList.toggle('active');
    });

    const nav_links = document.querySelectorAll('.nav-list a');
    nav_links.forEach(link =>{
        link.addEventListener('click', function(){
            if(window.innerWidth <= 768){
                hamburger.classList.remove('active');
                nav_links.classList.remove('active');
            }
        });
    });
});

// SCROLL COM BOTÕES
document.querySelectorAll('.scroll-btn').forEach(button => {
  button.addEventListener('click', () => {
    const container = document.querySelector(button.dataset.target);
    const direction = parseInt(button.dataset.direction);
    const scrollAmount = 300; // Ajuste conforme o tamanho do seu card

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  });
});

// SCROLL COM TOQUE (SWIPE) PARA MOBILE
document.querySelectorAll('.cards-servicos').forEach(container => {
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Aumente se quiser que deslize mais rápido
    container.scrollLeft = scrollLeft - walk;
  });

  container.addEventListener('touchend', () => {
    isDown = false;
  });

  container.addEventListener('touchcancel', () => {
    isDown = false;
  });
});

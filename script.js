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


document.querySelectorAll('.scroll-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetSelector = button.getAttribute('data-target');
        const direction = parseInt(button.getAttribute('data-direction'), 10);
        const container = document.querySelector(targetSelector);

        if (container) {
            container.scrollBy({
                left: 320 * direction,
                behavior: 'smooth'
            });
        }
    });
});

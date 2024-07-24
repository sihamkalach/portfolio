    // Sélectionner le lien et la liste
    const profileLink = document.getElementById('profile-link');
    const profileMenu = document.getElementById('profile-menu');
    
    // Ajouter un écouteur d'événement au clic sur le lien
    document.getElementById('profile-link').addEventListener('click', function(e) {
        e.preventDefault(); // Empêcher le comportement par défaut du lien
        
        const profile = document.querySelector('.profile');
        const profileMenu = document.getElementById('profile-menu');
        
        // Vérifier la largeur de l'écran
        if (window.innerWidth <= 750) {
            profile.classList.toggle('active'); // Ajouter ou retirer la classe 'active' sur .profile
            profileMenu.style.display = profile.classList.contains('active') ? 'block' : 'none';
        }
    });

    // scripts.js

// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    function setupToggleImages(containerSelector, toggleSelector) {
        const images = document.querySelectorAll(containerSelector + ' .project-image');
        let currentIndex = 0;

        // Show the first image by default
        if (images.length > 0) {
            images[currentIndex].classList.add('active');
        }

        document.querySelector(toggleSelector).addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            if (images.length > 0) {
                // Hide the current image
                images[currentIndex].classList.remove('active');
                // Calculate the index of the next image
                currentIndex = (currentIndex + 1) % images.length;
                // Show the next image
                images[currentIndex].classList.add('active');
            }
        });
    }

    setupToggleImages('.card-details', '#toggle-images-1');
    setupToggleImages('.card-details', '#toggle-images-2');
});


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
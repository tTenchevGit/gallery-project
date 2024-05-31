document.addEventListener("DOMContentLoaded", function() {
    let rotation = 0;

    function rotatePhoto() {
        rotation += 180;
        document.querySelector(".owner-photo").style.transform = `rotateY(${rotation}deg)`;
    }

    setInterval(rotatePhoto, 5000);

    window.addEventListener("scroll", function() {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            if (window.scrollY > section.offsetTop - window.innerHeight / 2) {
                section.classList.remove("hidden");
            }
        });
    });
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}


// modal
// let slideIndex = 0;

// function openModal(modalId) {
//     document.getElementById(modalId).style.display = "block";
//     showSlides(slideIndex, modalId);
// }

// function closeModal(modalId) {
//     document.getElementById(modalId).style.display = "none";
// }

// function changeSlide(n, modalId) {
//     showSlides(slideIndex += n, modalId);
// }

// function showSlides(n, modalId) {
//     let slides = document.querySelectorAll(`#${modalId} .modal-content img`);
//     if (n >= slides.length) { slideIndex = 0 }
//     if (n < 0) { slideIndex = slides.length - 1 }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     slides[slideIndex].style.display = "block"; 
// }

// document.addEventListener("DOMContentLoaded", function() {
//     let rotation = 0;

//     function rotatePhoto() {
//         rotation += 180;
//         document.querySelector(".owner-photo").style.transform = `rotateY(${rotation}deg)`;
//     }

//     setInterval(rotatePhoto, 5000);

//     window.addEventListener("scroll", function() {
//         const sections = document.querySelectorAll("section");
//         sections.forEach(section => {
//             if (window.scrollY > section.offsetTop - window.innerHeight / 2) {
//                 section.classList.remove("hidden");
//             }
//         });
//     });
// });

// function scrollToSection(id) {
//     document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
// }

// function toggleMenu() {
//     const navLinks = document.getElementById('nav-links');
//     navLinks.classList.toggle('show');
// }
let slideIndexes = {};

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    if (!slideIndexes[modalId]) {
        slideIndexes[modalId] = 0;
    }
    showSlides(slideIndexes[modalId], modalId);
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function changeSlide(n, modalId) {
    slideIndexes[modalId] += n;
    showSlides(slideIndexes[modalId], modalId);
}

function showSlides(n, modalId) {
    let slides = document.querySelectorAll(`#${modalId} .modal-content img`);
    if (n >= slides.length) { slideIndexes[modalId] = 0; }
    if (n < 0) { slideIndexes[modalId] = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexes[modalId]].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    let rotation = 0;

    function rotatePhoto() {
        rotation += 180;
        document.querySelector(".owner-photo").style.transform = `rotateY(${rotation}deg)`;
    }

    setInterval(rotatePhoto, 5000);

    window.addEventListener("scroll", function() {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            if (window.scrollY > section.offsetTop - window.innerHeight / 2) {
                section.classList.remove("hidden");
            }
        });
    });
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

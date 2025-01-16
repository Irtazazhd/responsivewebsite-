let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}


var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

// Modal Elements
const signupBtn = document.querySelector('.signup-btn');
const loginBtn = document.querySelector('.login-btn');
const signupModal = document.getElementById('signup-modal');
const loginModal = document.getElementById('login-modal');
const closeSignup = document.getElementById('close-signup');
const closeLogin = document.getElementById('close-login');

// Open the Sign Up Modal
signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
    loginModal.style.display = 'none'; // Hide login modal if open
});

// Open the Login Modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    signupModal.style.display = 'none'; // Hide sign up modal if open
});

// Close Sign Up Modal
closeSignup.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

// Close Login Modal
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close modals if clicking outside them
window.addEventListener('click', (event) => {
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// API Request: Sign Up
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    try {
        const response = await fetch('http://localhost:4000/api/user/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            alert('Sign Up Successful!');
            signupModal.style.display = 'none';
        } else {
            const data = await response.json();
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        alert('Failed to connect to the server.');
    }
});

// API Request: Login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    try {
        const response = await fetch('http://localhost:4000/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const user = await response.json();
            alert(`Welcome, ${user.name}!`);
            loginModal.style.display = 'none';
        } else {
            const data = await response.json();
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        alert('Failed to connect to the server.');
    }
});

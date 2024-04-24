// toogle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    // remove toggle icon and navbar when click navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-content, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.portofolio-box, .service-container', { origin: 'righ' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'IT Staff', 'IT Admin'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// email sending
const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

        function sendEmail() {
            const bodyMessage = `Fullname: ${name.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "agushardiansyah33@gmail.com",
                Password: "741665C0FE5FDC71D7F5DD8AC37893D2509C",
                To: 'agushardiansyah33@gmail.com',
                From: "agushardiansyah33@gmail.com",
                Subject: subject.value,
                Body: bodyMessage
            }).then(
                message => {
                    if (message == "OK") {
                        Swal.fire({
                            title: "Nice..",
                            text: "Message Sent Successfully",
                            icon: "success"
                        });
                    }
                }
            );
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            sendEmail();
        });

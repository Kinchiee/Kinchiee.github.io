/*=============== Active Link =============== */
const linkWOrk = document.querySelectorAll('.category-btn');

function activeWork() {
    linkWOrk.forEach((a) => a.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWOrk.forEach((a) => a.addEventListener('click', activeWork));
/*=============== Mixitup Filter =============== */
let mixerProject = mixitup('.projects-container', {
    selectors: {
        target: '.project-item'
    },
    animation: {
        duration: 300
    }
});
/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
contactName= document.getElementById('contact-name'),
contactEmail= document.getElementById('contact-email'),
Message= document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault()

    if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark')
        contactMessage.textContent = 'Write all the input fields';
    } else {
        emailjs
        .sendForm(
            'service_lzypf1s',
            'template_z318st5',
            '#contact-form',
            'RO6p8YRlLB3M9J87q')
        .then(() => {
            contactMessage.classList.add('color-light');
            contactMessage.textContent= 'Message sent 👌'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
        }, (error) => {
            alert('OOOPS! Something went wrong...', error)
        });
        contactName.value = '';
        contactEmail.value = '';
        Message.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail)

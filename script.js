const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const navItems = document.querySelectorAll('.nav-item');
const eventClick = document.querySelector('.event-click');
const contactClick = document.querySelector('.contact-click');
const aboutClick = document.querySelector('.about-click');
const eventRedirect = document.querySelector('.event-redirect');
const contactRedirect = document.querySelector('.contact-redirect');
const aboutRedirect = document.querySelector('.about-redirect');
const eventResponse = document.querySelector('.event-response');
const eventRequest = document.querySelector('.event-request');
const contactResponse = document.querySelector('.contact-response');
const contactRequest = document.querySelector('.contact-request');
const aboutResponse = document.querySelector('.about-response');
const aboutRequest = document.querySelector('.about-request');
const eventFooterClick = document.querySelector('.event-footer-click');
const contactFooterClick = document.querySelector('.contact-footer-click');
const aboutFooterClick = document.querySelector('.about-footer-click');
const formContainer = document.querySelector('.form-container');
const formBtn = document.querySelector('.form-btn');
const fullNameInput = document.querySelector('.fullname-input');
const emailInput = document.querySelector('.email-input');

function selectNav(e) {
    removeNavBorder()
    this.classList.add('nav-border')
};

function removeNavBorder() {
    navItems.forEach(item => item.classList.remove('nav-border'))
};

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
};

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
};

function selectItem(e) {
    removeBorder()
    removeShow()
    // Add border to current tab
    this.classList.add('tab-border')
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // Add show class
    tabContentItem.classList.add('show')
};

function renderForm() {
    if (fullNameInput.value && emailInput.value) {
        formContainer.innerHTML = `
        <h1>Thanks For Registering, ${fullNameInput.value}</h1>
        <p class="text" style="text-align: center;">Don't forget to check your <a href="https://calendar.google.com/" target="_blank">calendar</a> for future events </p>`
    } else (
        noText()
    )
};

function noText() {
    // render nothing
};

// Listen for tab click
tabItems.forEach(Item => Item.addEventListener("click", selectItem));

// Listen for Nav click
navItems.forEach(Item => Item.addEventListener("click", selectNav));

eventClick.addEventListener("click", function() {
    eventRedirect.click()
});

eventRedirect.addEventListener('click', function() {
    // does nothing
});

eventFooterClick.addEventListener("click", function () {
    eventClick.click()
});

contactClick.addEventListener("click", function () {
    contactRedirect.click()
});

contactRedirect.addEventListener("click", function() {
    // does nothing
});

contactFooterClick.addEventListener("click", function () {
    contactClick.click()
});

aboutClick.addEventListener("click", function () {
    aboutRedirect.click()
});

aboutRedirect.addEventListener("click", function() {
    // does nothing
});

aboutFooterClick.addEventListener("click", function () {
    aboutClick.click()
});


eventRequest.addEventListener('click', function() {
    eventResponse.click()
});

eventResponse.addEventListener('click', function() {
    // empty
});

contactRequest.addEventListener('click', function() {
    contactResponse.click()
});

contactResponse.addEventListener('click', function() {
    // empty
});

aboutRequest.addEventListener('click', function() {
    aboutResponse.click()
});

aboutResponse.addEventListener('click', function() {
    // empty
});

formBtn.addEventListener('click', renderForm);



// Form-script
const labels = document.querySelectorAll('.form-control label');



labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
});

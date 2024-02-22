// JavaScript for toggling side menu
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// JavaScript for tab functionality in the About section
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (const tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (const tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// JavaScript for form submission and feedback message
const scriptURL = 'https://script.google.com/macros/s/AKfycbyD9S1LlGeWNFTg_XrNA-AVW3DRPU285RRoUjt5qd1Oi4Cj0AD5t1AHFLhMeflG-x0deg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

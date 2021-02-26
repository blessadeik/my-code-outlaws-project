//JavaScript Code by Beable


const profiles = [
    {id: 1, first_name: "Blessing", last_name: "Adeika", email: "beable@codeoutlaws.com"},
    {id: 2, first_name: "Favour", last_name: "Adegoke", email: "favour@codeoutlaws.com"},
    {id: 3, first_name: "Faith", last_name: "Adegoke", email: "faith@codeoutlaws.com"},
    {id: 4, first_name: "Dunmoye", last_name: "Ayobami", email: "ayobami@codeoutlaws.com"},
    {id: 5, first_name: "Abisola", last_name: "Agiode", email: "abisola@codeoutlaws.com"},
    {id: 6, first_name: "Adefola", last_name: "Alabi", email: "adefola@codeoutlaws.com"},
    {id: 7, first_name: "Deji", last_name: "Gbayegun", email: "deji@codeoutlaws.com"},
    {id: 8, first_name: "Ovie", last_name: "Uwanoghor", email: "oviking@codeoutlaws.com"}
];

const showSlid = document.querySelectorAll('.showSlide'),
    dot = document.querySelectorAll('.dot');
const slidLength = showSlid.length;

let counter =0;

let timer = setInterval(autoslide, 5000);
function autoslide() {
    if (counter == slidLength ) {
        counter = 0
    }
    plusSlides();
}

function plusSlides() {
    if (counter < slidLength- 1) {
        ++counter;
        slidecount(counter);
    }
}

function currentSlide() {
    if (counter >= 1) {
        --counter;
        slidecount(counter);
    }
}


function slidecount(counter){
    for(let i = 0; i < slidLength; i++){
        showSlid[i].style.display = "none";
        dot[i].classList.remove('active');
        dot[i].style.borderColor = "white";
    }

    showSlid[counter].style.display = "block";
    dot[counter].style.borderColor = "#ecc929";
}



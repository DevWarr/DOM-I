const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//===================Navigation bar text:===================//
const navLinks = document.querySelectorAll('nav a');
// Array.from(navLinks);
// for each anchor tag, give it the value listed in the siteContent object
navLinks.forEach((v, i) => v.textContent = siteContent["nav"][`nav-item-${i+1}`]);
//======Green text:======//
navLinks.forEach(x => x.style.color = 'green');
// New anchor tags:
const takema = document.createElement('a');
takema.textContent = "Takema";
takema.setAttribute("href", "#");
takema.style.color = "green";
const ideas = document.createElement('a');
ideas.textContent = "Ideas";
ideas.classList.add('surprise');
ideas.setAttribute("href", "#");
ideas.style.color = "green";
// Create nav const and append:
const nav = document.querySelector('nav');
nav.prepend(takema);
nav.appendChild(ideas);


//===================Top section:===================//
const cta = {
  "header": document.querySelector('.cta-text h1'),
  "button": document.querySelector('.cta-text button'),
  "img": document.querySelector('.cta img')
}
cta["header"].textContent = siteContent["cta"]["h1"];
cta["button"].textContent = siteContent["cta"]["button"];
cta["img"].src = siteContent["cta"]["img-src"];


//===================Main Content Section:===================//
const mainContent = {
  topContent: {
    // 2 headers and 2 text
    headers: document.querySelectorAll('.top-content .text-content h4'),
    text: document.querySelectorAll('.top-content .text-content p')
  },
  img: document.querySelector('#middle-img'),
  bottomContent: {
    // 3 headers and 3 text
    headers: document.querySelectorAll('.bottom-content .text-content h4'),
    text: document.querySelectorAll('.bottom-content .text-content p')
  }
}
// Features:
mainContent.topContent.headers[0].textContent = siteContent['main-content']['features-h4'];
mainContent.topContent.text[0].textContent = siteContent['main-content']['features-content'];
// About:
mainContent.topContent.headers[1].textContent = siteContent['main-content']['about-h4'];
mainContent.topContent.text[1].textContent = siteContent['main-content']['about-content'];
// Image:
mainContent.img.src = siteContent['main-content']['middle-img-src'];
// Services:
mainContent.bottomContent.headers[0].textContent = siteContent['main-content']['services-h4'];
mainContent.bottomContent.text[0].textContent = siteContent['main-content']['services-content'];
// Product:
mainContent.bottomContent.headers[1].textContent = siteContent['main-content']['product-h4'];
mainContent.bottomContent.text[1].textContent = siteContent['main-content']['product-content'];
// Vision:
mainContent.bottomContent.headers[2].textContent = siteContent['main-content']['vision-h4'];
mainContent.bottomContent.text[2].textContent = siteContent['main-content']['vision-content'];


//===================Contact section:===================//
const contact = {
  header: document.querySelector('.contact h4'),
  text: document.querySelectorAll('.contact p')
}
contact.header.textContent = siteContent["contact"]["contact-h4"];
contact.text[0].textContent = siteContent["contact"]["address"];
contact.text[1].textContent = siteContent["contact"]["phone"];
contact.text[2].textContent = siteContent["contact"]["email"];



//===================Footer:===================//
const footerText = document.querySelector('footer p');
footerText.textContent = siteContent["footer"]["copyright"];


//===================STRETCH===================//

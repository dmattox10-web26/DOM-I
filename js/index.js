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

let navItems = document.querySelectorAll('nav a')
let cta = document.querySelector('section.cta')
let mainContent = document.querySelector('section.main-content')
let contact = document.querySelector('section.contact')
let footer = document.querySelector('footer')

navItems.forEach((navItem, index) => {
  navItem.textContent = siteContent['nav'][`nav-item-${index + 1}`]
  navItem.style.color = 'green'
})

let ctaHeading = cta.querySelector('h1')
ctaHeading.textContent = siteContent['cta']['h1']
let ctaButton = cta.querySelector('button')
ctaButton.textContent = siteContent['cta']['button']
let ctaImage = cta.querySelector('img')
ctaImage.src = siteContent['cta']['img-src']

let mainContentFeaturesHeading = mainContent.querySelector('.top-content :nth-child(1) > h4')
mainContentFeaturesHeading.textContent = siteContent['main-content']['features-h4']
let mainContentFeaturesText = mainContent.querySelector('.top-content :nth-child(1) > p')
mainContentFeaturesText.textContent = siteContent['main-content']['features-content']

let mainContentAboutHeading = mainContent.querySelector('.top-content :nth-child(2) > h4')
mainContentAboutHeading.textContent = siteContent['main-content']['about-h4']
let mainContentAboutText = mainContent.querySelector('.top-content :nth-child(2) > p')
mainContentAboutText.textContent = siteContent['main-content']['about-content']

let mainContentImage = mainContent.querySelector('.middle-img')
mainContentImage.src = siteContent['main-content']['middle-img-src']

let mainContentServicesHeading = mainContent.querySelector('.bottom-content :nth-child(1) > h4')
mainContentServicesHeading.textContent = siteContent['main-content']['services-h4']
let mainContentServicesText = mainContent.querySelector('.bottom-content :nth-child(1) > p')
mainContentServicesText.textContent = siteContent['main-content']['services-content']

let mainContentProductHeading = mainContent.querySelector('.bottom-content :nth-child(2) > h4')
mainContentProductHeading.textContent = siteContent['main-content']['product-h4']
let mainContentProductText = mainContent.querySelector('.bottom-content :nth-child(2) > p')
mainContentProductText.textContent = siteContent['main-content']['product-content']

let mainContentVisionHeading = mainContent.querySelector('.bottom-content :nth-child(3) > h4')
mainContentVisionHeading.textContent = siteContent['main-content']['vision-h4']
let mainContentVisionText = mainContent.querySelector('.bottom-content :nth-child(3) > p')
mainContentVisionText.textContent = siteContent['main-content']['vision-content']

let contactHeading = contact.querySelector('h4')
contactHeading.textContent = siteContent['contact']['contact-h4']
let contactAddress = contact.querySelector(':nth-child(2)')
contactAddress.textContent = siteContent['contact']['address']
let contactPhone = contact.querySelector(':nth-child(3)')
contactPhone.textContent = siteContent['contact']['phone']
let contactEmail = contact.querySelector(':nth-child(4)')
contactEmail.textContent = siteContent['contact']['email']

let footerText = footer.querySelector('p')
footerText.textContent = siteContent['footer']['copyright']

let nav = document.querySelector('nav')
let firstNav = document.createElement('a')
firstNav.textContent = 'first'
firstNav.style.color = 'green'
firstNav.href = '#'
nav.prepend(firstNav)
let lastNav = document.createElement('a')
lastNav.textContent = 'last'
lastNav.style.color = 'green'
lastNav.href = '#'
nav.append(lastNav)
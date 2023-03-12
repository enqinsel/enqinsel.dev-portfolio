
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

window.addEventListener('load', function () {
  const loader = document.getElementById('loading-body');
  const index = document.getElementById('index');
  const parent = loader.parentNode;
  setTimeout(function() {
    loader.className += ' hidden';
    index.style.display = 'block';
    parent.removeChild(loader);
  }, 3000);
});

// cv

const cvDownloadButton = document.querySelector("#cvDownloadButton");

cvDownloadButton.addEventListener("click", () => {
  const pdfUrl = "./enqinsel-resume.pdf"; // burada indirilecek pdf dosyasının URL'sini belirleyin
  const fileName = "enqinsel-resume.pdf"; // indirilen dosyanın ismini belirleyin
  fetch(pdfUrl).then(response => response.blob()).then(blob => {
    const url = window.URL.createObjectURL(new Blob([blob]));
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);  
    }, 0); 
  });
});


var typed = new Typed(".multiple-text", {
  strings: ["Computer Engineer", "Frontend Developer", "Youtuber", "Blogger"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1000,
  loop: true
})


hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

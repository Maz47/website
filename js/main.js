const theme = localStorage.getItem('theme');
if (theme === "dark") {
  document.documentElement.setAttribute('data-theme', 'dark');
}

const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

if (theme === "dark") {
	//document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
	//document.getElementById("theme-toggle").innerHTML = "Dark Mode";
} else if  (userPrefers === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	window.localStorage.setItem('theme', 'dark');
	//document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else {
	document.documentElement.setAttribute('data-theme', 'light');
	window.localStorage.setItem('theme', 'light');
	//document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}

const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('click', modeSwitcher);

const themeSwitcherDesktop = document.getElementById('theme-switcher-desktop');
themeSwitcherDesktop.addEventListener('click', modeSwitcher);

function modeSwitcher() {
	let currentMode = document.documentElement.getAttribute('data-theme');
	if (currentMode === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		window.localStorage.setItem('theme', 'light');
		//document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		window.localStorage.setItem('theme', 'dark');
		//document.getElementById("theme-toggle").innerHTML = "Light Mode";
	}
}

const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active')
    } else {
      document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active')
    }
  })
}
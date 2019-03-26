const menu = document.querySelector('#menu')
const header = document.querySelector('#header')
const menuLinks = document.querySelectorAll('nav#menu > a')

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const showMenu = function() {
    if (menu.classList == "outside") {
        menu.classList.remove("outside")
        menu.classList.add("inside")
    } else {
        menu.classList.remove("inside")
        menu.classList.add("outside")
    }
}

const removeTransparency = function() {
  if (header.scrollHeight < window.scrollY) {
    header.style.backgroundColor = "#ccc", header.classList.add("shadow")
    console.log("#ccc")
  }
  else {
    header.style.backgroundColor = "transparent", header.classList.remove("shadow")
  }
}
const scrollToSection = function() {
  
}
debounce(window.addEventListener('scroll', removeTransparency),500)
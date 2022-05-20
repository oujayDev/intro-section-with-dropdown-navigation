// THE CODE BELOW IS FOR NAVIGATION MENU FOR MOBILE
const nav = document.querySelector("#nav-items");
const navToggler = document.querySelector(".mobile-nav-toggle");

navToggler.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggler.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggler.setAttribute("aria-expanded", false);
    }
})


// THE CODE BELOW IS FOR THE DROPDOWN FUNCTIONALITY
const mainLink = document.getElementsByClassName("main-link");
const subLinks = document.getElementsByClassName("sub-links");

mainLink[0].addEventListener("click", function() {
    this.classList.toggle("active");
    subLinks[0].classList.toggle("show");

    if (subLinks[0].style.maxHeight) {
        subLinks[0].style.maxHeight = null;
    } else {
        subLinks[0].style.maxHeight = subLinks[0].scrollHeight + "px";
    }
});

mainLink[1].addEventListener("click", function() {
    this.classList.toggle("active");
    subLinks[1].classList.toggle("show");
    
    if (subLinks[1].style.maxHeight) {
        subLinks[1].style.maxHeight = null;
    } else {
        subLinks[1].style.maxHeight = subLinks[1].scrollHeight + "px";
    }
});

window.addEventListener("click", function(e) {
    if (!e.target.matches(".main-link")) {
        let myDropdown1 = subLinks[0],
        myDropdown2 = subLinks[1],
        arrowReset1 = mainLink[0],
        arrowReset2 = mainLink[1];

        if (myDropdown1.classList.contains('show')) {
            myDropdown1.classList.remove('show');
        }

        if (myDropdown2.classList.contains('show')) {
            myDropdown2.classList.remove('show');
        }

        if (arrowReset1.classList.contains('active')) {
            arrowReset1.classList.remove('active');
        }

        if (arrowReset2.classList.contains('active')) {
            arrowReset2.classList.remove('active');
        }

        if (myDropdown1.style.maxHeight == myDropdown1.scrollHeight + "px") {
            myDropdown1.style.maxHeight = null;
        }

        if (myDropdown2.style.maxHeight == myDropdown2.scrollHeight + "px") {
            myDropdown2.style.maxHeight = null;
        }
    }
});
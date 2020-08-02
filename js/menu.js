/* ============ SCRIPT MENU ============ */

/* ----- DESKTOP MENU ----- */

// select all elemens of menu
var menuOpen = document.getElementsByClassName("change");
var menu = document.getElementById("menu");
var hamburger = document.getElementById("hamburger");
var menuItem = document.querySelectorAll('.menu--text');

// set event listener in all menu buttons
menuItem.forEach(element => {
    element.addEventListener('click', () => {
        // reset colors of menu contents
        menuItem.forEach(otherElems => {
            otherElems.childNodes[0].style.color = "";
        })
        // repaint the selected menu content
        element.childNodes[0].style.color = "var(--primary-orange)";

        // close menu
        setTimeout(() => {
            menuItem.forEach(item => {
                item.classList.add('slide-left-out');
            });
            menu.classList.remove("fade-in");
            menu.classList.add("fade-out");
        }, 150);
        
        setTimeout(() => {menu.style.display = "none";}, 600);
        hamburger.classList.toggle("change");
    })
});

/* ----- MOBILE MENU ----- */

function changeMobile() {

    // if open
    if (menuOpen.length === 0) {
        menuItem.forEach(item => {
            item.classList.remove('slide-left-out')
        });
        menu.classList.add("fade-in");
        menu.classList.remove("fade-out");
        menu.style.display = "flex";
    }
    // if closed
    else {
        menuItem.forEach(item => {
            item.classList.add('slide-left-out')
        });
        menu.classList.remove("fade-in");
        menu.classList.add("fade-out");
        setTimeout(() => {menu.style.display = "none";}, 500);
    }
    hamburger.classList.toggle("change");
}

/* ----- DARK / LIGHT MODE ----- */

// var lightMode = document.getElementsByClassName("light");

// // icons works
// var iconWorks = document.getElementsByClassName("icon-works");

// // change all switchs (desktop + mobile)
// document.querySelectorAll('.switch-mode').forEach(switchMode => {
    
//     switchMode.addEventListener('click', () => {

//         document.body.classList.toggle('light');
//         localStorage.setItem('theme',
//             document.body.classList.contains('light') ? 'light' : 'dark');

//         // work icons color
//         if (lightMode.length === 0) {
//             for (var i = 0; i < iconWorks.length; i++) {
//                 iconWorks[i].style.webkitFilter = "";
//             }
//         }
//         else {
//             for (var i = 0; i < iconWorks.length; i++) {
//                 iconWorks[i].style.webkitFilter = "none";
//             }
//         }

//     });
// });

// if (localStorage.getItem('theme') === 'light') {
//     document.body.classList.add('light');

//     for (var i = 0; i < iconWorks.length; i++) {
//         iconWorks[i].style.webkitFilter = "none";
//     }
// }

/* ----- PROGRESS BAR ----- */

// progress bar in scrolling
window.onload = () => {
    // Ecouteur d'évènement sur scroll
    window.addEventListener("scroll", () => {
        // Calcul de la hauteur "utile" du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight
        // Récupération de la position verticale
        let position = window.scrollY
        // Récupération de la largeur de la fenêtre
        let largeur = window.innerHeight
        // Calcul de la largeur de la barre
        let barre = position / hauteur * largeur
        // Modification du CSS de la barre
        document.getElementById("progress").style.height = barre+"px"
    });
};
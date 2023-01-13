const menuButton = document.getElementById('menu-button');
const menuItems = document.querySelectorAll('.menu-item');
const closeButton = document.getElementById('close-button');

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.add('hidden');
}
closeButton.classList.add('hidden');

closeButton.addEventListener('click', function() {
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.add('hidden');
    }
    closeButton.classList.add('hidden'); 
    menuButton.classList.remove('hidden');
}
);


menuButton.addEventListener('click', function() {
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('hidden');
    }
    closeButton.classList.remove('hidden');
    menuButton.classList.add('hidden');
}
);
let burger = document.querySelector('.hamburger');
let navList = document.querySelector('.navList');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
})

document.querySelectorAll('.navLinks').forEach(link => link.addEventListener('click', () => {
    burger.classList.remove('active');
    navList.classList.remove('active');
}))
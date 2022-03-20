const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navMenu = document.getElementsByClassName(nav-menu)[0]

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('avtive')
})
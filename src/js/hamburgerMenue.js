const closeButton = document.querySelector('.close__nav')
const openButton = document.querySelector('.open__nav')
const nav = document.querySelector('.navigation')

closeButton.addEventListener('click', () => {
  nav.classList.remove('navigation__open')
})

openButton.addEventListener('click', () => {
  nav.classList.add('navigation__open')
})

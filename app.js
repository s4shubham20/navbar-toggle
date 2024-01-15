const humberBtn = document.querySelector('.nav-toggle');
const showLink = document.querySelector('.links');
humberBtn.addEventListener('click', () => {
    // console.log(showLink);
    showLink.classList.toggle('show-links');
    humberBtn.classList.toggle('nav-toggle-rotate');
})
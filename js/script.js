let button = document.querySelector('.search-button');
let form = document.querySelector('.search-form');
form.classList.add('form-hidden');
button.onclick = function() {
    form.classList.toggle('form-hidden');
}
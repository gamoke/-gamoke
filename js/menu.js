// JavaScript Document
var toggler = document.querySelector('div.toggle');
var navigation = document.querySelector('navigation');

toggler.addEventListener('click', (e) => {
  e.target.classList.toggle('fa-bars')
  e.target.classList.toggle('fa-times')
  navigation.classList.toggle('menu-close') 
})
const dark = document.querySelector('.page1');
const btn = document.querySelector('.plo');
const tex = document.querySelector('.img2 h3');
const tax = document.querySelector('.img2 p');
const tix= document.querySelector('nav');
const tox = document.querySelector('.muton button')
btn.addEventListener('click', function(){
   dark.classList.toggle('gelap');
   tex.classList.toggle('putih'); 
   tax.classList.toggle('putih'); 
   tix.classList.toggle('putih'); 
   btn.classList.toggle('putuh');
   tox.classList.toggle('bp');
});


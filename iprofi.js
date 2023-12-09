const dark = document.querySelector('.page1');
const btn = document.querySelector('.plo');
const tix= document.querySelector('nav');
const bd = document.body;
btn.addEventListener('click', function(){
   dark.classList.toggle('gelap');
   bd.classList.toggle('gelap');
   tix.classList.toggle('putih'); 
   btn.classList.toggle('putuh');
});


// const page = document.querySelector('.page1');
// const btn = document.querySelector('.muton button');
// menuToggle.addEventListener('click', function () {
// nav.classList.toggle('slide');

// });

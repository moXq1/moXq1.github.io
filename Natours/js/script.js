;(function(){
  'use strict'

  const ul = document.querySelector('.navigation__list');
  ul.addEventListener('click',function(event){
    let target = event.target;
    if(target.tagName != 'A') return;
    document.querySelector('#navi-toggle').checked = false;
  });


  const popup = document.querySelector("#popup");
  popup.addEventListener('mouseup',function(event){
    let target = event.target;
      if(target == popup){
      location.href = document.querySelector('.popup__close').getAttribute('href');
      }
  });
})();

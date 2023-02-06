(() => {
"use strict";

window.onload = function(){
// topHeader
window.addEventListener('scroll', ()=> {
  const topHeader = document.getElementById("topHeader");
  let scrollY = window.pageYOffset;
  if(scrollY > 0) {
    topHeader.classList.add("header-scroll-color");
  } else {
    topHeader.classList.remove("header-scroll-color");
  }
});

const togglebtn = document.getElementById("togglebtn");

togglebtn.addEventListener('click', ()=>{
  // sp-toggle-button
  if (!(togglebtn.classList.contains("active"))) {
  togglebtn.classList.add("active")
  // sp-header-active
  document.getElementById("sp-header-active").classList.add("sp-header-active")
  } else {
    togglebtn.classList.remove("active")
  // sp-header-active
    document.getElementById("sp-header-active").classList.remove("sp-header-active")
  }


});
}

var $delayTime = 1000;

$(window).on('load', function(){
  var $loadingAnim = $('#loadingAnim'),
      $body = $('body');

    setTimeout( function(){

      $body.addClass('loaded');

      $loadingAnim.find('.loadingAnim_line').on('transitionend', function( e ){
        $(this).parent().remove(); }); }, $delayTime );
 });


})();

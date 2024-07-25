//Slides

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("quote");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Modal
function setupModal(modalId, linkId) {

  let modal = document.getElementById(modalId);
  let link = document.getElementById(linkId);

  let span = modal.getElementsByClassName("close")[0];

  link.onclick = function(){
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

setupModal("myModalJohn", "linkJohn");
setupModal("myModalPaul", "linkPaul");
setupModal("myModalGeorge", "linkGeorge");
setupModal("myModalRingo", "linkRingo");
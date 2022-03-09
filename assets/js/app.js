const testimonials = document.querySelectorAll('.testimonial');
const previousSlideButtons = document.querySelectorAll('.previous-slide');
const nextSlideButtons = document.querySelectorAll('.next-slide');

const testimonialArray = [...testimonials];
const previousSlideButtonsArray = [...previousSlideButtons];
const nextSlideButtonsArray = [...nextSlideButtons];
let index = 0;

displayContainer(index);
function displayContainer(index) {
  testimonialArray.forEach((testimonial) => {
    testimonial.style.display = 'none';
  });
  testimonialArray[index].style.display = 'flex';
}


function nextTestimonial() {
  index++;
  if (index > testimonialArray.length - 1) {
    index = 0;
  }
  displayContainer(index);
}

function previousTestimonial() {
  index--;
  if (index < 0) {
    index = testimonialArray.length - 1;
  }
  displayContainer(index);
}

previousSlideButtonsArray.forEach(previousSlideButton => previousSlideButton.addEventListener('click', previousTestimonial));
nextSlideButtonsArray.forEach(nextSlideButton => nextSlideButton.addEventListener('click', nextTestimonial));

document.addEventListener('keydown', (e)=> {
  if('ArrowLeft' === e.key){
    previousTestimonial();
  }
  if('ArrowRight' === e.key){
    nextTestimonial();
  }
});

var container = document.getElementById("container");
var slider = document.getElementById("slider");
var slides = document.getElementsByClassName("slide").length;
var buttons = document.getElementsByClassName("btn");

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else {
    if (w < 901) {
      slidesPerPage = 2;
    } else {
      if (w < 1101) {
        slidesPerPage = 3;
      } else {
        slidesPerPage = 4;
      }
    }
  }
  slidesCount = slides - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  }
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + "%";
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
  if (currentPosition >= slidesCount) {
    buttons[1].classList.add("inactive");
  }
}





// Slider Controller :

let currentSlide = 0;
const slides1 = document.querySelectorAll('.slide');
let totalSlides1 = slides1.length;

function cloneAndAppendSlides() {
  slides1.forEach((slide) => {
    const clonedSlide = slide.cloneNode(true);
    slider.appendChild(clonedSlide);
  });
}

function slideRight() {
  currentSlide = (currentSlide + 1) % totalSlides1;
  updateSlider();

  if (currentSlide === 0) {
    cloneAndAppendSlides();
    totalSlides1 += slides1.length;
  }
}

function updateSlider() {
  const translateValue = -currentSlide * 2.5;
  slider.style.transform = `translateX(${translateValue}%)`;
}

function startAutoSlide() {
  const intervalTime = 2000;
  setInterval(() => {
    slideRight();
  }, intervalTime);
}

window.onload = () => {
  cloneAndAppendSlides();
  startAutoSlide();
};




document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    const countDownDate = new Date("Feb 3, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countDownDate - now;
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("countdown").innerHTML = `
            <div><div class="fw-8 text-center">${days}</div>Days</div> : 
            <div><div class="fw-8 text-center">${hours}</div>Hours</div> : 
            <div><div class="fw-8 text-center">${minutes}</div>Mins</div> : 
            <div><div class="fw-8 text-center">${seconds}</div>Secs</div>
        `;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Batch has started!";
        }
    }, 1000);
});
document.getElementById('closeButton').addEventListener('click', function() {
    document.querySelector('.Header_promotionHeaderContainer__vdz2G').classList.add('closed');
  });

  







(function () {
  $("#button").click(function () {
    $("#button").addClass("onclic", 250, validate);
  });

  function validate() {
    setTimeout(function () {
      $("#button").removeClass("onclic");
      $("#button").addClass("validate", 450, callback);
    }, 2250);
  }
  function callback() {
    setTimeout(function () {
      $("#button").removeClass("validate");
    }, 1250);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    on: {
      reachEnd: function () {
        console.log("Reached last card (Card 9)");
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 400) {
    var swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
        dynamicBullets: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      },
      on: {
        reachEnd: function () {
          console.log("Reached last card (Card 9)");
        },
      },
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 600) {
    var swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
        dynamicBullets: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      on: {
        reachEnd: function () {
          console.log("Reached last card (Card 9)");
        },
      },
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    var swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: function () {
          if (this.activeIndex === 6) {
            this.allowSlideNext = false;
          } else {
            this.allowSlideNext = true;
          }
        },
      },
    });
  }
});

function animateCounters() {
  const counters = document.querySelectorAll(".number");
  const speed = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(counter);
  });
}
document.addEventListener("DOMContentLoaded", animateCounters);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

let sections = document.querySelectorAll(".scroll");
let navLinks = document.querySelectorAll(".header .nav-links a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header .nav-links a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

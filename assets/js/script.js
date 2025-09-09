

// Time update code
var timeDisplay = document.getElementById("time2");

function refreshTime() {
  var date = new Date();
  var options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  var timeString = date.toLocaleTimeString("en-US", options);
  timeString = timeString.replace(/ AM| PM/g, "");
  timeDisplay.innerHTML = timeString;
}
setInterval(refreshTime, 1000);

// GSAP animations with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Name animation
const tl = gsap.timeline();
tl.from(".portfolio__name h1 span", {
  y: -150,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".portfolio__name",
    start: "top 80%",
    toggleActions: "play none none none",
    invalidateOnRefresh: true,
  }
});

// Portfolio image zoom animation
gsap.to(".portfolio__image img", {
  scale: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".portfolio__image",
    start: "top 80%",
    scrub: 0.5,
    invalidateOnRefresh: true,
  }
});

// Works heading animation
gsap.from(".works__heading h1 span", {
  y: 150,
  opacity: 0,
  duration: 1.2,
  stagger: 0.5,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".works__heading h1 span",
    start: "top 80%",
    toggleActions: "play none none none",
    invalidateOnRefresh: true,
  }
});

// Work1 animation
gsap.from(".work1", {
  opacity: 0,
  x: -1000,
  duration: 1.5,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".work1",
    start: "top 80%",
    toggleActions: "play none none none",
    invalidateOnRefresh: true,
  }
});

// Work2 animation
gsap.from(".work2", {
  opacity: 0,
  x: 1000,
  duration: 1.5,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".work2",
    start: "top 80%",
    toggleActions: "play none none none",
    invalidateOnRefresh: true,
  }
});

// About section timeline animation
const aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".portfolio__about",
    start: "top top",
    end: "bottom top",
    scrub: 5,
    pin: true,
    invalidateOnRefresh: true,
  }
});

aboutTimeline.to(".about__heading", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: "power4.out"
}, 0);

aboutTimeline.fromTo(".about__image", {
  opacity: 0,
  scale: 2,
}, {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power4.out"
}, 0.5);

// CTA section animation
gsap.from('.cta_content h3', {
  y: 100,
  opacity: 0,
  duration: 1.2,
  stagger: 0.5,
  ease: "power4.in",
  scrollTrigger: {
    trigger: '.cta_content h3',
    start: "top 80%",
    toggleActions: "play none none none",
    invalidateOnRefresh: true,
  }
});

// Additional animations can be structured similarly:
// Example: Footer or other sections
gsap.from(".footer__links", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".footer__links",
    start: "top 90%",
    toggleActions: "play none none none",
    invalidateOnRefresh: true,
  }
});


  function isMobile() {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }

        window.addEventListener("load", function() {
            if (!isMobile()) {
                // Mobile না হলে animation চালাও
                gsap.to(".your-element", {
                    x: 300,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            } else {
                console.log("GSAP animation disabled on mobile.");
            }
        });
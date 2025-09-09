
// var timeDisplay = document.getElementById("time2");

// function refreshTime() {
//   var date = new Date();
//   var options = {
//     timeZone: "Asia/Kolkata",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true, 
//   };
//   var timeString = date.toLocaleTimeString("en-US", options);
//   timeString = timeString.replace(/ AM| PM/g, "");
//   timeDisplay.innerHTML = timeString;
// }

// setInterval(refreshTime, 1000);


// /* gsap for name */




// const tl = gsap.timeline();

// tl.from(".portfolio__name h1 span", {
//     y: -150,       
//     opacity: 0,    
//     duration: 1,  
//     stagger: 0.5,  
//     ease: "power4.easeout" 
// });





// gsap.to(".portfolio__image img", {
//   scrollTrigger: {
//     trigger: ".portfolio__image", 
//     scrub: 0.5, 
//   },
//   scale: 1.5,
//   ease: "power4.easeout",
// });





// gsap.from(".works__heading h1 span", {
//   y: 150,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: ".works__heading h1 span", 
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
// });




//   let animation = gsap.from(".work1", {
//     opacity: 0, 
//     x: -1000,
//     duration: 1.5,
//     ease: "power4.easein",
//     scrollTrigger: {
//       trigger: ".work1", 
//       start: "top 80%", 
//       toggleActions: "play none none none",
//     }
//   });


  





// gsap.from(".work2", {
//     opacity: 0, 
//     x: 1000,
//     duration: 1.5,
//     ease: "power4.easein",
//     scrollTrigger: {
//       trigger: ".work2", 
//       start: "top 80%", 
//       toggleActions: "play none none none",
//     }
//   });
  





//   gsap.from(".work3", {
//     opacity: 0, 
//     x: -1000,
//     duration: 1.5,
//     ease: "power4.easein",
//     scrollTrigger: {
//       trigger: ".work3", 
//       start: "top 80%", 
//       toggleActions: "play none none none",
//     }
//   });




//   gsap.from(".work4", {
//     opacity: 0, 
//     x: 1000,
//     duration: 1.5,
//     ease: "power4.easein",
//     scrollTrigger: {
//       trigger: ".work4", 
//       start: "top 80%", 
//       toggleActions: "play none none none",
//     }
//   });
 




//   gsap.from(".work5", {
//     opacity: 0, 
//     x: -1000,
//     duration: 1.5,
//     ease: "power4.easein",
//     scrollTrigger: {
//       trigger: ".work5", 
//       start: "top 80%", 
//       toggleActions: "play none none none",
//     }
//   });




//   gsap.from(".work6", {
//     opacity: 0, 
//     x: 1000,
//     duration: 1.5,
//     ease: "power4.easein",
//     scrollTrigger: {
//       trigger: ".work6", 
//       start: "top 80%", 
//       toggleActions: "play none none none",
//     }
//   });






// const aboutTimeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".portfolio__about", 
//     start: "top top",             
//     end: "bottom top",           
//     scrub: 5,               
//     pin: true,                                 
//   }
// });


// aboutTimeline.to(".about__heading", {
//   opacity: 0,     
//   scale: 0.5,      
//   duration: 1,     
//   ease: "power4.out",
// }, 0);


// aboutTimeline.fromTo(".about__image", {
//   opacity: 0,      
//   scale: 2,      
// }, 
// {
//   opacity: 1,      
//   scale: 1,       
//   duration: 1,     
//   ease: "power4.out",
// }, 0.5); 








// gsap.from('.cta_content h3', {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: '.cta_content h3', 
//     start: "top 80%", 
//     toggleActions: "play none none none" 
//   },
// });

// gsap.from('.cta_content p', {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: '.cta_content h3', 
//     start: "top 80%", 
//     toggleActions: "play none none none" 
//   },
// });

// gsap.from('.btn2', {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: '.cta_content h3', 
//     start: "top 80%", 
//     toggleActions: "play none none none" 
//   },
// });


// gsap.from(".expertise__heading h1 span", {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: ".expertise__heading h1 span", 
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
// });


// gsap.from(".expertise1", {
//   y: 150,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: ".expertise1", 
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
// })

// gsap.from(".motivation__heading", {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: ".motivation__heading", 
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
// })

// gsap.from(".motivation__para p", {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: ".motivation__para p", 
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
// })

// gsap.from(".motivation__signature img", {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: ".motivation__signature", 
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
// })

// gsap.to(".about2__image img", {
//   scrollTrigger: {
//     trigger: ".about2__image", 
//     scrub: 0.5, 
//   },
//   scale: 1.5,
//   ease: "power4.easeout",
// });

// gsap.to(".experience__list", {
//   scrollTrigger: {
//       trigger: ".portfolio__experience",
//       start: "top top", 
//       end: "bottom bottom", 
//       pin: ".motivation__heading", 
//       pinSpacing: true, 
//       scrub: 1,
//   }
// });

// ScrollTrigger.create({
//   trigger: ".experience__list",
//   start: "top top", 
//   end: "bottom bottom", 
//   pin: ".motivation__heading", 
//   scrub: 1,
// });

// gsap.to(".about3__image img", {
//   scrollTrigger: {
//     trigger: ".about3__image", 
//     scrub: 0.5, 
//   },
//   scale: 1.5,
//   ease: "power4.easeout",
// });

// gsap.from(".faq__heading h2", {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: ".faq__heading h2", 
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
// });


// gsap.from(".accordion-item", {
//   y: 150,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: ".accordion-item", 
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
// })

// gsap.from(".contact__heading h2 span", {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: ".contact__heading h2 span", 
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
// });

// gsap.from(".contact__button", {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: ".contact__button", 
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
// });

// gsap.from(".contact__image", {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.5,
//   ease: "power4.easeIn",
//   scrollTrigger: {
//     trigger: ".contact__image", 
//     start: "top 80%", 
//     toggleActions: "play none none none",
//   },
// });
// const lenis = new Lenis({
//   smooth: true,
//   lerp: 0.05,
//   // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//   smoothTouch: true,
// });

// lenis.on('scroll', (e) => {
//   console.log('Scrolling:', e);
  
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);



// GSAP + ScrollTrigger register
gsap.registerPlugin(ScrollTrigger);

// Time Display
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

// GSAP animations with matchMedia for responsive
const mm = gsap.matchMedia();

mm.add({
  // Desktop / Laptop
  "(min-width: 769px)": function() {
    // Portfolio name animation
    gsap.from(".portfolio__name h1 span", {
      y: -150,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power4.out"
    });

    // Portfolio images zoom
    gsap.to(".portfolio__image img", {
      scale: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".portfolio__image",
        scrub: 0.5
      }
    });

    gsap.to(".about2__image img", {
      scale: 1.5,
      ease: "power4.out",
      scrollTrigger: { trigger: ".about2__image", scrub: 0.5 }
    });

    gsap.to(".about3__image img", {
      scale: 1.5,
      ease: "power4.out",
      scrollTrigger: { trigger: ".about3__image", scrub: 0.5 }
    });

    // Works heading
    gsap.from(".works__heading h1 span", {
      y: 150,
      opacity: 0,
      duration: 1.2,
      stagger: 0.5,
      ease: "power4.in",
      scrollTrigger: { trigger: ".works__heading h1 span", start: "top 80%" }
    });

    // Work items
    const workItems = [".work1", ".work2", ".work3", ".work4", ".work5", ".work6"];
    workItems.forEach((work, i) => {
      gsap.from(work, {
        opacity: 0,
        x: i % 2 === 0 ? -1000 : 1000,
        duration: 1.5,
        ease: "power4.in",
        scrollTrigger: { trigger: work, start: "top 80%" }
      });
    });

    // About section timeline
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio__about",
        start: "top top",
        end: "bottom top",
        scrub: 5,
        pin: true
      }
    });

    aboutTimeline.to(".about__heading", { opacity: 0, scale: 0.5, duration: 1 }, 0);
    aboutTimeline.fromTo(".about__image", { opacity: 0, scale: 2 }, { opacity: 1, scale: 1, duration: 1 }, 0.5);

    // CTA content
    gsap.from(".cta_content h3, .cta_content p, .btn2", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.5,
      ease: "power4.in",
      scrollTrigger: { trigger: ".cta_content h3", start: "top 80%" }
    });

    // Expertise
    gsap.from(".expertise__heading h1 span", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.5,
      ease: "power4.in",
      scrollTrigger: { trigger: ".expertise__heading h1 span", start: "top 80%" }
    });

    gsap.from(".expertise1", {
      y: 150,
      opacity: 0,
      duration: 1.2,
      stagger: 0.5,
      ease: "power4.in",
      scrollTrigger: { trigger: ".expertise1", start: "top 80%" }
    });

    // Motivation
    gsap.from(".motivation__heading, .motivation__para p, .motivation__signature img", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.5,
      ease: "power4.in",
      scrollTrigger: { trigger: ".motivation__heading", start: "top 80%" }
    });

    // FAQ
    gsap.from(".faq__heading h2, .accordion-item", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.5,
      ease: "power4.in",
      scrollTrigger: { trigger: ".faq__heading h2", start: "top 80%" }
    });

    // Contact
    gsap.from(".contact__heading h2 span, .contact__button, .contact__image", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.5,
      ease: "power4.in",
      scrollTrigger: { trigger: ".contact__heading h2 span", start: "top 80%" }
    });
  },

  // Mobile: width <= 768px
  "(max-width: 768px)": function() {
    console.log("GSAP animations disabled on mobile");

    // Set default state for mobile
    const elements = [
      ".portfolio__name h1 span",
      ".portfolio__image img",
      ".about__image",
      ".about2__image img",
      ".about3__image img",
      ".works__heading h1 span",
      ".work1", ".work2", ".work3", ".work4", ".work5", ".work6",
      ".cta_content h3", ".cta_content p", ".btn2",
      ".expertise__heading h1 span", ".expertise1",
      ".motivation__heading", ".motivation__para p", ".motivation__signature img",
      ".faq__heading h2", ".accordion-item",
      ".contact__heading h2 span", ".contact__button", ".contact__image"
    ];

    elements.forEach(el => {
      gsap.set(el, { opacity: 1, y: 0, scale: 1, x: 0 });
    });
  }
});

// Lenis smooth scroll (same as before)
const lenis = new Lenis({ smooth: true, lerp: 0.05, smoothTouch: true });

lenis.on("scroll", (e) => { console.log("Scrolling:", e); });

function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

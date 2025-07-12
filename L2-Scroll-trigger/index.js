gsap.registerPlugin(ScrollTrigger);

// Simple entrance animation for page1
gsap.from("#page1 .box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
});

// Entrance animation when scrolling to page2
gsap.from("#page2 .box", {
  scale: 0,
  duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 .box",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
    markers: true, // turn off debugging markers
  },
});

// Animation for #page4 h1
gsap.from("#page4 h1", {
  opacity: 0,
  x: 500,
  duration: 1,
  scrollTrigger: {
    trigger: "#page4 h1",
    start: "top 80%",
    end: "top 40%",
    markers: false,
  },
});

// ✅ Final animation for #page4 h2 (works!)
gsap.from("#page4 h2", {
  opacity: 0,
  x: -500,
  duration: 1,
  scrollTrigger: {
    trigger: "#page4 h2",
    start: "top 80%", // slightly earlier trigger for reliability
    end: "top 40%",
    markers: true,
  },
});

gsap.to(".big-text-wrapper", {
    x: "-400vw",              // Scroll left by full viewport width
    ease: "none",
    scrollTrigger: {
      trigger: "#page3",
      start: "top top",
      end: "bottom top",       // Controls scroll duration
      scrub: true,
      pin: true,               // Pins the section while animating
      anticipatePin: 1,
    }
  });

gsap.from(".logo", {
  x: -200,
  duration: 1.5,
  delay: 0.6,
});

gsap.from(".links", {
  x: 200,
  duration: 1.5,
  delay: 0.6,
});

gsap.from(".content", {
  scale: 0,
  duration: 1,
  delay: 0.6,
  rotate: 180,
});

gsap.from(".leftsides", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".leftsides",
    scroller: "body",
    start: "top74%",
    end: "top 50%",
    scrub: true,
  },
});

gsap.from(".rightsides", {
  x: 900,
  //   delay: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".rightsides",
    scroller: "body",
    start: "top 74%",
    end: "top 50%",
    scrub: true,
  },
});

gsap.from(".leftsides_1", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".leftsides_1",
    scroller: "body",
    //   markers:true,
    start: "top 72%",
    end: "top 50%",
    scrub: true,
  },
});

gsap.from(".banner_images", {
  scale: 0,
  rotate: 120,
  scrollTrigger: {
    trigger: ".banner_images",
    scroller: "body",
    start: "top 74%",
    // markers: true,
    end: "top 50%",
    scrub: true,
  },
});

gsap.from(".fifth_section .heading_5", {
  x: -1200,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".fifth_section .heading_5",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.from(".fifth_section .common_para5", {
  x: 900,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".fifth_section .common_para5",
    scroller: "body",
    //   markers: true,
    start: "top 60%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.from(".mysterybox_images", {
  scale: 0,
  rotate: 180,
  scrollTrigger: {
    trigger: ".mysterybox_images",
    scroller: "body",
    start: "top 110%",
    //   markers: true,
    end: "top 60%",
    scrub: true,
  },
});

// gsap.from(".content", {
//     // scale:0,
//     x:-1800,
//     duration:2,
//     delay: .60,
//     // rotate:180

//   });

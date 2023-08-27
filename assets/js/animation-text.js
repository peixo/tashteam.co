import gsap from "gsap";

const tl = gsap.timeline({ defaults: { ease: "power1.out" }});
tl.to('.text', {y: '0%', duration: 0.75, stagger: 0.25 });
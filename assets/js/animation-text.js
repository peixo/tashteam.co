import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ 
    defaults: { ease: "power1.ease" },
    });

tl.to('.lona', {y: '-1000', duration: 0.45, delay: 0.5})
tl.to('.text', {y: '0%', duration: 0.35, stagger: 0.25, delay: 0.1 }, '-=1');


const st = gsap.timeline({
    scrollTrigger: {
        trigger: '.section1',
        start: 'center bottom',
    }
})
tl.from('.img_header', {scale: 1.1, opacity: 0, duration: 1.5})

// gsap.to('img_header', {
//     scrollTrigger: {
//         trigger: 'img_header',
//         start: -500,
//         markers: true
//     }
// })


import gsap from "gsap"

let tl = gsap.timeline({ repeat: -1 });

tl.fromTo(".clip", { y: -180 }, { y: 0, duration: 2 })


// tl.to("#logo", {
//         duration: 2,
//         scale: 35,
//         y: 800,
//         ease: "power2.out",
//         yoyo: true,
//         });

tl.to("#logo", {
        duration: 2,
        scale: 100,
        y: 1200,
        ease: "ease.out",
        yoyo: true,
});

tl.to("#logo",{
    duration:0.1,
    scale:90,
    y: 1200,
    ease: "ease.out",
    yoyo: true,
})
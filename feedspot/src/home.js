import gsap from 'gsap';
let t1 = gsap.timeline({
})

function animation(){
    t1.to("#yellow1",{
        top:"-100%",
        delay:0.5,
        easy:"expo.out",
        duration:0.3,
        onStart: function() {
            // Set display to flex when the animation starts
            document.querySelector("#loader h1").style.display = "inline";
        }
    })   
    t1.to("#yellow2",{
        top:"-100%",
        easy:"expo.out",
        delay:1.1,
        duration:0.4
        // delay:0.5,
    },"anim")
    t1.to("#loader h1",{
        color:"black",
        delay:1.1,
        duration:0.4,
    },"anim")
}
animation()



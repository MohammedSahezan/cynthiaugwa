

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



function circule() {
    window.addEventListener("mousemove",function(de){
        document.querySelector("#minicircle").style.transform = `translate(${de.clientX}px, ${de.clientY}px)`

    })
};
circule();

function firstaniem() {
    var tl = gsap.timeline();
    tl.from(".nav",{
            y :"-10",
            opacity : 0,
            duration:1.5,
            ease: Expo.easeInOut
    })
    .to(".new_bound",{
        y:"0",
        duration:2,
        ease:Expo.easeInOut ,
        stagger :.2
    })
    // .from(".hero_show",{
    //     y :-10,
    //     opacity : 0,
    //     delay : -.5,
    //     duration:1.5,
    //     ease: Expo.easeInOut
    // })
};
firstaniem();






let time = document.getElementById("timezone");
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000);


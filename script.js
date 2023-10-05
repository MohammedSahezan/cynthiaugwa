

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
        delay:-1,
        ease:Expo.easeInOut ,
        stagger :.2
    })
    
};
firstaniem();

function circulemove(){
    // define default valse
    var xscale = 1;
    var yscale = 1;


    var xprave = 0;
    var yprave = 0;
    window.addEventListener("mousemove",function(dets){
            var diffx = dets.clientX - xprave;
            var diffy = dets.clientY - yprave;
            xprave = dets.clientX;
            yprave = dets.clientY;

            gasp.utils.clamp(1.2,.8,diffx);
            gsap.utils.clamp(1.2,.8)
    })
};
circulemove();






let time = document.getElementById("timezone");
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000);


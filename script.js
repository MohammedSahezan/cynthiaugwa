

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});





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


function circule() {
    window.addEventListener("mousemove",function(de){
        document.querySelector("#minicircle").style.transform = `translate(${de.clientX}px, ${de.clientY}px) `

    })
};
circule();

// function circuleanime(){
//     // define default valse
//     var xscale = 1;
//     var yscale = 1;


//     var xprave = 0;
//     var yprave = 0;
//     window.addEventListener("mousemove",function(dets){
//         xscale = gsap.utils.clamp(.8,1.2,dets.clientX-xprave);
//         yscale = gsap.utils.clamp(.8,1.2,dets.clienty-yprave);
//             // var diffx = dets.clientX - xprave;
//             // var diffy = dets.clientY - yprave;
//             xprave = dets.clientX;
//             yprave = dets.clientY;

//             // gasp.utils.clamp(1.2,.8,diffx);
//             // gsap.utils.clamp(1.2,.8)

//             circule(xscale,yscale);
//     })
// };
// circuleanime();







let time = document.getElementById("timezone");
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000);


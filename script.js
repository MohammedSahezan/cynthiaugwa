

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function circule() {
    window.addEventListener("mousemove",function(de){
        document.querySelector("#minicircle"),style.transform = `translate(${de.clientX}px, ${de.clientY}px)`

    })
};
circule();
// function circule() {
//     window.addEventListener("mousemove",function(dets){
//         document.querySelector("#minicircle").style.transform = `translate(${dets.clientx}px, ${dets.clienty}px)`;
//     });
// };

// circule();




let time = document.getElementById("timezone");
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000);


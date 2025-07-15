console.log("hello World !")

path=`M 100 100 Q 600 100 1180 100`
finalPath=`M 100 100 Q 600 100 1180 100`

const string=document.querySelector(".string");


string.addEventListener("mousemove",function(dets){
    // console.log(dets.x)
    path=`M 100 100 Q ${dets.x} ${dets.y} 1180 100`,
    gsap.to("svg path",{
        attr:{d:path},
        ease:"power3.out",
        duration:0.5

    })
})


string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease: "elastic.out(1,0.3)"
    })
})
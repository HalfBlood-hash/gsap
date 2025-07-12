console.log("hello World !")


gsap.to(".page2 h1",{
    transform: "translateX(-150%)",
    scrollTrigger:{
        trigger:".page2",
        markers:true,
        start:"top 0%",
        end:"top -200vh",
        pin:true,
        scrub:2 


    }

})
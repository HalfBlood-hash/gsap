
console.log("hello world")






const tl=gsap.timeline();

tl.from("nav",{
    y:-30,
    duration:1,
    delay:1,
    opacity:0
    
})
tl.from("h4",{
    y:-30,
    duration:1,
   
    opacity:0,
    stagger:1,
    
})
tl.from("h1",{
    color:"red",
    opacity:0,
    duration:1,
  
    y:30,
    
})

tl.to("#box",{
    x:1000,
    duration:3,
    
    rotate:360,
    backgroundColor:"blue",
    scale:0.5,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true,

})
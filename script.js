gsap.to("#nav",{
    backgroundColor:"black",
    height:" 45px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -6%",
        end:"top -15%",
        scrub:1,
    }
})
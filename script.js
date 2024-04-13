let crsr=document.querySelector(".cursor");

document.addEventListener("mousemove",(info)=>{
    console.log(info.x);
    console.log(info.y);
    
    crsr.style.top=info.y+"px";
    crsr.style.left=info.x+"px";
})

let blur=document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(info)=>{
    console.log(info.x);
    console.log(info.y);
    
    blur.style.top=info.y-150+"px";
    blur.style.left=info.x-150+"px";
})


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


gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top1 -25%",
        end:"top -70%",
        scrub:3,
    }


})


gsap.from(".about-us",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 98%",
        end:"top 85%",
        scrub:2,
    }

})
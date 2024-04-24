let crsr=document.querySelector(".cursor");

document.addEventListener("mousemove",(info)=>{
    // console.log(info.x);
    // console.log(info.y);
    
    crsr.style.top=info.y+"px";
    crsr.style.left=info.x+"px";
})

let blur=document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(info)=>{
    // console.log(info.x);
    // console.log(info.y);
    
    blur.style.top=info.y-200+"px";
    blur.style.left=info.x-200+"px";
})

let allNavLi= document.querySelectorAll("#nav ul li");
allNavLi.forEach(ele => {
    ele.addEventListener("mouseenter",()=>{
        crsr.style.scale="2";
        crsr.style.border="solid 2px white"
        crsr.style.backgroundColor="transparent";
    })
    ele.addEventListener("mouseleave",()=>{
        crsr.style.scale="1";
        crsr.style.border="none"
        crsr.style.backgroundColor=" #95C11E";
    })
});

gsap.to("#nav",{
    backgroundColor:"black",
    height:" 90px",
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
    y:150,
    opacity:0,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end:"top 75%",
        scrub:2,
    }

})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    stagger:.2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:true,
    }

})

gsap.from(".leftQuote",{
    x:-50,
    y:-50,
    scrollTrigger:{
        trigger:".leftQuote",
        scroller:"body",
        // markers:true,
        start:"top 17%",
        end:"top 12%",
        scrub:3,
        
    }
})
gsap.from(".rightQuote",{
    x:50,
    y:50,
    scrollTrigger:{
        trigger:".leftQuote",
        scroller:"body",
        // markers:true,
        start:"top 17%",
        end:"top 12%",
        scrub:3,
    }
    
})


gsap.from(".page4 h1",{
    y:43,
    
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2,
    }
})
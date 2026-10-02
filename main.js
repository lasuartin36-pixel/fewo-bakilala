(function(){
if(matchMedia('(prefers-reduced-motion:reduce)').matches||!window.gsap){document.querySelector('#frame img').style.clipPath='none';return;}
gsap.registerPlugin(ScrollTrigger);
var l=new Lenis();l.on('scroll',ScrollTrigger.update);
gsap.ticker.add(function(t){l.raf(t*1000)});gsap.ticker.lagSmoothing(0);
gsap.from('.hero .ln span',{yPercent:110,duration:1,stagger:.12,ease:'power4.out',delay:.15});
if(!matchMedia('(max-width:760px)').matches)gsap.fromTo('#frame img',{clipPath:'inset(14% 24% round 28px)'},
{clipPath:'inset(0% 0% round 0px)',ease:'none',scrollTrigger:{trigger:'#frame',start:'top 85%',end:'top 5%',scrub:true}});
gsap.utils.toArray('.gal figure').forEach(function(f){gsap.from(f,{y:50,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:f,start:'top 90%'}})});
})();

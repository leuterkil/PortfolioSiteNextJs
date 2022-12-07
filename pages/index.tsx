import type { NextPage } from 'next'
import Head from 'next/head'
import FirstSection from '../components/firstSection/FirstSection'

import { useEffect, useRef } from 'react';
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin';
import SecondSection from '../components/secondSection/SecondSection'
import ThirdSection from '../components/thirdSection/ThirdSection';
import FourthSection from '../components/fourthSection/FourthSection';
import CVDownload from '../components/CVDownload';




gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const Home: NextPage = () => {



  const comp = useRef(); // create a ref for the root level element (we'll use it later)
  useEffect(() => {
  
    // -- ANIMATION CODE HERE --

let ctx = gsap.context(() => {
    
  // all our animations can use selector text like ".box" 
  // and it's properly scoped to our component

  let panels = gsap.utils.toArray(".section"),
    scrollTween:any;

    function goToSection(i:number) {
      console.log(i*innerHeight);
      scrollTween = gsap.to(window, {
        scrollTo: {y: i * innerHeight, autoKill: false},
        duration: 0.5,
        onComplete: () => scrollTween = null,
        overwrite: true
      });
    }

    const masterTl = gsap.timeline({paused:true});
    
    //gsap.set(".avatar",{y:585,opacity:0})
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".avatar",
        toggleActions: "restart pause restart pause"
      }, 
    });

    //timelines
    const bioTl = gsap.timeline({
      scrollTrigger:{
        trigger:'.timeline-item',
        toggleActions:"restart pause restart pause"
      }
    });

    bioTl.fromTo('.timeline-content',{opacity:0,x:-132},{opacity:1,x:0,duration:1,stagger:0.3},"<+=0.3");

    

    

    document.querySelectorAll('.timeline-content').forEach((timeline,i)=>{
      let timelineItemTl = gsap.timeline({paused:true});
      let jobDesc = timeline.querySelector('.job-description')
      let Icon = timeline.querySelector('.iconEx')
      let hover = timelineItemTl.to(jobDesc,{height:200},"<+=0.25").to(Icon,{rotate:180},"<=0").to(jobDesc,{"--h":"100%"}).to(jobDesc,{"--wi":"100%"});
      timeline.querySelector('.more')?.addEventListener('mouseenter',()=>{
        hover.play();
      })
      timeline?.addEventListener('mouseleave',()=>{
        hover.reverse();
      })
    })
    document.querySelectorAll('.project').forEach((project,i)=>{
      let timelineItemTl = gsap.timeline({paused:true});
      let projImg = project.querySelector('.project-img')
      let projDet = project.querySelector('.project-det')
      let hover = timelineItemTl.to(projImg,{top:"-200",opacity:0},"<+=0.25").to(projDet,{bottom:'100',opacity:1},"<=0");
      project?.addEventListener('mouseenter',()=>{
        hover.play();
      })
      project?.addEventListener('mouseleave',()=>{
        hover.reverse();
      })
    })

    const skillTl = gsap.timeline({
        scrollTrigger:{
          trigger:'.skill',
          toggleActions:"restart pause restart pause"
        }
    });

    skillTl.fromTo('.skill',{opacity:0,x:-132},{opacity:1,x:0,duration:1,stagger:0.5},"<+=0.3")

    const tl2 = gsap.timeline({
      repeat:-1,
      yoyo:true
    })
    tl2.fromTo('.Js3D',{y:0},{y:20,duration:2,ease:'sine'})
    const tl3 = gsap.timeline({
      repeat:-1,
      yoyo:true
    })
    tl3.fromTo('.kbrd3D',{y:0},{y:20,duration:2,ease:'sine'})
    
    tl.fromTo('.avatar',{opacity:0,y:210},{opacity:1,y:1,duration:1})
    .fromTo('.blue-ball',{opacity:0,y:110},{opacity:1,y:0,duration:1},0)
    .fromTo('.yellow-ball',{opacity:0,y:110},{opacity:1,y:0,duration:.5},0)
    .fromTo('.Js3D',{opacity:0,y:110},{opacity:1,y:0,duration:.5},"-=0.1")
    .fromTo('.kbrd3D',{opacity:0,y:110},{opacity:1,y:0,duration:.5},"+=0.1")
    .add(tl2)
    .add(tl3,"<")


     
      let media = gsap.matchMedia();

      media.add("(min-width: 1000px)",()=>{
        panels.forEach((panel, i) => {
          ScrollTrigger.create({
            //@ts-ignore
            trigger: panel,
            start: "top bottom",
            end: "+=200%",

            onToggle: (self:any) => self.isActive && !scrollTween && goToSection(i)
          });
        });
        // ScrollTrigger.create({
        //   start: 0, 
        //   end: "max",
        //   snap: 1 / (panels.length-1)
        // })
        ScrollTrigger.normalizeScroll(true);
      })

      

  
  
  
}, comp);
    
    return () => { 
      // cleanup code (optional)
      ctx.revert();
    }
    
  }, []); 
  return (
    // @ts-ignore
    <div ref={comp}>
      <CVDownload/>
    <div id='firstSec'  className='h-lg-100-vh bg-abstract section'>
      <div className='container w-80'>
        <Head>
          <title>Eleftherios Charissopoulos</title>
          <meta name="description" content="Eleftherios Charissopoulos" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <FirstSection></FirstSection>
      </div>
    </div>
    <div id='secondSec' className='h-lg-100-vh section'>
      {/* Skills */}
      <div className='container w-80'>

      <SecondSection/>
      </div>
    </div>
    {/* Work experience */}
    <div id='thirdSec' className=' h-lg-100-vh section'>
     
      <div className='container w-80'>

      <ThirdSection/>
      </div>
    </div>
    <div id='fourthSec' className=' bg-random-lines h-lg-100-vh section'>
     
      <div className='container w-90'>

      <FourthSection/>
      </div>
    </div>
    </div>

  )
}

export default Home

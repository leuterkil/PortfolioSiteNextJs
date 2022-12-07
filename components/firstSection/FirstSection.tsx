import { FC } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import {Divider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import userData from '../../db/userData';
import Link from 'next/link';


const location = userData.personalInfo.location;
const currentPosition = userData.workExperience[userData.workExperience.length-1];


const FirstSection:FC = ()=>{
    return(
        <div  className='d-lg-flex justify-space-between h-lg-100-vh align-items-center '>
        <div className='col-lg-5 d-flex h-100 align-items-center justify-center pos-rel pt-lg-0 pt-5 mb-5'>

{/* Circles and papers */}


          <div className='pos-rel' style={{height:'fit-content'}}>
            {/* <div className='pos-abs h-16-rem w-16-rem btn-circle bg-primary-200 blue-ball' style={{bottom:"-89px",left:"0",zIndex:'1'}}></div>
            <div className='pos-abs h-9-rem w-9-rem btn-circle bg-secondary-400 yellow-ball' style={{bottom:"-129px",left:"153px"}}></div> */}
            <img   src={'/img/JS.png'} className="Js3D"/>
            <img   src={'/img/keyboard.png'} className="kbrd3D"/>
            <div className='avatar w-15-rem h-15-rem h-sm-20-rem w-sm-20-rem w-lg-32-rem h-lg-32-rem'  >
              <Image objectFit='scale-down' src={'/img/Avatar_3D.png'} layout='fill'  quality="100" className="bg-primary btn-circle" style={{zIndex:'2'}}/>
            </div>
          </div>
        </div>
        <div className='text-center pos-rel w-100 col-lg-6'>
            <h1 className='text-white fs-lg-0 fs-2 '>
              <div>
                <span>
                Hello World I&apos;m <span className='bg-primary-700'>Eleftherios Charissopoulos</span> and I am </span>
                <span>
              <Typewriter
                options={{
                  strings: userData.UI.typewriterWords,
                  autoStart: true,
                  // @ts-ignore
                  pauseFor:4500,
                  loop: true,
                }}/>
                </span>
                <div className='fs-4 fw-200 text-link-grey-200'>
                  Based in city of {location.city}, {location.country}
                </div>
                </div>
        </h1>
        <Button variant="contained" href="mailto:echarissopoulos@gmail.com">Contact</Button>
        <Divider className='my-3 text-white'>Or Reach Me</Divider>
        <div className='d-flex gap-15 justify-center  text-white'>
                <Link href="https://www.linkedin.com/in/eleftherios-charissopoulos/"><LinkedInIcon fontSize='large'/></Link>
                <Link href={'https://github.com/leuterkil'}><GitHubIcon fontSize='large'/></Link>
                <Link href={'https://twitter.com/CharissopoulosL'}><TwitterIcon fontSize='large'/></Link>
                </div>
                <Paper className='text-center pos-abs px-4 py-3 w-40 d-none d-lg-block' style={{bottom:'-208px',right:"30%",zIndex:'3'}} elevation={3}>
            {currentPosition.logo && <div style={{background:`url(${currentPosition.logoKeyvoto || currentPosition.logo})`,width:'50px',height:'50px',backgroundPosition:'center',backgroundSize:'cover'}} className="btn-circle mx-auto"></div>}
            <div className="fs-4 bold">Current Position</div>
            <div className='fs-6 text-link-grey-400'>{currentPosition.jobRole} @ {currentPosition.company}</div>
          </Paper>
    </div>
    
    <div className="scroll-downs d-lg-block d-none">
  <div className="mousey">
    <div className="scroller"></div>
  </div>
</div>
        </div>
    )
}

export default FirstSection;
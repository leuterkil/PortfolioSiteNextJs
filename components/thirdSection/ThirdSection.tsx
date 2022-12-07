import React from 'react'
import {Player,Controls} from '@lottiefiles/react-lottie-player';
import  userData  from '../../db/userData'
import Moment from 'react-moment';
import Image from 'next/image';
import Card from '@mui/material/Card';
import BusinessIcon from '@mui/icons-material/Business';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NextLink from 'next/link';
import { Link } from '@mui/material';


const workingExp = userData.workExperience;

export default function ThirdSection() {
  return (
    //@ts-ignore
    <div className="pt-4 pos-rel">
          <Player
      autoplay
      loop
      className='pos-abs right-0 d-none d-lg-block'
      src="https://assets3.lottiefiles.com/packages/lf20_vybwn7df.json"
      style={{ bottom:"-186px",height: '400px', width: '400px' }}
    >
    </Player> 
    <Player
      autoplay
      loop
      className='pos-abs top-50 d-none d-lg-block'
      src="https://assets3.lottiefiles.com/packages/lf20_em3fxxfe.json"
      style={{ height: '400px', width: '400px' }}
    >
    </Player> 
      <h1 className='text-center fs-1 mb-3'>Where I worked all this time 🏢</h1>
      {/* sdas */}
       <ul className="timeline timeline-centered">
                {workingExp.map(work=>(
                                    <li key={work.company} className="timeline-item">
                                    <div className="timeline-info">
                                        <span><Moment format='MMMM D, YYYY'>{work.from}</Moment></span>
                                    </div>
                                    <div className="timeline-marker "></div>
                                    <div className="timeline-content">
                                        <div className=' justify-space-between align-items-center'>
                                        <Image src={work.logo} width="50px" height="50px"/>
                                            <h3 className="timeline-title my-1">  {work.jobRole}</h3>
                                            <Link href={work.site} className='d-flex align-items-center text-link-grey-400 fs-6 company'>
                                                <BusinessIcon  />
                                                <div>{work.company}</div>
                                            </Link>
                                            {/* {work.logo && <img src={work.logo} className="w-2-rem h-2-rem btn-circle mt-2 mr-4" alt="" />} */}
                                        </div>
                                        <div className='d-flex align-items-center more-btn mt-3'>
                                             <span className='more'>More</span> <ExpandMoreIcon className='iconEx'/>
                                        </div>
                                        <div style={{height:0,overflow:"hidden"}} className='job-description'>{work.jobDescription}
                                        </div>

                                    </div>
                                </li>
                ))}
            </ul>
    </div>
    // <div className='pt-6'>
        
    //     <div className='d-flex w-100 flex-wrap justify-space-around'>
    //     {workingExp.map(work=>(
    //         <Card className='col-3 py-2 px-2 h-9-rem'>
    //         <div className='d-flex gap-20 h-100'>
    //             <div className='d-flex col-3 justify-center ' style={{height:"fit-content"}}>
    //                 <Image className='btn-sharp' objectFit='scale-down' width="128px" height="128px" src={work.logo || '/img/testIMG.jpg'}/>
    //             </div>
    //             <div className='col-9 d-flex flex-column justify-space-between pt-2'>
    //                 <div>
    //                     <h4 className='m-0'>{work.jobRole}</h4>
    //                     <div className='d-flex align-items-center text-link-grey-400 fs-6'>
    //                         <BusinessIcon  />
    //                         <div>{work.company}</div>
    //                     </div>
    //                 </div>
                
    //             <div className='d-flex align-items-center'>
    //                 More <ExpandMoreIcon/>
    //             </div>
                
    //             </div>
                
    //         </div>
    //         </Card>
    //     ))}
    //     </div>
        
    // </div>
  )
}

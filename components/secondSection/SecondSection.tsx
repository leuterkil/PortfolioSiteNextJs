import React from 'react'
import {Player,Controls} from '@lottiefiles/react-lottie-player'
import userData from '../../db/userData'

export default function SecondSection() {

  const capabilities = userData.personalInfo.capabilities;

  return (
    <div className='pt-5 pos-rel '>
    <Player
      autoplay
      loop
      className='h-15-rem w-15-rem h-sm-19-rem w-sm-19-rem'
      src="https://assets4.lottiefiles.com/private_files/lf30_zSGy1w.json"
      // style={{ height: '300px', width: '300px' }}
    >
    </Player> 

    <h1 className='text-center fs-1'>What I am capable to Do</h1>
    <div className='d-flex flex-wrap justify-space-evenly '>
      {capabilities.map((capability:any)=>(
        <div className='col-lg-5 skill'>
          <h2>{capability.title}</h2>
          <p className='w-90'>{capability.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

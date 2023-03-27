import React from 'react';
import Image from 'next/image';
import Button  from '@mui/material/Button';
import  userData  from '../../db/userData'

const projects = userData.projects;
//box-shadow: ;
export default function FourthSection() {
  return (
    <div className='pt-4'>
    <h1 className='text-center text-white'>Some Projects That I Made 👨🏻‍💻</h1>
    <div className='d-flex justify-space-around pt-3 flex-wrap'>
      
      {projects.map(project=>(
      <div key={project.title} className='col-md-4'>
      <div className='d-flex justify-center pos-rel project'>
          <Image objectFit='contain' src={project.img}  className='btn-sharp project-img' style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}  width="300px" height="300px"/>
          <div className='project-det pos-abs w-60 bottom-0 text-white' style={{opacity:0}}>
              {project.description}
              {project.link && <Button variant='contained' className='d-block w-100 mt-2 text-center' href={project.link}>More</Button> }
          </div>
      </div>

      <h3 className='text-center text-white'>{project.title}</h3>
  </div>
      ))}

  </div>
    </div>

  )
}

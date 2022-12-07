import { NextPage } from 'next'
import React from 'react'
import userData from '../db/userData'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Divider from '@mui/material/Divider';
import Moment from 'react-moment';

const CV:NextPage = ()=> {
  return (
    <div className='container w-lg-80 w-95 mb-4'>
        <h1 className='text-center text-primary mb-2'>Eleftherios Charissopoulos</h1>
        <div className='text-center italics'>{userData.personalInfo.location.city}, {userData.personalInfo.location.country}</div>
        <div className='mt-4 d-flex justify-center gap-15'>
            <div className='d-flex gap-5'>
                <EmailIcon/>
                <span>echarissopoulos@gmail.com</span>
            </div>
            <div className='d-flex gap-5'>
                <LinkedInIcon/>
                <span>eleftherios-charissopoulos</span>
            </div>
            <div className='d-flex gap-5'>
                <GitHubIcon/>
                <span>leuterkil</span>
            </div>
            <div className='d-flex gap-5'>
                <TwitterIcon/>
                <span>@CharissopoulosL</span>
            </div>
        </div>
        <p className='text-center text-link-grey italics fs-3 bold'>"The way to get started is to quit talking and begin doing – Walt Disney”"</p>

        <Divider className='mt-6'><p className='fs-1 bold text-primary'>Summary</p></Divider>
        <div dangerouslySetInnerHTML={{__html:userData.summary}}/>
        <Divider className='mt-6'><p className='fs-1 bold text-primary'>Education</p></Divider>
        <div>
            {userData.personalInfo.education.map(edu=>(
                <>
                <div className='d-flex justify-space-between'>
                    <p className='fs-3 bold underline'>{edu.school}</p>
                    <p className='text-primary italics'>{edu.location}</p>
                </div>
                <div className='d-flex justify-space-between'>
                    <p className='fs-5 m-0 bold'>{edu.title}</p>
                    <p className='m-0 italics'><Moment format='MMM YYYY'>{edu.from}</Moment> - <Moment format='MMM YYYY'>{edu.to}</Moment></p>
                </div>
                <div>
                    <p>GPA ({edu.GPA})</p>
                </div>
                </>
            ))}
        </div>
        <Divider className='mt-6'><p className='fs-1 bold text-primary'>Work Experience</p></Divider>
        <div>
            {userData.workExperience.map(work=>(
                <>
                <div className='d-flex justify-space-between'>
                    <p className='fs-3 bold underline'>{work.company}</p>
                    <p className='text-primary italics'>{work.location}</p>
                </div>
                <div className='d-flex justify-space-between'>
                    <p className='fs-5 m-0 bold'>{work.jobRole}</p>
                    <p className='m-0 italics'><Moment format='MMM YYYY'>{work.from}</Moment> { work.to && <> <span>-</span> 
                    
                    {work.to ==='Present' ? work.to : <Moment format='MMM YYYY'>{work.to}</Moment>}
                    </>
                    
                    }</p>
                </div>
                <div>
                    <p>{work.jobDescription}</p>
                </div>
                </>
            ))}
        </div>
        <Divider className='mt-6'><p className='fs-1 bold text-primary'>Skills</p></Divider>
        <div>
            <p className='fs-3 bold'>Soft</p>
            <ul>
           {userData.personalInfo.skills.soft.map(soft=>(
                <li>{soft}</li>
           ))}
           </ul>
            <p className='fs-3 bold'>Hard</p>
            <ul>
           {userData.personalInfo.skills.hard.map(hard=>(
                <li> <span className='bold'>{hard.section}</span> : {hard.skills.join()} </li>
           ))}
           </ul>
        </div>
        <Divider className='mt-6'><p className='fs-1 bold text-primary'>Projects</p></Divider>
        <div>
            {userData.projects.map(project=>(
                <>
                <p className='text-link-grey bold underline fs-3'>{project.title}</p>
                <div>{project.description}</div>
                </>
            ))}
        </div>

        <Divider className='mt-6'><p className='fs-1 bold text-primary'>Courses</p></Divider>
        <div>
            {userData.courses.map(course=>(
                <>
                    <div className='d-flex justify-space-between'>
                    <p className='fs-3 bold underline'>{course.title}</p>
                    <p className='text-primary italics'>{course.provider}</p>
                    </div>
                    <div className='d-flex justify-space-between'>
                        <p className='fs-5 m-0 bold'>{course.description}</p>
                    </div>
                </>
            ))}
        </div>
        <Divider className='mt-6'><p className='fs-1 bold text-primary'>Participations</p></Divider>
        <div>
            {userData.personalInfo.participations.map(participation=>(
                <>
                    <div className='d-flex justify-space-between'>
                    <p className='fs-3 bold underline'>{participation.title}</p>
                    </div>
                    <div className='d-flex justify-space-between'>
                        <p className='fs-5 m-0 bold'>{participation.description}</p>
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default CV;

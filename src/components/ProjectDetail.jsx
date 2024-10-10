import React from 'react'
import { useLocation } from 'react-router-dom';

function ProjectDetail() {
    const location = useLocation();
    const { name, src, details, href } = location.state || {};
  return (
    <div className='container project_main_container py-4'>
        <div className="title">
            <h3>{name}</h3>
        </div>
        <div className="projectDetailImage my-4">
            <a href={href} target='_blank'>
            <img src={src} alt="" />
            </a>
        </div>
        <a href={href} className='github_btn'>Visit</a>
        <div className="container project_detail_container py-5 fs-5">
            <ul>
            {details.map((item)=>(
                <li className='py-2'>{item}</li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default ProjectDetail
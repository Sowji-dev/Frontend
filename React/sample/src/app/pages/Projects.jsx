import React from 'react'
import { Link, Outlet } from 'react-router-dom';
function Projects() {
  return (
    <div>
      <div className='prjcts d-flex w-75 mx-auto'>
           <Link to ='/projects/des3d'>Our 3D Designs</Link> 
          <Link to ='/projects/site'>Our Completed Site Pictures</Link> 
           <Link to ='/projects/working'>Our Working Images</Link> 
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Projects

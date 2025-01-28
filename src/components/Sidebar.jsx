import React from 'react';
import { Link , NavLink } from 'react-router-dom';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/my-dummy';
import logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/SLT-Logo.svg';

const Sidebar = () => {
  return (
    <div>
      <div className='w-12 h-12 absolute right-0 m-5 ' style={{left : '-8%' , top : '0.7%'}} >
        <Link to="/" className = 'items-center'>
          <img src={logo} className='w-10 h-auto left-0 right-0 m-auto absolute hover:bg-slate-100 rounded-md' />
          <p className='absolute top-16 text-center font-medium'>Peo Track</p>
        </Link>

        <div className='mt-100 absolute top-28 left-3 w-5 items-center' >

            {links.map((item)=>(
              <div key={item.title} className='justify-between ' >
                {item.links.map((link)=>(
                  <TooltipComponent  content={`${link.name}`} position='RightCenter' >
                    < NavLink className='m-1 text-xl hover:bg-slate-100 rounded-md'
                      to={`/${link.name}`}
                      onClick={()=>{}}
                    >
                      {link.icon}
                    </NavLink>
                  </TooltipComponent>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
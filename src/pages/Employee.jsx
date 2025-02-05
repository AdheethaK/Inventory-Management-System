import React from 'react'

import employee_img from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/employee1.png';

const Employee = () => {
  return (
    <div className='flex flex-row gap-1 w-64' style={{ width : '1300px' ,  height : '640px' }} >
      
      {/* The Employee Form */}
      <div className=' basis-1/3 grid grid-cols-8 gap-0 overflow-x-auto scroll-smooth relative' >

        {/* Form */}
        <div className='col-start-1 col-span-7 relative' >

          {/* The Employee Form Title */}
          <div className=' grid grid-cols-12 gap-1 h-12 fixed bg-white w-96 pb-5' style={{ zIndex : '1000' }}>
          <div className='col-start-1 col-span-1 bg-sky-200 rounded-md w-6 h-12' ></div>
                <p className='col-start-2 col-span-9 align-middle text-3xl absolute font-bold' 
                style={{ top : '6px' , bottom : '0px' }}
                    >EMPLOYEE</p>
                {/* <div className='col-start-11 col-span-2 w-11 h-auto text-3xl left-0 right-0 m-auto hover:bg-slate-100 rounded-md' ><TbTruckDelivery /></div> */}
                <img src={employee_img} className='col-start-11 col-span-2 w-10 h-auto left-0 right-0 m-auto hover:bg-slate-100 rounded-md' />
          </div>

          {/* The Employee Form Body */}
          <div></div>

        </div>

        {/* Button Section */}
        <div></div>

      </div>

      {/* The Employee Table */}
      <div className='bg-white basis-2/3 p-1 overflow-x-auto scroll-smooth border-white' style={{ scrollbarWidth : '10px' }} >

      </div>
    </div>
  )
}

export default Employee
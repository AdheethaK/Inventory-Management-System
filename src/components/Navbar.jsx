import React from 'react';

import { FiSettings } from 'react-icons/fi';
import { TbCalendarTime } from "react-icons/tb";
import { RiNotification3Fill } from "react-icons/ri";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.png';

const Navbar = () => {
  return (
    <div className='grid grid-cols-5 gap-2 place-items-stretch' >
      {/* The Greeting Text */}
      <div className='col-start-1 col-span-2 h-3 p-8 relative'>
        <div className=" h-3 p-5 absolute items-center" style={{ width : '450px' , bottom : '0px' , top : '0px' , left : '1px' , margin : 'auto'}}>
            <p className='text-2xl p-2 absolute top-0 bottom-7 left-0 right-0 m-auto'>Good Morning , James ! 😃</p>
        </div>
      </div>

      {/* The Search Bar */}
      <div className='col-start-3 col-span-2 h-3 pt-8 pb-8 pl-1 pr-1'>
        <div className='relative'>
              <div class="flex px-4 py-3 rounded-2xl border-2 border-black-500 overflow-hidden mx-auto bg-white relative bottom-5" 
                    style={{border : '1px solid #2E2328' , boxShadow : '2.8px 2.8px 0 0 #2E2328' ,  width : '490px' }}>
                <input type="text" placeholder="Search Something..."
                        class="w-full outline-none bg-transparent text-black text-sm" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-black-600 cursor-pointer">
                    <path
                      d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                    </path>
                </svg>
              </div>
          </div>
      </div>

      {/* Calendar , Chat , Notification& Profile */}
      <div className='col-start-5 h-3 p-8 relative'>
        <div className='grid grid-col-4 gap-4 items-center absolute ' style={{ top : '0px' , bottom : '0px' , left : '0px' , right : '0px' , margin : 'auto' }}>
          
          {/* Calendar */}
          <button type="button" 
                      className='col-start-1 h-10 w-10 text-xl p-2 mt-2 hover:drop-shadow-md hover:bg-light-gray text-black absolute top-2  rounded-sm'
                      style={{ background : 'white' }} >
                <TbCalendarTime />
          </button>

          {/* Notification */}
          <button type="button" 
                    className='col-start-2 h-10 w-10 text-xl p-2 mt-2 hover:drop-shadow-md hover:bg-light-gray text-black absolute top-2 rounded-sm'
                    style={{ background : 'white' }} >
                <RiNotification3Fill />
          </button>

          {/* Chat */}
          <button type="button" 
                    className='col-start-3 h-10 w-10 text-xl p-2 mt-2 hover:drop-shadow-md hover:bg-light-gray text-black absolute top-2 rounded-sm'
                    style={{ background : 'white' }} >
              <IoChatboxEllipsesOutline />
          </button>
          <div className='col-start-4 h-10 p-2 w-10'>
            <div className='p-3 hover:drop-shadow-md hover:bg-light-gray text-black rounded-full w-14 h-14 absolute top-1 cursor-pointer bg-gray-100 backdrop-blur-2xl'>
                        <div className='w-9 h-9 rounded-full absolute left-0 right-0 top-0 bottom-0 m-auto' >
                          <img className='rounded-full w-12 h-auto absolute left-0 right-0 top-0 bottom-0 m-auto' src={avatar} />
                        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
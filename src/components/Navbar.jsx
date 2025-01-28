import React from 'react';

import { FiSettings } from 'react-icons/fi';
import { TbCalendarTime } from "react-icons/tb";
import { RiNotification3Fill } from "react-icons/ri";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.png';

const Navbar = () => {
  return (
    <div className='grid grid-cols-3 gap-4' >
        {/* Greetings text  */}
        <div className=" h-5 p-8 relative">
          <p className='text-3xl p-5 absolute top-0 bottom-7 left-0 right-0 m-auto' >Good Morning , James !</p>
        </div>
        {/* The Search Bar  */}
        <div className=" h-5 p-8">
          <div className='relative'>
            <div class="flex px-4 py-3 rounded-2xl border-2 border-black-500 overflow-hidden max-w-md mx-auto bg-white relative bottom-5" 
                  style={{border : '1px solid #2E2328' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }}>
              <input type="email" placeholder="Search Something..."
                      class="w-full outline-none bg-transparent text-black text-sm" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-black-600 cursor-pointer">
                  <path
                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                  </path>
              </svg>
            </div>
          </div>
        </div>

        {/* The Notification & such section  */}
        <div className=" h-5 grid grid-cols-5 gap-4 col-span-1">
          <div className=" h-5">
              {/* The Tooltip for Calendar */}
              {/* <TooltipComponent content="Settings" position='BottomCenter' className='realtive' > */}
                <button type="button" 
                        className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-black absolute top-2'
                        style={{ background : 'white' , borderRadius : '50%' ,  border : '1px solid #2E2328' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }} >
                  <TbCalendarTime />
                </button>
              {/* </TooltipComponent> */}
          </div>
          <div className=" h-5">
            {/* The Tooltip for Notification */}
            {/* <TooltipComponent content="Settings" position='BottomCenter' className='realtive'  > */}
                <button type="button" 
                        className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-black absolute top-2'
                        style={{ background : 'white' , borderRadius : '50%' ,  border : '1px solid #2E2328' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }} >
                  <RiNotification3Fill />
                </button>
              {/* </TooltipComponent> */}
          </div>
          <div className="  h-5">
            {/* The Tooltip for Chat */}
            {/* <TooltipComponent content="Settings" position='BottomCenter' className='realtive' > */}
                <button type="button" 
                        className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-black absolute top-2'
                        style={{ background : 'white' , borderRadius : '50%' ,  border : '1px solid #2E2328' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }} >
                  <IoChatboxEllipsesOutline />
                </button>
              {/* </TooltipComponent> */}
          </div>
          <div className=" h-5 "></div>
          <div className=" h-5 ">
            {/* The Tooltip for Profile */}
                <div className='p-3 hover:drop-shadow-xl hover:bg-light-gray text-black rounded-full w-14 h-14 absolute top-1 cursor-pointer bg-gray-100 backdrop-blur-2xl'>
                    {/* <TooltipComponent content="Settings" position='BottomCenter' className='realtive top-5' > */}
                      <div className='w-10 h-10 rounded-full absolute left-0 right-0 top-0 bottom-0 m-auto' >
                      {/* <TooltipComponent content="Settings" position='BottomCenter' className='realtive top-5' > */}
                        <img className='rounded-full w-10 h-10 absolute left-0 right-0 top-0 bottom-0 m-auto' src={avatar} />
                      {/* </TooltipComponent> */}
                      </div>
                    {/* </TooltipComponent> */}
                </div>
              
          </div>
        </div>

        {/* <div className="col-span-2  bg-sky-400 h-5">04</div>
        <div className="bg-pink-500 h-5">05</div>
        <div className="bg-pink-500 h-5">06</div>
        <div className="col-span-2 bg-sky-400 h-5">07</div> */}
    </div>
  )
}

export default Navbar
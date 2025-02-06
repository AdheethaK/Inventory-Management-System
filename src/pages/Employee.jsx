import React from 'react'

import { MdAdd } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { TbReload } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";

import employee_img from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/employee1.png';
import information_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/information2.png';
import responsibility_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/responsibility6.png';
import agreement_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/agreement3.png';
import additional_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/additional2.png';

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
          <div className='overflow-x-auto scroll-smooth relative top-12'>
              
              {/* Basic Information */}
              <div className='pb-0'>

                  {/* Header */}
                  <div className='flex items-center pl-5' >
                    <img src={information_logo} className='w-7 h-7 inline-block' />
                    <p className='inline-block text-md font-extralight text-gray-300 pb-3 pl-2 pt-2'>BASIC INFORMATION</p>
                  </div>

                  {/* Form */}
                  <div className=' w-full pl-1'>
                      <form class="w-full max-w-sm h-auto">
                        {/* Employee Id */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Employee Id
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Employee Id" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Employee ID error label</p>
                            </div>
                        </div>
                        {/* Full Name */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Full Name
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Full Name" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Full Name error label</p>
                            </div>
                        </div>
                        {/* Job Title / Designation */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Job Title / Designation
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Job Title / Designation" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Job Title / Designation error label</p>
                            </div>
                        </div>
                        {/* Department */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Department
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Department" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Department error label</p>
                            </div>
                        </div>
                        {/* Work Location */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Work Location
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Work Location" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Work Location error label</p>
                            </div>
                        </div>
                        {/* Contact Number */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Contact Number
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="tel" placeholder="Enter Contact Number" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Contact Number error label</p>
                            </div>
                        </div>
                        {/* Email Address */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Email Address
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="email" placeholder="Enter Email Address" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Email Address error label</p>
                            </div>
                        </div>
                      </form>
                  </div>

              </div>

              {/* Inventory Assignment & Responsibility Details */}
              <div>
                {/* Header */}
                  <div className='flex items-center pl-5' >
                    <img src={responsibility_logo} className='w-8 h-8 inline-block' />
                    <p className='inline-block text-md font-extralight text-gray-300 pb-3 pl-2 pt-2'>INVENTORY ASSIGNMENT & RESPONSIBILITY DETAILS</p>
                  </div>

                  {/* Form */}
                  <div className=' w-full pl-1'>
                      <form class="w-full max-w-sm h-auto">
                        {/* Assigned Items */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                              <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                  Assigned Items
                              </label>
                            </div>
                            <div class="md:w-2/3">
                              <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Assigned Items" />
                              <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Assigned Items error label</p>
                            </div>
                        </div>
                        {/* Item Serial Number / SKU */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Item Serial Number / SKU
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Item Serial Number (SKU)" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Item Serial Number (SKU) error label</p>
                            </div>
                        </div>
                        {/* Assignment Date */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Assignment Date
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Assignment Date" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Assignment Date error label</p>
                            </div>
                        </div>
                        {/* Return Date (If Applicable) */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Return Date (If Applicable)
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Return Date (If Applicable)" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Return Date (If Applicable) error label</p>
                            </div>
                        </div>
                        {/* Item Condition at Assignment */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Item Condition at Assignment
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Item Condition at Assignment" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Item Condition at Assignment error label</p>
                            </div>
                        </div>
                        {/* Usage Purpose */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Usage Purpose
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Usage Purpose" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Usage Purpose error label</p>
                            </div>
                        </div>
                        {/* Approval Status */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Approval Status
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Approval Status" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Approval Status error label</p>
                            </div>
                        </div>
                        {/* Authorized By */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Authorized By
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Authorized By" />
                            <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Authorized By error label</p>
                            </div>
                        </div>
                      </form>
                  </div>
              </div>
              
              {/* Accountability & Agreement */}
              <div>
                {/* Header */}
                  <div className='flex items-center pl-5' >
                    <img src={agreement_logo} className='w-7 h-7 inline-block' />
                    <p className='inline-block text-md font-extralight text-gray-300 pb-3 pl-2 pt-2'>ACCOUNTABILITY & AGREEMENT</p>
                  </div>

                  {/* Form */}
                  <div className=' w-full pl-1'>
                      <form class="w-full max-w-sm h-auto">
                        {/* 01. Liability Agreement Signed ?  */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-5/6 pl-6">
                              <label class="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                  Liability Agreement Signed ? 
                              </label>
                            </div>
                            <div class="md:w-1/6">
                              <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-green-500 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="checkbox" placeholder="Enter Full Name" />
                            </div>
                        </div>
                        {/* 02. Loss / Damage Policy Acknowledged ?  */}
                        <div class="md:flex md:items-center mb-4">
                            <div class="md:w-5/6 pl-6">
                              <label class="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                  Loss / Damage Policy Acknowledged ? 
                              </label>
                            </div>
                            <div class="md:w-1/6">
                              <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-green-500 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="checkbox" placeholder="Enter Full Name" />
                            </div>
                        </div>
                        {/* 03. Remarks / Special Notes */}
                        <div class="md:flex md:items-center mb-5">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Remarks / Special Notes
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <textarea  rows="6"  class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Remarks / Special Notes" ></textarea>
                                    <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Remarks / Special Notes error label</p>
                                    {/* <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Special Terms & Conditions" /> */}
                                </div>
                            </div>
                      </form>
                  </div>
              </div>

              {/* Additional Details */}
              <div>
                {/* Header */}
                  <div className='flex items-center pl-5' >
                    <img src={additional_logo} className='w-7 h-7 inline-block' />
                    <p className='inline-block text-md font-extralight text-gray-300 pb-3 pl-2 pt-2'>ADDITIONAL DETAILS</p>
                  </div>

                  {/* Form */}
                  <div className=' w-full pl-1'>
                      <form class="w-full max-w-sm h-auto">
                          {/* 01. Attachments */}
                          <div class="md:flex md:items-center mb-4">
                              <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Attachments
                                </label>
                              </div>
                              <div class="md:w-2/3">
                                <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Attachments" />
                                <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Attachments error label</p>
                              </div>
                          </div>
                          {/* 02. Last Updated By */}
                          <div class="md:flex md:items-center mb-4">
                              <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Last Updated By
                                </label>
                              </div>
                              <div class="md:w-2/3">
                                <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-300 text-sm" id="inline-full-name" type="text" placeholder="Enter Last Updated By" />
                                <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Last Updated By error label</p>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>

          </div>

        </div>

        {/* Button Section */}
        <div className='col-start-8 fixed h-64 w-12 grid grid-rows-5 gap-2' style={{ left : '470px' , top : '400px' }}>

            {/* Add New ID */}
            <div id='supplier-btn-new-id' onClick={()=> alert("Hello I am add-new-id-btn :)")} data-tooltip-target="tooltip-light-newId" data-tooltip-style="light" data-tooltip-placement="right" className='btn h-10 row-start-1 row-span-1 cursor-pointer hover:shadow-lg' style={{ backgroundColor : 'lightblue' , borderRadius : '10%' ,  border : '1px solid #2E2283' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }} >
                <div className='w-10 h-10 pl-2 pt-1 inline-block text-3xl' style={{ color : '#2E2328' }}>
                    <MdAdd />
                </div>
            </div>
            {/* Tooltip for Add New ID */}
            {/* <div id="tooltip-light-newId" role="tooltip" class=" w-20 absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 border border-gray-200 rounded-lg shadow-xs opacity-0 tooltip">
                Add New ID
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div> */}
            {/* Search */}
            <div data-tooltip-target="tooltip-light-search" data-tooltip-style="light" data-tooltip-placement="right" className='btn h-10 row-start-2 row-span-1 cursor-pointer' style={{ backgroundColor : 'yellow' , borderRadius : '10%' ,  border : '1px solid #2E2283' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }} >
                <div className='w-10 h-10 pl-2 pt-1 inline-block text-3xl' style={{ color : '#2E2328' }}>
                    <IoSearchSharp />
                </div>
            </div>
            {/* Tooltip for Search */}
            {/* <div id="tooltip-light-search" role="tooltip" class=" w-20 absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 border border-gray-200 rounded-lg shadow-xs opacity-0 tooltip">
                Search
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div> */}
            {/* Save */}
            <div data-tooltip-target="tooltip-light-save" data-tooltip-style="light" data-tooltip-placement="right" className='btn h-10 row-start-3 row-span-1 cursor-pointer' style={{ backgroundColor : '#80FF84' , borderRadius : '10%' ,  border : '1px solid #2E2283' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }} >
                < div className='w-5 h-6 pl-2 pt-1 inline-block text-3xl' style={{ color : '#2E2328' }}>
                    <TiTick />
                </div>
                {/* <img src={save_logo} className='col-start-11 col-span-2 w-10 h-auto left-0 right-0 m-auto hover:bg-slate-100 rounded-md' /> */}
            </div>
            {/* Tooltip for Save */}
            {/* <div id="tooltip-light-save" role="tooltip" class="w-20 absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 border border-gray-200 rounded-lg shadow-xs opacity-0 tooltip">
                Save
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div> */}
            {/* Update */}
            <div data-tooltip-target="tooltip-light-update" data-tooltip-style="light" data-tooltip-placement="right" className='btn h-10 row-start-4 row-span-1 cursor-pointer' style={{ backgroundColor : 'plum' , borderRadius : '10%' ,  border : '1px solid #2E2283' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }} >
                <div className='w-10 h-10 pt-2 inline-block text-2xl' style={{ color : '#2E2328' ,paddingLeft : '11px' }}>
                    <TbReload />
                </div>
            </div>
            {/* Tooltip for Update */}
            {/* <div id="tooltip-light-update" role="tooltip" class="w-20 absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 border border-gray-200 rounded-lg shadow-xs opacity-0 tooltip">
                Update
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div> */}
            {/* Delete */}
            <div data-tooltip-target="tooltip-light-delete" data-tooltip-style="light" data-tooltip-placement="right" className='btn h-10 row-start-5 row-span-1 cursor-pointer' style={{ backgroundColor : 'red' , borderRadius : '10%' ,  border : '1px solid #2E2283' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }} >
                <div className='w-10 h-10 pl-2 pt-1 inline-block text-3xl' style={{ color : '#2E2328' }}>
                    <RiDeleteBin5Line />
                </div>
            </div>
            {/* Tooltip for Delete */}
            {/* <div id="tooltip-light-delete" role="tooltip" class="w-20 absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 border border-gray-200 rounded-lg shadow-xs opacity-0 tooltip">
                Delete
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div> */}

        </div>

      </div>

      {/* The Employee Table */}
      <div className='bg-white basis-2/3 p-1 overflow-x-auto scroll-smooth border-white' style={{ scrollbarWidth : '10px' }} >
          <div class="relative shadow-md sm:rounded-lg" >
              <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-white'>
                  <tr>
                    <th colSpan='7' className='px-6 py-4 text-center border-l-0 border-r-2 border-x-4 border-gray-300'>Basic Information</th>
                    <th colSpan='8' className='px-6 py-4 text-center border-l-0 border-r-2 border-x-4 border-gray-300'>Inventory Assignment & Responsibility Details</th>
                    <th colSpan='3' className='px-6 py-4 text-center border-l-0 border-r-2 border-x-4 border-gray-300'>Accountability & Agreement </th>
                    <th colSpan='2' className='px-6 py-4 text-center border-l-0 border-r-2 border-x-4 border-gray-300'>Additional Details</th>
                  </tr>
                  <tr className='sticky left-0 text-gray-500 font-thin border-white' style={{ fontSize : '11px' , lineHeight : '13px' }}>
                    {/* Basic Information */}
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Employee ID</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Full Name</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Job Title / Designation</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Department</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Work Location</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Contact Number</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Email Address</th>

                    {/* Inventory Assignment & Responsibility Details */}
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Assigned Items</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Item Serial Number / SKU</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Assignment Date</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Return Date (If Applicable)</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Item Condition at Assignment</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Usage Purpose</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Approval Status</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Authorized By</th>

                    {/* Accountability & Agreement */}
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Liability Agreement Signed ?</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Loss / Damage Policy Acknowledged ?</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Remarks / Special Notes </th>

                    {/* Additional Details */}
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Attachments</th>
                    <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Last Updated By</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default Employee
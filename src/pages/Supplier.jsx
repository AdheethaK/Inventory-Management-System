import React from 'react';

import SimpleParallax from 'simple-parallax-js';

import { HiInformationCircle } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";

import supplier_img from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/supplier2.png';
import information_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/information2.png';
import location_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/location1.png';
import category_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/category1.png';
import payment_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/payment2.png';
import agreement_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/agreement1.png';
import rating_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/rating1.png';
import notes_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/notes1.png';

<link href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap" rel="stylesheet"></link>

const Supplier = () => {
  return (
    <div className='flex flex-row gap-1 w-64' style={{ width : '1300px' ,  height : '640px' }}>
      
      {/* The Supplier Form */}
      <div className=' basis-1/3 grid grid-cols-8 gap-0 overflow-x-auto scroll-smooth relative' >
        <div className='col-start-1 col-span-7 relative' >

        {/* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */}

            {/* The Supplier Title */}
            <div className=' grid grid-cols-12 gap-1 h-12 fixed bg-white w-96 pb-5' style={{ zIndex : '1000' }}>
                <div className='col-start-1 col-span-1 bg-purple-200 rounded-md w-6 h-12' ></div>
                <p className='col-start-2 col-span-9 align-middle text-3xl absolute font-bold' 
                style={{ top : '6px' , bottom : '0px' }}
                    >SUPPLIER</p>
                {/* <div className='col-start-11 col-span-2 w-11 h-auto text-3xl left-0 right-0 m-auto hover:bg-slate-100 rounded-md' ><TbTruckDelivery /></div> */}
                <img src={supplier_img} className='col-start-11 col-span-2 w-10 h-auto left-0 right-0 m-auto hover:bg-slate-100 rounded-md' />
            </div>

            {/* The Supplier Form Body */}
            <div className='overflow-x-auto scroll-smooth relative top-12'>

                {/* Basic Information */}
                <div className='pb-0'>
                    <div className='flex items-center pl-5' >
                        {/* <div className='w-5 h-5 inline-block text-xl text-gray-500'>
                            <HiInformationCircle />
                        </div> */}
                        <img src={information_logo} className='w-7 h-7 inline-block' />
                        <p className='inline-block text-md font-extralight text-gray-300 pb-2 pl-2 pt-2'>BASIC INFORMATION</p>
                    </div>
                    <div className=' w-full pl-1'>

                    <form class="w-full max-w-sm h-auto ">
                        {/* Supplier Id */}
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Supplier Id
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Supplier Id" />
                            </div>
                        </div>
                        {/* Supplier Name */}
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Supplier Name
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Supplier Name" />
                            </div>
                        </div>
                        {/* Company Name */}
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name" placeholder="Enter Supplier Id">
                                    Company Name
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Company Name" />
                            </div>
                        </div>
                        {/* Contact Person Name */}
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Contact Person Name
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Contact Person Name" />
                            </div>
                        </div>
                        {/* Phone Number */}
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Phone Number
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Phone Number" />
                            </div>
                        </div>
                        {/* Email Address */}
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Email Address
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Email Address" />
                            </div>
                        </div>
                        {/* Password */}
                        {/* <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-password">
                                Password
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                            </div>
                        </div> */}
                    </form>
                           
                    </div>
                </div>

                {/* Address & Location */}
                <div className='pb-0'>
                    
                    {/* Title */}
                    <div className='flex items-center pl-5' >
                            {/* <div className='w-5 h-5 inline-block text-xl text-gray-500'>
                                <HiInformationCircle />
                            </div> */}
                            <img src={location_logo} className='w-7 h-7 inline-block' />
                            <p className='inline-block text-md font-extralight text-gray-300 pb-2 pl-2 pt-2'>ADDRESSS & LOCATION</p>
                    </div>

                    <div className='w-full pl-1'>
                        
                    <form class="w-full max-w-sm h-auto ">
                        {/* 01. Head Office Address */}
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Head Office Address
                            </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Head Office Address" />
                            </div>
                        </div>
                        {/* 02. Warehouse/Branch Address */}
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Warehouse /Branch Address
                            </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Warehouse/Branch Address" />
                            </div>
                        </div>
                        {/* 03. Country & Region */}
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                Country & Region
                            </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Country & Region" />
                            </div>
                        </div>
                    </form>
                           
                    </div>
                </div>

                {/* Type & Category */}
                <div className='p-2'>

                    {/* Title */}
                    <div className='flex items-center pl-4' >
                            {/* <div className='w-5 h-5 inline-block text-xl text-gray-500'>
                                <HiInformationCircle />
                            </div> */}
                            <img src={category_logo} className='w-7 h-7 inline-block' />
                            <p className='inline-block text-md font-extralight text-gray-300 pb-2 pl-2 pt-2'>TYPE & CATEGORY</p>
                    </div>

                    <div className='w-full pl-1'>
                        
                        <form class="w-full max-w-sm h-auto ">
                            {/* 01. Supplier Type */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Supplier Type
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Supplier Type" />
                                </div>
                            </div>
                            {/* 02. Product Categories */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Product Categories
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Product Categories" />
                                </div>
                            </div>
                        </form>
                           
                    </div>
                </div>

                {/* Financial & Payment Details */}
                <div className=' p-2'>

                    {/* Title */}
                    <div className='flex items-center pl-4' >
                            {/* <div className='w-5 h-5 inline-block text-xl text-gray-500'>
                                <HiInformationCircle />
                            </div> */}
                            <img src={payment_logo} className='w-6 h-6 inline-block' />
                            <p className='inline-block text-md font-extralight text-gray-300 pb-2 pl-2 pt-2'>FINANCIAL & PAYMENT DETAILS</p>
                    </div>

                    <div className='w-full pl-1'>
                        
                        <form class="w-full max-w-sm h-auto ">
                            {/* 01. Bank Name */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Bank Name
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Bank Name" />
                                </div>
                            </div>
                            {/* 02. Account Number */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Account Number
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Account Number" />
                                </div>
                            </div>
                            {/* 03. Tax Identification Number (ITN) */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Tax Identification Number (ITN)
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Tax Identification Number (ITN)" />
                                </div>
                            </div>
                            {/* 04. Preferred Payment Method */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Preferred Payment Method
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Preferred Payment Method" />
                                </div>
                            </div>
                            {/* 05. Payment Terms */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Payment Terms
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Payment Terms" />
                                </div>
                            </div>
                        </form>
                           
                    </div>
                </div>

                {/* Business Agreements & Compliances */}
                <div className='p-2'>
                    
                    {/* Title */}
                    <div className='flex items-center pl-4' >
                            {/* <div className='w-5 h-5 inline-block text-xl text-gray-500'>
                                <HiInformationCircle />
                            </div> */}
                            <img src={agreement_logo} className='w-7 h-7 inline-block' />
                            <p className='inline-block text-md font-extralight text-gray-300 pb-2 pl-2 pt-2'>BUSINESS AGREEMENTS & COMPLIANCES</p>
                    </div>

                    <div className='w-full pl-1'>
                        
                        <form class="w-full max-w-sm h-auto">
                            {/* 01. Contract Start */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Contract Start
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Contract Start" />
                                </div>
                            </div>
                            {/* 02. Contract End */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Contract End
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Contract End" />
                                </div>
                            </div>
                            {/* 03. Service Level Agreement (SLA) Details */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Service Level Agreement (SLA) Details
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Service Level Agreement (SLA) Details" />
                                </div>
                            </div>
                            {/* 04. Warranty Policy */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Warranty Policy
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Warranty Policy" />
                                </div>
                            </div>
                            {/* 05. Return & Refund Policy */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Return & Refund Policy
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Return & Refund Policy" />
                                </div>
                            </div>
                        </form>
                           
                    </div>
                </div>

                {/* Performance & Rating */}
                <div className=' p-2'>
                    
                    {/* Title */}
                    <div className='flex items-center pl-4' >
                            {/* <div className='w-5 h-5 inline-block text-xl text-gray-500'>
                                <HiInformationCircle />
                            </div> */}
                            <img src={rating_logo} className='w-7 h-7 inline-block' />
                            <p className='inline-block text-md font-extralight text-gray-300 pb-2 pl-2 pt-2'>PERFORMANCE & RATING</p>
                    </div>

                    <div className='w-full pl-1'>
                        
                        <form class="w-full max-w-sm h-auto">
                            {/* 01. Delivery Lead Time */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Delivery Lead Time
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Delivery Lead Time" />
                                </div>
                            </div>
                            {/* 02. Supplier Rating */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Supplier Rating
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Supplier Rating" />
                                </div>
                            </div>
                            {/* 03. Order History & Fulfillment Rate */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Order History & Fulfillment Rate
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Order History & Fulfillment Rate" />
                                </div>
                            </div>
                        </form>
                           
                    </div>
                </div>

                {/* Additional Notes & Attachment */}
                <div className=' p-2'>

                    {/* Title */}
                    <div className='flex items-center pl-4' >
                            {/* <div className='w-5 h-5 inline-block text-xl text-gray-500'>
                                <HiInformationCircle />
                            </div> */}
                            <img src={notes_logo} className='w-7 h-7 inline-block' />
                            <p className='inline-block text-md font-extralight text-gray-300 pb-2 pl-2 pt-2'>ADDITIONAL NOTES & ATTACHMENTS</p>
                    </div>

                    <div className='w-full pl-1'>
                        
                        <form class="w-full max-w-sm h-auto">
                            {/* 01. Special Terms & Conditions */}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Special Terms & Conditions
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Special Terms & Conditions" />
                                </div>
                            </div>
                            {/* 02. Attachments*/}
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                                    Attachments
                                </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Attachments" />
                                </div>
                            </div>
                        </form>
                           
                    </div>
                </div>

                {/* <form class="max-w-sm mx-auto">
                <div class="mb-5">
                    <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label>
                    <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Bonnie Green" />
                    <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p>
                </div>
                <div>
                    <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Your name</label>
                    <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="Bonnie Green" />
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username already taken!</p>
                </div>
                </form> */}
            </div>
        </div>

        {/* Button Section */}
        <div className='col-start-8 bg-yellow-300 fixed h-64 w-12' style={{ left : '470px' , top : '400px' }}>     
            
        </div>
      </div>     

      {/* The Supplier Table  */}
      <div className='bg-white basis-2/3 p-1 overflow-x-auto scroll-smooth' style={{ scrollbarWidth : '10px' }} >
                <div class="relative shadow-md sm:rounded-lg" >
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4">
                                    Silver
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td class="px-6 py-4">
                                    White
                                </td>
                                <td class="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td class="px-6 py-4">
                                    $1999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td class="px-6 py-4">
                                    Black
                                </td>
                                <td class="px-6 py-4">
                                    Accessories
                                </td>
                                <td class="px-6 py-4">
                                    $99
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Google Pixel Phone
                                </th>
                                <td class="px-6 py-4">
                                    Gray
                                </td>
                                <td class="px-6 py-4">
                                    Phone
                                </td>
                                <td class="px-6 py-4">
                                    $799
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td class="px-6 py-4">
                                    Red
                                </td>
                                <td class="px-6 py-4">
                                    Wearables
                                </td>
                                <td class="px-6 py-4">
                                    $999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td class="px-6 py-4">
                                    Red
                                </td>
                                <td class="px-6 py-4">
                                    Wearables
                                </td>
                                <td class="px-6 py-4">
                                    $999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td class="px-6 py-4">
                                    Red
                                </td>
                                <td class="px-6 py-4">
                                    Wearables
                                </td>
                                <td class="px-6 py-4">
                                    $999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td class="px-6 py-4">
                                    Red
                                </td>
                                <td class="px-6 py-4">
                                    Wearables
                                </td>
                                <td class="px-6 py-4">
                                    $999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td class="px-6 py-4">
                                    Red
                                </td>
                                <td class="px-6 py-4">
                                    Wearables
                                </td>
                                <td class="px-6 py-4">
                                    $999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td class="px-6 py-4">
                                    Red
                                </td>
                                <td class="px-6 py-4">
                                    Wearables
                                </td>
                                <td class="px-6 py-4">
                                    $999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td class="px-6 py-4">
                                    Red
                                </td>
                                <td class="px-6 py-4">
                                    Wearables
                                </td>
                                <td class="px-6 py-4">
                                    $999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td class="px-6 py-4">
                                    Red
                                </td>
                                <td class="px-6 py-4">
                                    Wearables
                                </td>
                                <td class="px-6 py-4">
                                    $999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td class="px-6 py-4">
                                    Red
                                </td>
                                <td class="px-6 py-4">
                                    Wearables
                                </td>
                                <td class="px-6 py-4">
                                    $999
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
      </div>
    </div>
  )
}

export default Supplier
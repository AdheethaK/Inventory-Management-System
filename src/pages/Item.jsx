import React from 'react'

import { MdAdd } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { TbReload } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";

import item_img from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/item1.png';
import information_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/information2.png';
import stock_inventory_info_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/inventoryInfo1.png';
import stock_procurement_info_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/procurement_info2.png';
import finance_accounting_info_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/finance1.png';
import notes_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/notes1.png';
import usage_deployment_logo from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/usage2.png';

const Item = () => {
  return (
    <div className='flex flex-row gap-1 w-64' style={{ width : '1300px' ,  height : '640px' }} >
      
      {/* The Item Form */}
      <div className=' basis-1/3 grid grid-cols-8 gap-0 overflow-x-auto scroll-smooth relative' >

        {/* Form */}
        <div className='col-start-1 col-span-7 relative' >

          {/* The Item Form Title */}
          <div className=' grid grid-cols-12 gap-1 h-12 fixed bg-white w-96 pb-5' style={{ zIndex : '1000' }}>
                <div className='col-start-1 col-span-1 bg-orange-200 rounded-md w-6 h-12' ></div>
                <p className='col-start-2 col-span-9 align-middle text-3xl absolute font-bold' 
                style={{ top : '6px' , bottom : '0px' }}
                    >ITEM</p>
                {/* <div className='col-start-11 col-span-2 w-11 h-auto text-3xl left-0 right-0 m-auto hover:bg-slate-100 rounded-md' ><TbTruckDelivery /></div> */}
                <img src={item_img} className='col-start-11 col-span-2 w-8 h-auto left-0 right-0 m-auto hover:bg-slate-100 rounded-md' />
          </div>

          {/* The Item Form Body */}
          <div className='overflow-x-auto scroll-smooth relative top-12' >
            {/* Basic Information */}
            <div className='pb-0'>
                {/* Header */}
                <div className='flex items-center pl-5' >
                  <img src={information_logo} className='w-7 h-7 inline-block' />
                  <p className='inline-block text-md font-extralight text-gray-300 pb-3 pl-2 pt-2'>BASIC INFORMATION</p>
                </div>

                {/* Form */}
                <form class="w-full max-w-sm h-auto">
                  {/* Item Code*/}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                          Item Code
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Item Code" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Item Code error label</p>
                    </div>
                  </div>
                  {/* Item Name*/}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                          Item Name
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Item Name" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Item Name error label</p>
                    </div>
                  </div>
                  {/* Category*/}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                          Category
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Category" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Category error label</p>
                    </div>
                  </div>
                  {/* Brand / Manufacturer*/}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Brand / Manufacturer
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Brand / Manufacturer" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Brand / Manufacturer error label</p>
                    </div>
                  </div>
                  {/*Model Number*/}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Model Number
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Model Number" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Model Number error label</p>
                    </div>
                  </div>
                  {/* Item Description*/}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Item Description
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <textarea  rows="6"  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Item Description" ></textarea>
                      <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Item Description error label</p>
                    </div>
                  </div>
                </form>

            </div>

            {/* Stock & Inventory Details */}
            <div className='pb-0'>
                {/* Header */}
                <div className='flex items-center pl-5' >
                  <img src={stock_inventory_info_logo} className='w-9 h-9 inline-block' />
                  <p className='inline-block text-md font-extralight text-gray-300 pb-3 pl-2 pt-2'>STOCK & INVENTORY INFORMATION</p>
                </div>

                {/* Form */}
                <form class="w-full max-w-sm h-auto">
                  {/* Current Stock Quantity*/}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Current Stock Quantity
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Current Stock Quantity" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Current Stock Quantity error label</p>
                    </div>
                  </div>
                  {/* Reorder Level */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Reorder Level
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Reorder Level" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Reorder Level error label</p>
                    </div>
                  </div>
                  {/* Stock Location */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Stock Location
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Stock Location" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Stock Location error label</p>
                    </div>
                  </div>
                  {/* Unit of Measure */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Unit of Measure
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Unit of Measure" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Unit of Measure error label</p>
                    </div>
                  </div>
                  {/* Batch Number / Serial Number */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Batch Number / Serial Number
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Batch Number / Serial Number" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Batch Number / Serial Numbererror label</p>
                    </div>
                  </div>
                  {/* Expiry Date / Warranty Expiry */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Expiry Date / Warranty Expiry
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Expiry Date / Warranty Expiry" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Expiry Date / Warranty Expiry error label</p>
                    </div>
                  </div>
                </form>

            </div>

            {/* Supplier & Procurement Information */}
            <div className='pb-0'>
                {/* Header */}
                <div className='flex items-center pl-5' >
                  <img src={stock_procurement_info_logo} className='w-8 h-8 inline-block' />
                  <p className='inline-block text-md font-extralight text-gray-300 pb-3 pl-2 pt-2'>STOCK & PROCUREMENT INFORMATION</p>
                </div>

                {/* Form */}
                <form class="w-full max-w-sm h-auto">
                  {/* Supplier Id*/}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Supplier ID
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Supplier Id" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Supplier Id error label</p>
                    </div>
                  </div>
                  {/* Supplier Name */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Supplier Name
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Supplier Name" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Supplier Name error label</p>
                    </div>
                  </div>
                  {/* Lead Time */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Lead Time
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Lead Time" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Lead Time error label</p>
                    </div>
                  </div>
                  {/* Last Purchace Date */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Last Purchase Date
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Last Purchace Date" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Last Purchase Date error label</p>
                    </div>
                  </div>
                  {/* Purchase Price (per Unit) */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Purchase Price (Per Unit)
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Purchase Price" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Purchase Price error label</p>
                    </div>
                  </div>
                  {/* Retail / Selling Price */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Retail / Selling Price
                      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Retail / Selling Price" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Retail / Selling Price error label</p>
                    </div>
                  </div>
                </form>

            </div>

            {/* Financial & Accounting Information */}
            <div className='pb-0'>
                {/* Header */}
                <div className='flex items-center pl-5' >
                  <img src={finance_accounting_info_logo} className='w-8 h-8 inline-block' />
                  <p className='inline-block text-md font-extralight text-gray-300 pb-3 pl-2 pt-2'>FINANCIAL & ACCOUNTING INFORMATION</p>
                </div>

                {/* Form */}
                <form class="w-full max-w-sm h-auto">
                    {/* Tax Rate (VAT) */}
                    <div class="md:flex md:items-center mb-4">
                      <div class="md:w-1/3">
                        <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                          Tax Rate (VAT)
                        </label>
                      </div>
                      <div class="md:w-2/3">
                          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Tax Rate (VAT)" />
                          <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Tax Rate (VAT) error label</p>
                      </div>
                    </div>
                    {/* Discounts (if any) */}
                    <div class="md:flex md:items-center mb-4">
                      <div class="md:w-1/3">
                        <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                          Discounts (if any)
                        </label>
                      </div>
                      <div class="md:w-2/3">
                          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Discounts" />
                          <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Discounts error label</p>
                      </div>
                    </div>
                </form>

            </div>

            {/* Usage & Deployment Details */}
            <div className='pb-0'>
                {/* Header */}
                <div className='flex items-center pl-5' >
                  <img src={usage_deployment_logo} className='w-8 h-8 inline-block' />
                  <p className='inline-block text-md font-extralight text-gray-300 pb-3 pl-2 pt-2'>USAGE & DEPLOYMENT DETAILS</p>
                </div>

                {/* Form */}
                <form class="w-full max-w-sm h-auto">
                  {/* Assigned To (If Issued) */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Assigned To (If Issued)
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Issued To Whom" />
                      <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Issued To error label</p>
                    </div>
                  </div>
                  {/* Usage Type */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Usage Type
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Usage Type" />
                      <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Usage Type error label</p>
                    </div>
                  </div>
                  {/* Installation Date (If Applicable) */}
                  <div class="md:flex md:items-center mb-4">
                      <div class="md:w-1/3">
                        <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                          Installation Date (If Applicable)
                        </label>
                      </div>
                      <div class="md:w-2/3">
                          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Installation Date" />
                          <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Installation Date error label</p>
                      </div>
                    </div>
                </form>

            </div>

            {/* Additional Notes & Attachments */}
            <div className='pb-0'>
                {/* Header */}
                <div className='flex items-center pl-4' >
                  {/* <div className='w-5 h-5 inline-block text-xl text-gray-500'>
                    <HiInformationCircle />
                  </div> */}
                  <img src={notes_logo} className='w-7 h-7 inline-block' />
                  <p className='inline-block text-md font-extralight text-gray-300 pb-3 pl-2 pt-2'>ADDITIONAL NOTES & ATTACHMENTS</p>
                </div>

                {/* Form */}
                <form class="w-full max-w-sm h-auto">
                    {/* Item Condition */}
                    <div class="md:flex md:items-center mb-4">
                      <div class="md:w-1/3">
                        <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                          Item Condition
                        </label>
                      </div>
                      <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Item Condition" />
                        <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Item Condition error label</p>
                      </div>
                    </div>
                    {/* Attachments */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                        Attachments
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Attachments" />
                      <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Attachments error label</p>
                    </div>
                  </div>
                  {/* Comments / Additional Notes */}
                  <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4 text-sm" for="inline-full-name">
                       Comments / Additional Notes
                      </label>
                    </div>
                    <div class="md:w-2/3">
                    <textarea  rows="6"  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-sm" id="inline-full-name" type="text" placeholder="Enter Comments / Addtional Notes" ></textarea>
                      <p className='bg-white w-full h-4 mb-0 text-red-500 italic text-left p-1 lowercase' style={{ fontSize : '10px' , lineHeight : '15px' }} >Comments / Addtional Notes error label</p>
                    </div>
                  </div>
                </form>

            </div>

          </div>

        </div>

        {/* Button Section */}
        <div className='col-start-8 fixed h-64 w-12 grid grid-rows-5 gap-2' style={{ left : '470px' , top : '400px' }}>
            {/* Add New ID */}
          <div id='supplier-btn-new-id' data-tooltip-target="tooltip-light-newId" data-tooltip-style="light" data-tooltip-placement="right" className='btn h-10 row-start-1 row-span-1 cursor-pointer hover:shadow-lg' style={{ backgroundColor : 'lightblue' , borderRadius : '10%' ,  border : '1px solid #2E2283' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }} >
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

      {/* The Item Table */}
      <div className='bg-white basis-2/3 p-1 overflow-x-auto scroll-smooth border-white' style={{ scrollbarWidth : '10px' }} >
          <div class="relative shadow-md sm:rounded-lg" >
              <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400' >
                  <thead className='sticky top-0 text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 border-white' >
                    <tr>
                      <th colSpan='6' className='px-6 py-4 text-center border-l-0 border-r-2 border-x-4 border-gray-300'>Basic Information</th>
                      <th colSpan='6' className='px-6 py-4 text-center border-l-0 border-r-2 border-x-4 border-gray-300'>Stock & Inventory Information</th> 
                      <th colSpan='6' className='px-6 py-4 text-center border-l-0 border-r-2 border-x-4 border-gray-300'>Stock & Procurement Information</th> 
                      <th colSpan='2' className='px-6 py-4 text-center border-l-0 border-r-2 border-x-4 border-gray-300'>Financial & Accounting Information</th>                                    
                      <th colSpan='3' className='px-6 py-4 text-center border-l-0 border-r-2 border-x-4 border-gray-300'>Usage & Deployment Details</th> 
                      <th colSpan='3' className='px-6 py-4 text-center border-l-0 border-r-2 border-x-4 border-gray-300'>Additional Notes & Attachments</th> 
                    </tr>
                    <tr className='sticky left-0 text-gray-500 font-thin border-white' style={{ fontSize : '11px' , lineHeight : '13px' }}>
                        {/* Basic Information */}
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Item Code</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Item Name</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Category</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Brand / Manufacturer</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Model Number</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Item Description</th>

                        {/* Stock & Inventory Information */}
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Current Stock Quantity</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Reorder Level</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Stock Location</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Unit of Measure</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Batch Number / Serial Number</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Expiry Date / Warranty Expiry</th>

                        {/* Stock & Procurement Information */}
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Supplier ID</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Supplier Name</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Lead Time</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Last Purchase Date</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Purchase Price (per Unit)</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Retail / Selling Price</th>

                        {/* Financial & Accounting Information */}
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Tax Rate (VAT)</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Discount (if any)</th>

                        {/* Usage & Deployment Details */}
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Assigned To (if issued)</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Usage Type</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Installation Date(If Applicable)</th>

                        {/* Additional Notes & Attachments */}
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Item Condition</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Attachments</th>
                        <th className='px-6 py-1 text-center font-thin border-r-2 border-gray-300'>Comments / Additional Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=' text-gray-800 font-thin odd:bg-gray-200 cursor-pointer' style={{ fontSize : '12px' , lineHeight : '14px' }}>
                        {/* 01. Basic Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>CR-2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco Router 2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Router</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2901-K9</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Enterprise-grade router with advanced security features</td>

                        {/* 02. Stock & Inventory Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>15</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Warehouse A - Shelf 3</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Piece</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SN2900123456</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2027-06-15</td>

                        {/* 03. Stock & Procurement Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SUP-001</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Tech Distributors Inc.</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>7 Days</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-01-20</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,200</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,800</td>

                        {/* 04. Financial & Accounting Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>10%</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5% on bulk orders</td>

                        {/* 05. Usage & Deployment Details */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>IT Department</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Internal Use</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-02-01</td>

                        {/* 06. Additional Notes & Attachments */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>New</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>User Manual PDF</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Critical for core network infrastructure</td>
                    </tr>
                    <tr className=' text-gray-800 font-thin odd:bg-gray-200 cursor-pointer' style={{ fontSize : '12px' , lineHeight : '14px' }}>
                        {/* 01. Basic Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>CR-2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco Router 2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Router</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2901-K9</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Enterprise-grade router with advanced security features</td>

                        {/* 02. Stock & Inventory Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>15</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Warehouse A - Shelf 3</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Piece</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SN2900123456</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2027-06-15</td>

                        {/* 03. Stock & Procurement Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SUP-001</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Tech Distributors Inc.</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>7 Days</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-01-20</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,200</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,800</td>

                        {/* 04. Financial & Accounting Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>10%</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5% on bulk orders</td>

                        {/* 05. Usage & Deployment Details */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>IT Department</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Internal Use</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-02-01</td>

                        {/* 06. Additional Notes & Attachments */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>New</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>User Manual PDF</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Critical for core network infrastructure</td>
                    </tr>
                    <tr className=' text-gray-800 font-thin odd:bg-gray-200 cursor-pointer' style={{ fontSize : '12px' , lineHeight : '14px' }}>
                        {/* 01. Basic Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>CR-2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco Router 2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Router</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2901-K9</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Enterprise-grade router with advanced security features</td>

                        {/* 02. Stock & Inventory Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>15</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Warehouse A - Shelf 3</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Piece</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SN2900123456</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2027-06-15</td>

                        {/* 03. Stock & Procurement Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SUP-001</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Tech Distributors Inc.</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>7 Days</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-01-20</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,200</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,800</td>

                        {/* 04. Financial & Accounting Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>10%</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5% on bulk orders</td>

                        {/* 05. Usage & Deployment Details */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>IT Department</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Internal Use</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-02-01</td>

                        {/* 06. Additional Notes & Attachments */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>New</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>User Manual PDF</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Critical for core network infrastructure</td>
                    </tr>
                    <tr className=' text-gray-800 font-thin odd:bg-gray-200 cursor-pointer' style={{ fontSize : '12px' , lineHeight : '14px' }}>
                        {/* 01. Basic Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>CR-2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco Router 2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Router</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2901-K9</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Enterprise-grade router with advanced security features</td>

                        {/* 02. Stock & Inventory Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>15</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Warehouse A - Shelf 3</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Piece</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SN2900123456</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2027-06-15</td>

                        {/* 03. Stock & Procurement Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SUP-001</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Tech Distributors Inc.</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>7 Days</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-01-20</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,200</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,800</td>

                        {/* 04. Financial & Accounting Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>10%</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5% on bulk orders</td>

                        {/* 05. Usage & Deployment Details */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>IT Department</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Internal Use</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-02-01</td>

                        {/* 06. Additional Notes & Attachments */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>New</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>User Manual PDF</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Critical for core network infrastructure</td>
                    </tr>
                    <tr className=' text-gray-800 font-thin odd:bg-gray-200 cursor-pointer' style={{ fontSize : '12px' , lineHeight : '14px' }}>
                        {/* 01. Basic Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>CR-2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco Router 2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Router</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2901-K9</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Enterprise-grade router with advanced security features</td>

                        {/* 02. Stock & Inventory Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>15</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Warehouse A - Shelf 3</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Piece</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SN2900123456</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2027-06-15</td>

                        {/* 03. Stock & Procurement Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SUP-001</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Tech Distributors Inc.</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>7 Days</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-01-20</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,200</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,800</td>

                        {/* 04. Financial & Accounting Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>10%</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5% on bulk orders</td>

                        {/* 05. Usage & Deployment Details */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>IT Department</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Internal Use</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-02-01</td>

                        {/* 06. Additional Notes & Attachments */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>New</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>User Manual PDF</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Critical for core network infrastructure</td>
                    </tr>
                    <tr className=' text-gray-800 font-thin odd:bg-gray-200 cursor-pointer' style={{ fontSize : '12px' , lineHeight : '14px' }}>
                        {/* 01. Basic Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>CR-2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco Router 2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Router</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2901-K9</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Enterprise-grade router with advanced security features</td>

                        {/* 02. Stock & Inventory Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>15</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Warehouse A - Shelf 3</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Piece</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SN2900123456</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2027-06-15</td>

                        {/* 03. Stock & Procurement Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SUP-001</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Tech Distributors Inc.</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>7 Days</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-01-20</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,200</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,800</td>

                        {/* 04. Financial & Accounting Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>10%</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5% on bulk orders</td>

                        {/* 05. Usage & Deployment Details */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>IT Department</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Internal Use</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-02-01</td>

                        {/* 06. Additional Notes & Attachments */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>New</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>User Manual PDF</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Critical for core network infrastructure</td>
                    </tr>
                    <tr className=' text-gray-800 font-thin odd:bg-gray-200 cursor-pointer' style={{ fontSize : '12px' , lineHeight : '14px' }}>
                        {/* 01. Basic Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>CR-2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco Router 2900</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Router</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Cisco</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2901-K9</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Enterprise-grade router with advanced security features</td>

                        {/* 02. Stock & Inventory Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>15</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Warehouse A - Shelf 3</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Piece</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SN2900123456</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2027-06-15</td>

                        {/* 03. Stock & Procurement Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>SUP-001</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Tech Distributors Inc.</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>7 Days</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-01-20</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,200</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>$1,800</td>

                        {/* 04. Financial & Accounting Information */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>10%</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>5% on bulk orders</td>

                        {/* 05. Usage & Deployment Details */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>IT Department</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Internal Use</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>2024-02-01</td>

                        {/* 06. Additional Notes & Attachments */}
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>New</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>User Manual PDF</td>
                        <td className='px-4 py-2 text-left font-medium border-white border-x-2'>Critical for core network infrastructure</td>
                    </tr>
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default Item
import React from 'react';

import SimpleParallax from 'simple-parallax-js';

import supplier_img from 'D:/My Projects/TELECOM/MINE/inventory_management/src/data/supplier.png';

<link href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap" rel="stylesheet"></link>

const Supplier = () => {
  return (
    <div className='flex flex-row gap-1 w-64 scroll-smooth transition ease-in' style={{ width : '1300px' ,  height : '640px' }}>
      
      {/* The Supplier Form */}
      <div className='bg-purple-500 basis-1/3 grid grid-cols-8 gap-1' >
        <div className='col-start-1 col-span-7 bg-yellow-300 grid grid-rows-12 gap-1' >

            {/* The Supplier Title */}
            <div className='row-start-1 row-span-1 bg-red-500 grid grid-cols-12 gap-1 relative'>
                <div className='col-start-1 col-span-1 bg-purple-300 rounded-md w-3/4' ></div>
                <p className='col-start-2 col-span-9 bg-green-400 align-middle text-3xl absolute font-bold' 
                style={{ top : '6px' , bottom : '0px' }}
                    >SUPPLIER</p>
                {/* <div className='col-start-11 col-span-2 bg-purple-300 w-full' ></div> */}
                <img src={supplier_img} className='col-start-11 col-span-2 bg-purple-300 w-11 h-auto left-0 right-0 m-auto hover:bg-slate-100 rounded-md' />
            </div>
            <div className='row-start-2 row-span-11 bg-red-500 overflow-x-auto scroll-smooth'></div>
        </div>
        <div className='col-start-8 bg-yellow-300' ></div>
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
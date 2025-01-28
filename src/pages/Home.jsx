import React from 'react'

const Home = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-x-3 gap-y-4 items-stretch' >
      <div className='bg-blue-400' style={{ width : '455px' , height : '200px' , border : '2px solid #2E2328' , boxShadow : '3.8px 3.8px 0 0 #2E2328' , borderRadius : '30px'}} ></div>
      <div className='bg-blue-300' style={{ width : '455px' , height : '200px' , border : '2px solid #2E2328' , boxShadow : '3.8px 3.8px 0 0 #2E2328' , borderRadius : '30px'}} ></div>
      <div className='bg-green-300' style={{ width : '455px' , height : '200px' , border : '2px solid #2E2328' , boxShadow : '3.8px 3.8px 0 0 #2E2328' , borderRadius : '30px'}} ></div>
      <div className='bg-yellow-200 col-span-3 row-span-2' style={{ width : '1420px' , height : '400px' , border : '2px solid #2E2328' , boxShadow : '3.8px 3.8px 0 0 #2E2328' , borderRadius : '30px'}} ></div>
    </div>
  )
}

export default Home
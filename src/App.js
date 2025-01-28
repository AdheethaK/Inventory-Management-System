import React , { useEffect } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Calendar , Chat , Sidebar , Navbar , ThemeSettings } from './components';
import { Employee , Home , Item , Supplier } from './pages';

import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg' >
        <div className='fixed right-4 bottom-4' style={{ zIndex : '1000' }} >

          {/* The Tooltip  */}
          <TooltipComponent content="Settings" position='top' >
            <button type="button" 
              className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-black'
              style={{ backgroundImage : 'linear-gradient( #94E58E, #88E3FF , #94E58E )' , borderRadius : '50%' ,  border : '1px solid #2E2328' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }} >
              <FiSettings />
            </button>
          </TooltipComponent>
          
        </div>
        {/* The Sidebar */}
        <div className='w-20 fixed sidebar dark:bg-secondary-dark-bg bg-black text-black rounded-t-3xl rounded-r-full p-5 mb-10'
             style={{ height : '98%' , backgroundImage : 'linear-gradient( #94E58E, #88E3FF , #94E58E )' , margin : '0.4%' , borderRadius : '20px'}}
            //  boxShadow : '2.8px 2.8px 0 0 #2E2328'
        >
          <Sidebar />
            
        </div>

        {/* The Navigation Bar */}
        <div className={'dark:bg-main-bg bg-main-bg min-h-screen overflow-hidden absolute left-24 flex-2'} style={{background : 'gray' , width : '1300px'}} >
            <div className='fixed bg-main-bg dark:bg-main-dark-bg navbar w-full' style={{background : 'white'}} >
              <Navbar />
            </div>
            <div className='absolute bg-white' style={{ top : '70px' }} >
              <Routes>
                <Route path="/" element= {<Home />} />
                
                {/* Pages  */}
                <Route path="/home" element= {<Home />} />
                <Route path="/supplier" element= {<Supplier />} />
                <Route path="/item" element= {<Item />} />
                <Route path="/employee" element= {<Employee />} />
              </Routes>
            </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
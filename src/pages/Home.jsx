import React from 'react'
import Card from "../components/core/Card"
import BookingSection from "../components/core/BookingSection"
import Navbar from "../components/Navbar"

const Home = () => {
    
  return (
    <div>
        {/* section 1 */}
        <div className='flex w-[100%]  '>
          <Navbar/>
        </div>
        <div className='mx-auto flex flex-col w-[100%] text-white items-center justify-between'>
            
            <div className=''>
                <Card/>
            </div>
            <div>
              <BookingSection/>
            </div>
           

        </div>

        {/* section 2 */}

        {/* section 3 */}

        {/* section 4 footer */}
      
    </div>
  )
}

export default Home

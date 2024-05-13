import React from 'react'
import Card from "../components/core/Card"
import BookingSection from "../components/core/BookingSection"
import Navbar from "../components/Navbar"
import Footer from '../components/core/Footer'
import TimeLine from '../components/core/TimeLine'
import ReadingSection from '../components/core/ReadingSection'


const Home = () => {
    
  return (
    <div>
        {/* section 1 */}
        <div className='flex w-[100%]  '>
          <Navbar/>
        </div>
        <div className='flex flex-col text-white items-center justify-between'>
            
            <div className=''>
                <Card/>
            </div>
            <div>
              <BookingSection/>
            </div>
           

        </div>

        {/* section 2 */}

        {/* section 3 */}
        <TimeLine/>

        {/* section 4 footer */}
        <div>
          <ReadingSection/>
        </div>
        <div>
          <Footer/>

        </div>
      
    </div>
  )
}

export default Home

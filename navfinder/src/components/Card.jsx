import React from 'react'
import images from "../assests/images/city bus.gif"
import CButton from "../components/CButton"
import Highlight from './Highlight'

const Card = () => {
  return (
    <div className='flex flex-row w-[1300px] bg-black justify-between px-20 gap-1 mt-16'>
      <div className='w-[50%] gap-10 items-center mt-[15%]'>
        <div className=' flex font-bold text-center text-4xl'>
        Go anywhere with
        <Highlight text={" NavFinder"}/>
        </div>
        <p className='mt-3'>Make money on your schedule with deliveries or rides or both. You can use your own car or choose a rental through NavFinder.</p>
        <div className='flex flex-row gap-4 mt-8'>
          <CButton active={true} linkto={"/signup"}>
          trip!!
          </CButton>
          <CButton active={false} linkto={"/signup"}>
            Test YourSelf
          </CButton>
        </div>

      </div>
      <div className='shadow-[-50px_-50px_200px_-100px_#63b3ed]'>
        <img src={images} alt='pic1'></img>

      </div>
    </div>
  )
}

export default Card

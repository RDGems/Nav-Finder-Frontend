import React from 'react'

const ReadingSection = () => {
  return (
    <div>
        <div className='bg-white h-[100vh] mt-24'>
            <div className=' flex-col m-[5%] '>
                <h1 className=' items-center text-4xl text-black font-bold  pt-20'>Safety on the road</h1>
                <p className='mt-10'>Your safety drives us to continuously raise the bar.</p>
                <div className='flex  mt-24 justify-between gap-10 '>
                    <div  className=' flex flex-col gap-10 w-[50%] h-auto'>
                    <img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1535523054/assets/6f/7f63bb-10f4-488b-9000-593bcfe40dca/original/Safety-Center.svg' alt='img' className=' h-14 w-14'></img>
                    <h3 className=' text-2xl '>Protection on every trip</h3>
                    <p>Each trip you take with the Uber app is insured to protect you and your rider.</p>

                    </div>
                    <div  className=' flex flex-col gap-10 w-[50%] h-auto'>
                    <img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1535523101/assets/22/bdf7a1-f49f-47c0-a59e-3e6bc274b6f2/original/24_7-Support.svg' alt='img' className=' h-14 w-14'></img>
                    <h3 className=' text-2xl '>Help if you need it</h3>
                    <p>The Emergency Button calls 911. The app displays your trip details so you can quickly share them with authorities</p>

                    </div>
                    <div  className=' flex flex-col gap-10 w-[50%] h-auto'>
                    <img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1535523136/assets/a7/c590ac-242e-47eb-86cb-90db7712d44f/original/Community-Guidelines.svg' alt='img' className=' h-14 w-16'></img>
                    <h3 className=' text-2xl '>Community Guidelines</h3>
                    <p>Our standards help to create safe connections and positive interactions with everyone. Learn how our guidelines apply to you.</p>

                    </div>
                </div>

            </div>
            {/* <div className='text-black font-semibold text-4xl m-32'>
            Safety on the road
            </div> */}

        </div>
    </div>
  )
}

export default ReadingSection
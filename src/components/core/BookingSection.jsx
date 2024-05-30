import React, { useState } from 'react'
import carD from "../../assests/images/icons8-tesla-model-s-50(1).png"
import car from "../../assests/images/icons8-tesla-model-s-50.png"
import busD from "../../assests/images/bus (1).png"
import bus from "../../assests/images/bus (2).png"
import trainD from "../../assests/images/trainD.png"
import train from "../../assests/images/train.png"
import flight from "../../assests/images/flight.png"
import flightD from "../../assests/images/flightD.png"
import bike from "../../assests/images/bike.png"
import bikeD from "../../assests/images/bikeD.png"
 
const tabName = [
  {
    name:'Car',
    img:carD,
    img1:car
  },
  {
    name:'Bus',
    img:busD,
    img1:bus
  },
  {
    name:'Bike',
    img:bikeD,
    img1:bike
  },
  {
    name:'Flight',
    img:flightD,
    img1:flight
  },
  {
    name:'Train',
    img:trainD,
    img1:train
  }
]

const BookingSection = () => {
  const [currentTab,setCurrentTab]=useState(tabName[0]);

   const setMyIcone=(value)=>{
    setCurrentTab(value);
    // console.log(currentTab);
  }
  return (
    <div className='bg-white mt-20 rounded-md  '>
      
        <div className='relative w-fu flex flex-row gap-10 bg-white text-gray-500  px-14 rounded-md mb-[-80px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] '>
          <div className=' flex'>
            {tabName.map((ele,index)=>{
              return(
                <div key={index} className='flex flex-col gap-14 bg-white text-gray-500 p-6 px-14 rounded-md ' onClick={()=>setMyIcone(ele)}>
                  <div>
                    {
                      currentTab===ele
                      ?<div className='flex flex-col gap-4 justify-center items-center'>
                        <img src={ele.img} alt='car' className=' w-10 h-10 justify-between items-center'></img>
                        <h1 className='text-2xl font-bold text-gray-100 bg-black p-1 m-1 rounded-md'>{ele.name}</h1>
                      </div>
                      :
                      <div className='flex flex-col gap-4 justify-center items-center'>
                        <img src={ele.img1} alt='car' className=' w-10 h-10 justify-between items-center'></img>
                        <h1 className='text-2xl font-bold text-gray-900 p-1 m-1'>{ele.name}</h1>
                      </div>
                    }</div>

                </div>
              )
            })}
          </div>
        </div>
        {/* <div className=' h-[30vh] w-[110%] bg-white flex text-red-950 '>
          <div>
            <form className=' flex w-[80vw] bg-rose-300 gap-10 h-[70%] justify-between items-center border rounded-md'>
              <input type='text' placeholder='From' className='w-full h-10 px-10 rounded-md text-gray-500'></input>
              <input type='text' placeholder='To' className='w-full h-10 px-10 rounded-md text-gray-500'></input>
              <button type='submit' className='w-full h-10 px-10 rounded-md text-gray-500'>Search</button>
            </form>
          </div>
        {/* </div>  */}
      
    </div>
  )
}

export default BookingSection

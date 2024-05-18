import React from 'react'
import Card from "../components/core/Card"
import Navbar from "../components/Navbar"
import Footer from '../components/core/Footer'
// import Highlight from '../components/Highlight'
import Highlight from '../components/Highlight'
import CButton from '../components/CButton'
import images from "../assests/images/City driver.gif"
import driver from "../assests/images/Order ride.gif"
import { SlCalender } from "react-icons/sl";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { DiYeoman } from "react-icons/di";

const Driver = () => {
  return (
    <div>
         <div className='flex w-[100%]  '>
          <Navbar/>
        </div>
        <div className='flex flex-col text-white items-center justify-between'>

        <div className='flex flex-row-reverse w-[1300px] bg-black justify-between px-20 gap-1 mt-16'>
      <div className='w-[50%] gap-10 items-center mt-[15%]'>
      <div className=' flex-grow-0 font-bold text-4xl'>
      Drive when you want, make what you need
        </div>
        <p className='mt-3'>Earn on your own schedule</p>
        <div className='flex flex-row gap-4 mt-8'>
         
        </div>

      </div>
      <div className='shadow-[-50px_-50px_200px_-100px_#63b3ed]'>
        <img src={images} alt='pic1'></img>

      </div>
    </div>
        <div className=' mt-24'>
                <Card/>
            </div>

        </div>
       
        {/* <div>
          <ReadingSection/>
        </div> */}
        <div className='bg-white w-[100%] mt-20'>
            <div className=' px-[10%] py-1'>
                <h1 className=' text-zinc-950 font-bold text-4xl mt-16'>Why drive with us</h1>
                <img src={driver} alt='driver' className= 'items-center ml-[30%] my-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] '></img>
                <div className=' flex my-10 '>
                <div  className=' flex flex-col mt-4 gap-1 w-[50%] h-auto'>
                    <SlCalender />
                    <h3 className=' text-2xl '>Set your own hours</h3>
                    <p>You decide when and how often you drive.</p>
                </div>
                <div  className=' flex flex-col mt-4 gap-1 w-[50%] h-auto'>
                <DiYeoman />
                    <h3 className=' text-2xl '>Get support at every turn</h3>
                    <p>If there’s anything that you need, you can reach us anytime.</p>
                </div>
                <div  className=' flex flex-col mt-4 gap-1 w-[50%] h-auto'>
                <FaRegMoneyBillAlt />
                    <h3 className=' text-2xl '>Get paid fast</h3>
                    <p>Weekly payments in your bank account.</p>
                </div>
                    

                </div>
                <div>
                <h1 className=' text-zinc-950 font-bold text-4xl mt-16'>Here's what you need to sign up</h1>
                <div className=' flex my-10 '>
                <div  className=' flex flex-col mt-4 gap-4 w-[50%] h-auto'>
                    <SlCalender />
                    <h3 className=' text-2xl '>Requirements</h3>
                    <ul style={{ listStyleType: 'disc' }} >
                        <li>Be at least 18 years old</li>
                        <li>Clear a background screening</li>
                    </ul>
                    
                </div>
                <div  className=' flex flex-col mt-4 gap-4 w-[50%] h-auto'>
                <DiYeoman />
                    <h3 className=' text-2xl '>Documents</h3>
                    <ul style={{ listStyleType: 'disc' }}>
                        <li>A valid driving license</li>
                        <li>A valid ID</li>
                        <li>A valid address</li>
                        <li>A valid phone number</li>
                        <li>A valid bank account</li>
                    </ul>
                </div>
                <div  className=' flex flex-col mt-4 gap-4 w-[50%] h-auto'>
                <FaRegMoneyBillAlt />
                    <h3 className=' text-2xl '>Signup process</h3>
                    <ul style={{ listStyleType: 'disc' }}>
                       <li>Fill out the form</li>
                       <li>Upload your documents</li>
                       <li>Provide information for a background check</li>
                       <li>Get approved</li>
                       <li>Start driving</li>
                    </ul>
                </div>
                    

                </div>
                </div>
                <div className=' flex  justify-center items-center my-24 font-bold'>
                <CButton active={true} linkto={"/Signup"}>
                  Join as a driver!!
                </CButton>
                </div>
            </div>

        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Driver
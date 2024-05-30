import React from 'react'
import { Link } from 'react-router-dom'
// import insta from "../../assests/images/"
import insta from "../../assests/images/instagram-logo.png"
import linkedin from "../../assests/images/linkedin-logo.png"
import twitter from "../../assests/images/twitter.png"
import facebook from "../../assests/images/facebook(1).png"
import youtube from "../../assests/images/youtube.png"
import earth from "../../assests/images/earth.png"


const Footer = () => {
    const app=()=>{
        window.open()
    }
  return (
   <div>
    <div className='h-auto  px-[10%] my-[4%] bg-black text-white'>
        <div className=' text-2xl text-white font-semibold'>
            NavFinder
        </div>
        <div className=' mt-4 text-3xs'>
        Visit Help Center
        </div>
        <div className=' flex gap-36 mt-14'>
            <div className='text-white font-semibold text-2xl'>
                <Link to='/about'>
                    About Us
                </Link>
            </div>
            <div className='text-white font-semibold text-2xl'>
                <Link to='/contact'>
                    Contact Us
                </Link>
            </div>
            <div className='text-white font-semibold text-2xl'>
                    <Link to='/driver'>
                        Driver
                    </Link>
            </div>
            <div className='text-white font-semibold text-2xl'>
                    <Link to='/ride'>
                    Ride
                    </Link>
                    
            </div>
            
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-16'>
                <div className='my-20'>
                    <img src={insta} alt='insta' className=' h-8'></img>
                </div>
                <div className='my-20'>
                    <img src={twitter} alt='insta' className=' h-8'></img>
                </div>
                <div className='my-20'>
                    <img src={linkedin} alt='insta' className=' h-8'></img>
                </div>
                <div className='my-20'>
                    <img src={youtube} alt='insta' className=' h-8'></img>
                </div>
                <div className='my-20'>
                    <img src={facebook} alt='insta' className=' h-8'></img>
                </div>
            </div>
            <div>
                <div className='flex justify-center items-center gap-3 my-20'>
                <img src={earth} alt='insta' className=' h-4'></img>
                    English
                </div>
            </div>

        </div>
        <div className='flex gap-10'>
            <img src='https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg' alt='appStore' className='h-14'></img>
            <img src='https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg' alt='playstore' className='h-14'></img>
        </div>
        <div className='flex flex-row justify-between mt-20'>
            <div className='text-white font-semibold text-xs'>
                © 2021 NavFinder
            </div>
            <div className='flex gap-8'>
                <div className='text-white font-semibold text-xs'>
                    Terms
                </div>
                <div className='text-white font-semibold text-xs'>
                    Privacy
                </div>
                <div className='text-white font-semibold text-xs'>
                    Cookies
                </div>
                <div className='text-white font-semibold text-xs'>
                    Help
                </div>
            </div>

        </div>
        

    </div>

   </div>
  )
}

export default Footer
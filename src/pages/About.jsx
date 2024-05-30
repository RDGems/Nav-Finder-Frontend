import React from 'react'
import Navbar from '../components/Navbar'
import img from '../assests/images/Order ride.gif'
import img2 from '../assests/images/even.webp'
import Footer from '../components/core/Footer'

const About = () => {
  return (
    <div>
        
        <Navbar/>

        <div className='mx-auto flex justify-center w-11/12 px-auto max-w-maxContent '>
                <img src={img} alt='img' className=' h-[700px] w-[700px]'/> 
        </div>
        <div className=' text-white  text-4xl mt-20  px-48'>
           <h1> We reimagine the way the world moves for the better</h1>
           <p className=' text-xl mt-5'>Movement is what we power. It’s our lifeblood. It runs through our veins. It’s what gets us out of bed each morning. It pushes us to constantly reimagine how we can move better. For you. For all the places you want to go. For all the things you want to get. For all the ways you want to earn. Across the entire world. In real time. At the incredible speed of now.</p>
        </div>
        <div className=' flex text-white px-48 mt-20 justify-between'>
        <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                    <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                        Our Founding Story</h1>
                        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                        At NavFinder, our story is rooted in a shared passion for exploration and a desire to make travel more accessible and enjoyable for everyone.  The idea for NavFinder sparked during [Describe a founding scenario - e.g., a backpacking trip encountering logistical difficulties, a missed hidden gem due to lack of information], a situation that highlighted the challenges travelers often face.</p>
                        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                        We envisioned a platform that would empower us, and fellow explorers, to travel with confidence and experience the world to its fullest.  Fueled by this passion, we embarked on a journey to create NavFinder, a comprehensive travel companion that would not only simplify trip planning and navigation but also enrich the travel experience itself.</p>
                        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                        Our team is a passionate group of [Describe the team's background - e.g., travel enthusiasts, tech innovators, local experts]  who understand the unique needs and desires of travelers.  We are constantly striving to innovate and develop new features that will transform the way you explore the world.</p>
                    </div>
                    {/* right box */}
                    <div className=' mt-20 w-[500px]'>
                        <img src={img2} className='shadow-[0_0_20px_0] shadow-[#FC6767]'></img>
                    </div>
        </div>
        <div className=' flex text-white px-48 mt-20 justify-between'>
        <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                    <h1 className="bg-gradient-to-br from-[#29232d] via-[#65426e] to-[#d010e6] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                        Our Mission</h1>
                        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                        Our mission at NavFinder is to transform the way you travel. We strive to empower you to explore the world with confidence by providing a comprehensive and user-friendly platform that simplifies trip planning, streamlines navigation, and enriches your travel experience.</p>
                        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                        We believe that travel should be an adventure filled with discovery and joy.  By removing the stress and complexity of planning and navigating, NavFinder allows you to focus on creating lasting memories and experiencing the world to the fullest.</p>
                    </div>
        <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                    <h1 className="bg-gradient-to-br from-[#111011] via-[#4c6972] to-[#45d1fc] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                        Our Founding Story</h1>
                        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                        A vision statement outlines your long-term aspirations for NavFinder. It describes the impact you hope to have on the travel industry and the experience you want to create for users.</p>
                        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                        The first option emphasizes the innovative approach NavFinder takes to travel,  highlighting its potential to transform the way people explore the world. The second option focuses on the seamless, personalized, and connected travel experience NavFinder aspires to create.</p>
                    </div>
                    {/* right box */}

                   
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default About
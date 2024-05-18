import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { FaIndianRupeeSign } from "react-icons/fa6";
import {useJsApiLoader ,GoogleMap,Marker,Autocomplete,DirectionsRenderer, } from "@react-google-maps/api"
import car from "../assests/images/City driver.gif"
// const google = window.google;
const google = window.google = window.google ? window.google : {}


// import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const center={
    lat: 28.8344,
    lng: 77.5699,
}
const data=[
    {
        img:car,
        Name:"Compact Cars",
        Description:"4 seater ",
        price:886
    },
    {
        img:car,
        Name:"SUVs Cars",
        Description:"6 seater ",
        price:997

    },
]

const Ride = () => {
    // const position = {lat: 61.2176, lng: -149.8997};

    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey:"AIzaSyAmklv2wjfdYvXPvGnoTo6LcDlZ2Ix3JgU",
        libraries:['places'],

    })

    const [map,setMap]=useState(/** @type google.maps.map */ (null));
    const [distance,setDistance]=useState(' ')
    const [destinationResponse,setDestinationResponse]=useState(null)
    const [duration,setDuration]=useState(' ')

    const originRef=useRef()
    const destinationRef=useRef()

    if (!isLoaded) {
        return <div className='text-white text-4xl'>Loading...</div>
    }

    async function calculate(){
        if(originRef.current.value==='' || destinationRef.current.value===' '){
            return
        }
        const directionService=new google.maps.DirectionsService();
        const result=await directionService.route({
            origin:originRef.current.value,
            destination:destinationRef.current.value,
            travelMode:google.maps.TravelMode.DRIVING,
            
        })
        setDestinationResponse(result);
        setDistance(result.routes[0].legs[0].distance.text)
        setDuration(result.routes[0].legs[0].duration.text)
        console.log(result)

    }

    function clearRoute(){
        setDestinationResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value=" "
        destinationRef.current.value=" "
    }

  return (
   <div>
    <div>
        <Navbar/>
    </div>
    <div className=' flex mt-10  px-[10%] gap-10  '>
        <div className=' w-[25%] p-5 h-96 flex flex-col text-rose-900 border-2 rounded-md '>
            <h1 className=' text-white font-bold text-4xl my-6' >Get A Ride</h1>
            <div className='flex flex-col text-white gap-4'>
                <Autocomplete>
                    <input type='text' placeholder='From' className='border-2 border-gray-400 p-2 rounded-md text-slate-800 w-full' ref={originRef} onClick={()=>map.panTo(center)}/>
                </Autocomplete>
                <Autocomplete>
                    <input type='text' placeholder='To' className='border-2 border-gray-400 p-2 rounded-md text-slate-800 w-full' ref={destinationRef}/>
                </Autocomplete>
                <button className='bg-slate-800 p-2 rounded-md font-semibold text-xl hover:bg-black ' onClick={calculate}>Search</button>
                <button className='bg-slate-800 p-2 rounded-md font-semibold text-xl hover:bg-black ' onClick={clearRoute}>clear</button>
                {/* <input type='text' placeholder='Date' className='border-2 border-gray-400 p-2 rounded-md'/>
                <input type='text' placeholder='Time' className='border-2 border-gray-400 p-2 rounded-md'/>
                <input type='text' placeholder='Seats' className='border-2 border-gray-400 p-2 rounded-md'/> */}
                {/* <input type='text' placeholder='Price' className='border-2 border-gray-400 p-2 rounded-md'/> */}
            </div>

        </div>
        <div className='w-[40%]'>
            {
                data.map((ele,index)=>{
                    return(
                        <div key={index} className=' bg-white border-2 rounded-md flex justify-between mb-5'>
                            <div className='flex items-center font-semibold gap-4'>
                            <img src={ele.img} className='w-20 h-20 object-cover' alt='img'/>
                            <div className='flex flex-col'>
                                <h1 className='text-black text-xl font-bold'>{ele.Name}</h1>
                                <p className='text-black text-sm'>{ele.Description}</p>
                            </div>

                            </div>
                            <h1 className='flex px-4 text-black text-2xl font-bold justify-center items-center'><FaIndianRupeeSign className=' h-5 px-0' />
                            
                            {ele.price}</h1>
                            

                        </div>
                    )

                })
            }

        </div>
        <div className='w-[500px] h-[570px]  bg-white border-2 rounded-md'>
            {/* google map */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.5111111111114!2d77.5945609142419!3d12.97159299084419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167b2c8b9f5f%3A0x3c4f8d1c2c1d6d1!2sKoramangala%20Sarjapur%20Road%2C%20Koramangala%2C%20Bangalore%2C%20Karnataka%201560034!5e0!3m2!1sen!2sin!4v1639844892046!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe> */}
            
                <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%',height:'100%'}} options={{
                    fullscreenControl:false,
                    mapTypeControl:false,
                    streetViewControl:false,
                    rotateControl:false,
                    scaleControl:false,
                    zoomControl:false,
                }}
                
                onLoad={map=>{
                    setMap(map)
                }}>
                    <Marker position={center}/>  
                    {destinationResponse&&<DirectionsRenderer directions={destinationResponse}/>}   
                    {/* <Marker position={{let:28.111,log:78.18}}/>           */}
                </GoogleMap>

        </div>

    </div>
   </div>

  )
}

export default Ride
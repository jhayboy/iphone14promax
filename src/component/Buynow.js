import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {IoIosArrowForward} from 'react-icons/io'
import {CiDeliveryTruck} from 'react-icons/ci'
import {MdReplay} from 'react-icons/md'
import {SiAdguard} from 'react-icons/si'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {LuWallet} from 'react-icons/lu'
import {CiWarning} from 'react-icons/ci'
import {BsDot} from "react-icons/bs"
import PayPalPay from './PayPalPay'


export default function Buynow() {
    const [quantity, setQuantity] = useState(true)
    const [review, setReview] = useState(false)
    const [days, setDays ] = useState("")
    const [hours, setHours ] = useState("")
    const [minutes, setMinutes ] = useState("")
    const [seconds, setSeconds ] = useState("")

    const countDownDate = new Date("Nov 10, 2023 00:00:00").getTime();
    const countdownInterval = 1000;

    const calculateTimeRemaining = () => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // You can use these values to display the countdown in your component
        // For example, set them in state to render in your component
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    };

    useEffect(() => {
        const intervalId = setInterval(calculateTimeRemaining, countdownInterval);

        // Call calculateTimeRemaining initially to update the countdown immediately.
        calculateTimeRemaining();

        return () => clearInterval(intervalId);
    }, []);
    
    

    

    
    const handleClick = () => {
        setQuantity(!quantity)
    }

    const showReview = () => {
        setReview(true)
    }

    const showDescription = () => {
        setReview(false)
    }
  return (
    <div className='bg-black'>
        <div>
            <div className='w-full p-5 lg:px-20 flex justify-between items-center bg-black text-white'>
                <div>
                    <p className='text-lg lg:text-4xl font-bold '>Buy iPhone 14 Pro Max</p>
                    <div className='flex items-center text-xs lg:text-sm md:text-sm mt-3 gap-1'>
                        <Link to='/'><p>Home</p></Link>
                        <IoIosArrowForward className='text-gray-950 text-md'/>
                        <p className='text-gray-400'>iPhone 14 Pro Max 256GB</p>
                    </div>
                </div>
                <div className='flex gap-1 lg:gap-3 mt-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='border-2 rounded-md border-white text-center p-1'>
                            <p>{days < 10 ? "0" + days : days}</p>
                        </div>
                        <p className='font-semibold text-gray-500 text-sm'>Days</p>
                    </div>


                    <div className='flex flex-col justify-center items-center'>
                        <div className='border-2 rounded-md border-white text-center p-1'>
                            <p>{hours < 10 ? "0" + hours : hours}</p>
                        </div>
                        <p className='font-semibold text-gray-500 text-sm'>Hrs</p>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='border-2 rounded-md border-white text-center p-1'>
                            <p>{minutes < 10 ? "0" + minutes : minutes}</p>
                        </div>
                        <p className='font-semibold text-gray-500 text-sm'>Min</p>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='border-2 rounded-md border-white text-center p-1'>
                            <p>{seconds < 10 ? "0" + seconds : seconds}</p>
                        </div>
                        <p className='font-semibold text-gray-500 text-sm'>Sec</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex flex-col md:grid md:grid-cols-2 gap-4 justify-center px-5 bg-black text-white'>
                    <div className=' bg-[#fafafa] rounded-2xl flex justify-center items-center'>
                        <img className='w-[350px] rounded-2xl' src='https://i0.wp.com/www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg?w=1170&ssl=1' alt='iphon14promax'/>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex flex-col justify-between border border-gray-600 rounded-lg w-[60%] p-3'>
                            <div>
                                <div className='flex justify-between'>
                                    <div className='flex items-center text-lg'>
                                        <LuWallet className=''/>
                                        <p className='font-semibold px-3 py-5'>$499.99</p>
                                    </div>
                                    <div className='flex justify-center items-center gap-2'>
                                        <button className='border p-2 rounded-full w-4 h-4 flex justify-center items-center font-semibold '>-</button>
                                        <p className='border px-3'>1</p>
                                        <button onClick={handleClick} className='border p-2 rounded-full w-4 h-4 flex justify-center items-center font-semibold'>+</button>
                                    </div>
                                </div>
                                <div className={quantity ? 'hidden' : 'flex gap-3 mb-3'}>
                                    <CiWarning className='text-yellow-400 text-xl'/>
                                    <p className='text-sm'>Quantity is fixed at 1unit per customer</p>  
                                </div>
                            </div>
                            <PayPalPay/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='lg:flex lg:items-center gap-3 border border-gray-600 rounded-lg p-2 '>
                                <CiDeliveryTruck className='text-3xl'/>
                                <div className='text-sm'>
                                    <p className='font-semibold'>Fast Shipping</p>
                                    <p>Receive products in amazing time</p>
                                </div>
                            </div>

                            <div className='lg:flex lg:items-center gap-3 border border-gray-600 rounded-lg p-2 '>
                                <MdReplay className='text-3xl'/>
                                <div className='text-sm'>
                                    <p className='font-semibold'>Easy Returns</p>
                                    <p>Return policy that lets you shop at ease</p>
                                </div>
                            </div>


                            <div className='lg:flex lg:items-center gap-3 border border-gray-600 rounded-lg p-2 '>
                                <SiAdguard className='text-3xl'/>
                                <div className='text-sm'>
                                    <p className='font-semibold'>Always Authentic</p>
                                    <p>We only sell 100% authentic products</p>
                                </div>
                            </div>


                            <div className='lg:flex lg:items-center gap-3 border border-gray-600 rounded-lg p-2 '>
                                <RiSecurePaymentFill className='text-3xl '/>
                                <div className='text-sm'>
                                    <p className='font-semibold'>Secure Shopping</p>
                                    <p>Your data is always protected</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col justify-center items-center mt-16 gap-5 bg-black'>
                    <p className='text-3xl font-bold '>What's in the Box</p>
                    <div className='w-[90%] lg:w-[70%] bg-[#fafafa] lg:flex lg:justify-center lg:gap-60 lg;px-10 lg:rounded-3xl '>
                        <div className='flex flex-col items-center gap-1'>
                            <img className='w-[280px] m-0' src='https://i0.wp.com/www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg?w=1170&ssl=1' alt='items in the box'/>
                            <p>iPhone 14 Pro Max</p>
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <img className="" src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-cables-witb-202209?wid=92&hei=392&fmt=jpeg&qlt=95&.v=1660679135172' alt='items in the box'/>
                            <p>USB-C to Lightning Cable</p>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className='bg-black tex-white w-full flex justify-center'>
                <div className='w-[90%] lg:w-[70%] bg-black text-white mt-10'>
                    <div className='flex border-b gap-10 p-5'>
                        <button onClick={showDescription} className={!review ? "text-gray-400" : ""}>Description</button>
                        <button onClick={showReview} className={!review ? "" : "text-gray-400"}>Reviews</button>
                    </div>
                    
                    {review ? <div>
                        <div>
                            <div>
                                <img src='' alt=''/>
                                <p> Jesse Hopkins</p>
                            </div>
                        <p></p>
                        </div>
                    </div> : <div className='p-2 lg:p-5 flex flex-col gap-5'>
                        <p className='text-3xl'>Apple iPhone 14 Pro Max 256GB</p>
                        <ul>
                            <li className='flex '><BsDot className='text-xl'/> Super Retina XDR display</li>
                            <li className='flex '><BsDot className='text-xl'/> 6.7-inch (diagonal) all-screen ulED display</li>
                            <li className='flex '><BsDot className='text-xl'/> 2796‑by‑1290-pixel resolution at 460 ppi</li><br/>
                            <li className='flex '><BsDot className='text-xl'/> Dynamic Island</li>
                            <li className='flex '><BsDot className='text-xl'/> Always-On display</li>
                            <li className='flex '><BsDot className='text-xl'/> ProMotion technology with adaptive refresh rates up to 120Hz</li>
                            <li className='flex '><BsDot className='text-xl'/> HDR display</li>
                            <li className='flex '><BsDot className='text-xl'/> True Tone</li>
                            <li className='flex '><BsDot className='text-xl'/> Wide Color (P3)</li>
                            <li className='flex '><BsDot className='text-xl'/> Haptic Touch</li>
                            <li className='flex '><BsDot className='text-xl'/> 2,000,000:1 contrast ratio (typical)</li>
                            <li className='flex '><BsDot className='text-xl'/> 1000 nits max brightness (typical); 1600 nits peak brightness (HDR); 2000 nits peak brightness (outdoor)</li>
                            <li className='flex '><BsDot className='text-xl'/> Fingerprint-resistant oleophobic coating</li>
                            <li className='flex '><BsDot className='text-xl'/> Support for display of multiple languages and characters simultaneously</li><br/>
                            <li className='flex '><BsDot className='text-xl'/> A16 Bionic chip</li>
                            <li className='flex '><BsDot className='text-xl'/> 5‑core GPU</li>
                            <li className='flex '><BsDot className='text-xl'/> 16‑core Neural Engine <Link to="/tech&features"><span className='text-blue-500'>....learn more</span></Link></li>
                        </ul>
                    </div>}

                </div>
            </div>
        </div>
       
    </div>
  )
}

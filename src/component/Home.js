import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {BsChevronDown} from "react-icons/bs";
import phone from "../component/iphoness.jpg"

export default function Home() {


  const [imageOpacity, setImageOpacity] = useState(0);
    // const [showVideo, setShowVideo] = useState(true);
    //  const [imageOpacity, setImageOpacity] = useState(0);

  // useEffect(() => {
  //   // Automatically end the video after 4 seconds
  //   const timer = setTimeout(() => {
  //     setShowVideo(false);
  //   }, 4000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

    useEffect(() => {
    // Automatically end the video after 4 seconds
    const timer = setTimeout(() => {
      
      // Gradually increase the image opacity over 2 seconds
      const opacityTimer = setInterval(() => {
        setImageOpacity((prevOpacity) =>
          prevOpacity + 0.1 >= 1 ? 1 : prevOpacity + 0.1
        );
      }, 10);
      // Clear the opacity timer after 2 seconds
      setTimeout(() => {
        clearInterval(opacityTimer);
      }, 1000);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, );


  //   useEffect(() => {
  //   // Automatically end the video after 4 seconds
  //   const timer = setTimeout(() => {
  //     // Gradually reduce the video content opacity over 2 seconds
  //     const opacityTimer = setInterval(() => {
  //       setVideoOpacity((prevOpacity) =>
  //         prevOpacity - 0.1 <= 0 ? 0 : prevOpacity - 0.1
  //       );
  //     }, 20);
  //     // Gradually increase the image opacity over 2 seconds
  //     const imageOpacityTimer = setInterval(() => {
  //       setImageOpacity((prevOpacity) =>
  //         prevOpacity + 0.15 >= 1 ? 1 : prevOpacity + 0.15
  //       );
  //     }, 20);

  //     // Clear the timers after 2 seconds
  //     setTimeout(() => {
  //       clearInterval(opacityTimer);
  //       clearInterval(imageOpacityTimer);
  //       setShowVideo(false);
  //     }, 1000);
  //   }, 4000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);



  const [drop, setDrop] = useState(false)
  // const navigate = useNavigate()

  const handleClick = () => {
    setDrop(!drop)
  }
  return (
    <div className='bg-black border-none border-collapse'>
      {/* Navbar */}
        <div className='border-b-2 border-gray-600 fixed w-full'>
          <div className='flex justify-between items-center w-full lg:px-48 md:px-20 px-3 py-3 bg-black text-white'>
            <div>
              <p className='font-bold text-lg'>iPhone 14 Pro</p>
            </div>
            <div className=' flex gap-5 justify-center items-center text-sm '>
              <div className='lg:flex md:flex justify-center items-center gap-5 hidden'>
                <p className="text-gray-500">Overview</p>
                <Link to="/tech&features"><p>Tech Specs</p></Link>
              </div>
              <div className='flex lg:hidden md:hidden text-white text-lg'><BsChevronDown onClick={handleClick}/></div>
              <Link to="/iphone-checkout"><button className='bg-blue-500 rounded-full text-white px-3 py-1'>Buy Now</button></Link>
              
            </div>
          </div>
          <div className={drop ? 'flex flex-col p-5 gap-3 text-white bg-black' : 'hidden'}>
            <p className='border-b-2 border-b-slate-600 pb-2 text-gray-500'>Overview</p>
            <Link to="/tech&features"><p>Tech Specs</p></Link>
          </div>
        </div>
        {/* end of the navbar */}

        {/* the banner */}
        <div className=' lg:px-48 md:px-20 bg-black lg:py-5 py-3 flex flex-col px-3'>
          <div className=' mt-20 mb-16 flex justify-center items-center lg:justify-between text-white'>
            <p className='font-semibold lg:text-7xl text-5xl'>Pro.Beyond</p>
            <p className='hidden lg:flex'></p>
          </div>
          <div className='flex justify-center w-full'>
            <img src={phone} className='w-full h-full' style={{ opacity: imageOpacity, transition: 'opacity 0.5s ease-in-out' }} alt="BannerImage"/>
          </div>
          <div className='text-white flex flex-col items-center mt-5 lg:hidden'>
            <p> </p>
            <div className='flex gap-2'>
              <div className='w-5 h-5 rounded-full bg-[#594f63]'></div>
              <div className='w-5 h-5 rounded-full bg-[#f4e8ce]'></div>
              <div className='w-5 h-5 rounded-full bg-[#f0f2f2]'></div>
              <div className='w-5 h-5 rounded-full bg-[#403e3d]'></div>
            </div>
          </div>
        </div>
        {/* END OF BANNER */}


        {/* Beginning of second Section */}
        <div className='w-full bg-[#161617] lg:px-48 md:px-20 px-3'>
          <div>
            <div className='flex justify-center flex-col items-center gap-8 '>
              <p className='font-semibold text-3xl text-white mt-12'>iPhone 14 Pro and <br className='flex sm:hidden'/> iPhone 14 Pro Max</p>
              <Link to="/iphone-checkout"><button className='bg-blue-500 rounded-full text-white px-3 py-1 mb-12'>Buy Now</button></Link>
            </div>
            <div>
            </div>
          </div>
        </div>
        {/* END OF SECOND SECTION */} 



        {/* BEGINNING OF THIRD SECTION */}
        <div className='lg:px-48 md:px-20 px-3 w-full'>
          <div>
            <div className='mt-12  flex flex-col gap-10 justify-center lg:px-0 px-10'>
              <p className='font-semibold text-white lg:text-5xl text-3xl'>Meet<br className='flex sm:hidden'/> Dynamic Island.</p>
              <p className='text-gray-500 font-semibold lg:text-xl text-lg mb-12'>Dynamic island <span className='text-white'>bubbles up music, phone calls, and so much more</span> - without taking you away from what you're doing</p>
            </div>
            <div className='flex justify-center px-20'>
              <img className='w-full h-full object-cover' src='https://www.apple.com/euro/iphone-14-pro/b/screens_alt/images/key-features/features/dynamic-island/dd_dynamic_island_bubbles__eta5uuag8ay6_large_2x.jpg' alt='iPhone 14'/>
            </div>
          </div>
        </div>
        {/* END OF THIRD SECTION */}




        {/* BEGINNING OF FOURTH SECTION */}
        <div className='lg:px-48 md:px-20 px-3 w-full'>
          <div className='lg:grid lg:grid-flow-col md:grid md:grid-flow-col mt-32 flex flex-col items-center gap-14'>
            <p className='text-gray-500 font-semibold lg:text-xl md:w-[50%] text-lg w-full'>You can see your next turn in <span className='text-white'>Maps</span>, touch and hold to control <span className='text-white'>your music</span> and more</p>
            <div className='flex'>
              <img className='mr-auto' src='https://www.apple.com/euro/iphone-14-pro/b/screens_alt/images/key-features/features/dynamic-island/dd_dynamic_island_maps__drdgsqw9heaa_small.jpg' alt='imessage'/>
            </div>
          </div>
        </div>


        {/* Section 5 */}
        <div className='lg:px-48 md:px-20 px-3 w-full mt-32 bg-[#161617] border-0'>
          <div className='grid grid-rows-2 w-full gap-5 py-20 lg:flex lg:justify-center lg:items-center lg:h-full  md:flex md:justify-center md:items-center md:h-full'>
            <div className='bg-black p-8 rounded-2xl flex flex-col items-center gap-5 h-full w-full'>
              <p className='text-[#f493f2] font-bold text-3xl text-center'>Meet<br/> Dynamic Island.</p>
              <img className='w-[90%]' src='https://www.apple.com/v/iphone-14-pro/h/images/key-features/features/dynamic-island/dynamic_island_deep_purple__exowosw6732a_medium.jpg' alt='dynamic island'/>
            </div>
           

            <div className='flex flex-col w-full lg:grid lg:grid-rows-2  md:grid md:grid-rows-2 gap-5 '>
              <div className='bg-hero-pattern bg-center bg-no-repeat bg-cover flex flex-col p-5 bg-black rounded-2xl'>
                <p className='text-white font-bold text-2xl  mt-auto'>48MP Main camera.<br/>Mind-blowing detail.</p>
              </div>

              <div className='bg-black rounded-2xl p-4'>
                <p className='text-[#f493f2] font-bold text-3xl'>The <br/>mastermind<br/> behind it all.</p>
                <img src='https://www.apple.com/v/iphone-14-pro/h/images/key-features/features/chip/chip_deep_purple__bs3dtgitlt6q_small.jpg' alt='ai chip'/>
              </div>
            </div>
          </div>

          <div className='w-full pb-3'>
            <div className='md:flex lg:flex justify-center lg:gap-5 md:gap-5'>
              <div className='bg-black p-8 rounded-2xl flex flex-col items-center gap-5 w-full sm:mb-5'>
                <p className='text-white font-semibold '>Ceramic Shield</p>
                <p className='text-[#f493f2] font-bold text-2xl text-center'>Tougher than any <br/>smartphone glass.</p>
                <img className='w-[90%]' src='https://www.apple.com/v/iphone-14-pro/h/images/key-features/features/ceramic/ceramic_deep_purple__fhc53fxovp2e_medium.jpg' alt='dynamic island'/>
              </div>

              <div className='flex gap-3 mt-5 lg:grid lg:grid-rows-2 lg:mt-0   md:grid md:grid-rows-2 md:mt-0'>
                <div className='bg-black text-white w-full  rounded-2xl p-4 lg:w-full md:w-full'>
                  <p className='text-center font-semibold text-lg'>A camera<br/> in a class by itslefie.</p>
                  <img src='https://www.apple.com/v/iphone-14-pro/h/images/key-features/features/true-depth/selfie_deep_purple__fmaespigvcqe_large.jpg' alt='selfie'/>
                </div>
 
                <div className='bg-black text-white w-full lg:w-full  md:w-full rounded-2xl flex justify-center items-center'>
                  <div className='rounded-full border-2 w-[50%] h-[50%] border-[#f493f2] flex justify-center items-center '>
                    <p className='text-[#f493f2] text-xl text-center'>Crash<br/> Detector</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {BsChevronDown, BsDot} from "react-icons/bs"

export default function Tech() {
    const [drop, setDrop] = useState(false)
    // const navigate = useNavigate()

    const handleClick = () => {
        setDrop(!drop)
    }
  return (
    <div>
      {/* NAVBAR FOR TECH AND FEATURES */}
      <div className='border-b-2 border-gray-600 fixed w-full'>
        <div className='flex justify-between  w-full lg:px-48 md:px-20 px-3 py-3 bg-black text-white'>
          <div>
            <p className='font-bold text-lg'>iPhone 14 Pro</p>
          </div>
          <div className=' flex gap-5 justify-center  text-sm '>
            <div className='lg:flex md:flex justify-center  gap-5 hidden'>
              <Link to="/"><p className="">Overview</p></Link>
              <p className='text-gray-500'>Tech Specs</p>
            </div>
            <div className='flex lg:hidden md:hidden text-white text-lg'><BsChevronDown onClick={handleClick}/></div>
            <Link to="/iphone-checkout"><button className='bg-blue-500 rounded-full text-white px-3 py-1'>Buy Now</button></Link>
          </div>
        </div>
        <div className={drop ? 'flex flex-col p-5 gap-3 text-white bg-black' : 'hidden'}>
          <Link to="/"><p className='border-b-2 border-b-slate-600 pb-2 '>Overview</p></Link>
          <p className='text-gray-500'>Tech Specs</p>
        </div>
      </div>
    
      <div className='pt-16 lg:pl-16 pl-5 flex flex-col gap-5 text-gray-400 bg-black'>
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
          <li className='flex '><BsDot className='text-xl'/> 16‑core Neural Engine </li>
        </ul>
      </div>

      <div className='lg:px-16 px-5 flex flex-col gap-2 pt-5 text-gray-400 bg-black'>
        <p className='text-lg'>Camera</p>
        <ul>
          <li className='flex '><BsDot className='text-xl font-semibold'/> Pro camera system</li>
          <li className='flex '><BsDot className='text-xl'/> 48MP Main: 24 mm, ƒ/1.78 aperture, second-generation sensor-shift optical image stabilization, seven‑element lens, 100% Focus Pixels</li>
          <li className='flex '><BsDot className='text-xl'/> 12MP Ultra Wide: 13 mm, ƒ/2.2 aperture and 120° field of view, six‑element lens, 100% Focus Pixels</li>
          <li className='flex '><BsDot className='text-xl'/> 12MP 2x Telephoto (enabled by quad-pixel sensor): 48 mm, ƒ/1.78 aperture, second-generation sensor-shift optical image stabilization, seven‑element lens, 100% Focus Pixels</li>
          <li className='flex '><BsDot className='text-xl'/> 12MP 3x Telephoto: 77 mm, ƒ/2.8 aperture, optical image stabilization, six-element lens</li>
          <li className='flex '><BsDot className='text-xl'/> 3x optical zoom in, 2x optical zoom out; 6x optical zoom range; digital zoom up to 15x</li>
          <li className='flex '><BsDot className='text-xl'/> Sapphire crystal lens cover</li>
          <li className='flex '><BsDot className='text-xl'/> Adaptive True Tone flash</li>
          <li className='flex '><BsDot className='text-xl'/> Photonic Engine</li>
          <li className='flex '><BsDot className='text-xl'/> Deep Fusion</li>
          <li className='flex '><BsDot className='text-xl'/> Smart HDR 4</li>
          <li className='flex '><BsDot className='text-xl'/> Portrait mode with advanced bokeh and Depth Control</li>
          <li className='flex '><BsDot className='text-xl'/> Portrait Lighting with six effects (Natural, Studio, Contour, Stage, Stage Mono, High‑Key Mono)</li>
          <li className='flex '><BsDot className='text-xl'/> Night mode</li>
          <li className='flex '><BsDot className='text-xl'/> Night mode portraits enabled by LiDAR Scanner</li>
          <li className='flex '><BsDot className='text-xl'/> Panorama (up to 63MP)</li>
          <li className='flex '><BsDot className='text-xl'/> Photographic Styles</li>
          <li className='flex '><BsDot className='text-xl'/> Macro photography</li>
          <li className='flex '><BsDot className='text-xl'/> Apple ProRAW</li>
          <li className='flex '><BsDot className='text-xl'/> Wide color capture for photos and Live Photos</li>
          <li className='flex '><BsDot className='text-xl'/> Lens correction (Ultra Wide)</li>
          <li className='flex '><BsDot className='text-xl'/> Advanced red‑eye correction</li>
          <li className='flex '><BsDot className='text-xl'/> Auto image stabilization</li>
          <li className='flex '><BsDot className='text-xl'/> Burst mode</li>
          <li className='flex '><BsDot className='text-xl'/> Photo geotagging</li>
          <li className='flex '><BsDot className='text-xl'/> Image formats captured: HEIF, JPEG, and DNG</li>
        </ul>
      </div>


      <div className='lg:px-16 px-5 flex flex-col gap-2 pt-5 pb-5 text-gray-400 bg-black'>
        <p className='text-lg'>Video Recording</p>
        <ul>
          <li className='flex '><BsDot className='text-xl font-semibold'/> 4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps</li>
          <li className='flex '><BsDot className='text-xl'/> 1080p HD video recording at 25 fps, 30 fps, or 60 fps</li>
          <li className='flex '><BsDot className='text-xl'/> 720p HD video recording at 30 fps</li>
          <li className='flex '><BsDot className='text-xl'/> Cinematic mode up to 4K HDR at 30 fps</li>
          <li className='flex '><BsDot className='text-xl'/> Action mode up to 2.8K at 60 fps</li>
          <li className='flex '><BsDot className='text-xl'/> HDR video recording with Dolby Vision up to 4K at 60 fps</li>
          <li className='flex '><BsDot className='text-xl'/> ProRes video recording up to 4K at 30 fps (1080p at 30 fps for 128GB storage)</li>
          <li className='flex '><BsDot className='text-xl'/> Macro video recording, including slo-mo and time-lapse</li>
          <li className='flex '><BsDot className='text-xl'/> Slo‑mo video support for 1080p at 120 fps or 240 fps</li>
          <li className='flex '><BsDot className='text-xl'/> Time‑lapse video with stabilization</li>
          <li className='flex '><BsDot className='text-xl'/> Night mode Time-lapse</li>
          <li className='flex '><BsDot className='text-xl'/> QuickTake video</li>
          <li className='flex '><BsDot className='text-xl'/> Second‑generation sensor‑shift optical image stabilization for video (Main)</li>
          <li className='flex '><BsDot className='text-xl'/> Dual optical image stabilization for video (Main and Telephoto)</li>
          <li className='flex '><BsDot className='text-xl'/> 3x optical zoom in, 2x optical zoom out; 6x optical zoom range</li>
          <li className='flex '><BsDot className='text-xl'/> Digital zoom up to 9x</li>
          <li className='flex '><BsDot className='text-xl'/> Audio zoom</li>
          <li className='flex '><BsDot className='text-xl'/> Audio zoom</li>
          <li className='flex '><BsDot className='text-xl'/> True Tone flash</li>
          <li className='flex '><BsDot className='text-xl'/> Cinematic video stabilization (4K, 1080P, and 720p)</li>
          <li className='flex '><BsDot className='text-xl'/> Continuous autofocus video</li>
          <li className='flex '><BsDot className='text-xl'/> Take 8MP still photos while recording 4K video</li>
          <li className='flex '><BsDot className='text-xl'/> Playback zoom</li>
          <li className='flex '><BsDot className='text-xl'/> Video formats recorded: HEVC, H.264, and ProRes</li>
          <li className='flex '><BsDot className='text-xl'/> Stereo recording</li>
        </ul>
      </div>

    </div>
  )
}

import React from 'react'
import {IoIosArrowForward} from "react-icons/io"
import {AiFillApple} from "react-icons/ai"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='lg:px-48 md:px-20 p-5 w-full bg-[#161617]'>
        <div className='text-gray-500 flex flex-col pb-5 gap-3 border-b border-b-gray-500 text-sm'>
            <p>1. All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See <a className='text-gray-300 underline' href='https://www.apple.com/batteries/'>apple.com/batteries</a> and <a className='text-gray-300 underline' href='https://www.apple.com/iphone/battery.html'>apple.com/iphone/battery.html</a> for more information.</p>
            <p>2. Accessories sold separately.</p>
            <p>3. iPhone 14 Pro and iPhone 14 Pro Max are splash, water, and dust resistant and were tested under controlled laboratory conditions with a rating of IP68 under IEC standard 60529 (maximum depth of 6 meters up to 30 minutes). Splash, water, and dust resistance are not permanent conditions. Resistance might decrease as a result of normal wear. Do not attempt to charge a wet iPhone; refer to the user guide for cleaning and drying instructions. Liquid damage not covered under warranty. </p>
            <p>4. iPhone 14 and iPhone 14 Pro can detect a severe car crash and call for help. Requires a cellular connection or Wi‑Fi calling.</p>
            <p>5. The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.42 inches (iPhone 13 mini), 6.06 inches (iPhone 14, iPhone 13), 6.12 inches (iPhone 14 Pro), 6.68 inches (iPhone 14 Plus), or 6.69 inches (iPhone 14 Pro Max) diagonally. Actual viewable area is less.</p>
            <p>6. Data plan required. 5G is available in select markets and through select carriers. Speeds vary based on site conditions and carrier. For details on 5G support, contact your carrier and see <a className='text-gray-300 underline' href='https://www.apple.com/iphone/cellular/'>apple.com/iphone/cellular</a>.</p>
            <p>Some features may not be available for all countries or all areas. <a className='text-gray-300 underline' href='https://www.apple.com/ios/feature-availability/'>View complete list</a>.</p>
        </div>
        <div>
            <div>
                <div className='text-gray-300 flex gap-3 items-center mt-4'>
                    <AiFillApple className='text-xl'/>
                    <IoIosArrowForward className='text-xl text-gray-600'/>
                    <Link to="https://www.apple.com/iphone/">iPhone</Link>
                    <IoIosArrowForward className='text-xl text-gray-600'/>
                    <p>iPhone 14 Pro</p>
                </div>
                <div className='lg:grid lg:grid-cols-4 mt-3'>
                    <div>
                        <p className='text text-white mb-2'>Explore</p>
                        <div className='text-gray-300 flex flex-col text-xs gap-2'>
                            <a className='hover:underline'href='https://www.apple.com/mac/'>Mac</a>
                            <a className='hover:underline' href='https://www.apple.com/ipad/'>iPad</a>
                            <a className='hover:underline' href='https://www.apple.com/iphone/'>iPhone</a>
                        </div>
                    </div>

                    <div>
                        <p className='text text-white mb-2'>Account</p>
                        <div className='text-gray-300 flex flex-col text-xs gap-2'>
                            <a className='hover:underline' href='https://appleid.apple.com/'>Manage Your Apple ID</a>
                            <a className='hover:underline' href='https://icloud.com'>iCloud.com</a>
                        </div>
                    </div>

                    <div className='text-gray-300 flex flex-col text-xs gap-2'>
                        <p className='text-sm text-white mb-2'>Apple Values</p>
                        <div className='text-gray-300 flex flex-col text-xs gap-2'>
                            <a className='hover:underline' href='https://www.apple.com/legal/privacy/en-ww/'>Privacy</a>
                        </div>
                    </div>

                    <div>
                        <p className='text text-white mb-2'>About Apple</p>
                        <div className='text-gray-300 flex flex-col text-xs gap-2'>
                            <a className='hover:underline' href='https://www.apple.com/newsroom/'>Newsroom</a>
                            <a className='hover:underline' href='https://www.apple.com/leadership/'>Apple Leadership</a>
                            <a className='hover:underline' href='https://www.apple.com/careers/'>Career Opportunity</a>
                            <a className='hover:underline' href='https://www.investor.apple.com/'>Investors</a>
                            <a className='hover:underline' href='https://www.apple.com/compliance/'>Ethics & Compliance</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

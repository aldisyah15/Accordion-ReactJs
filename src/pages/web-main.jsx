import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

  <nav className='flex justify-around font-sans text-white h-[90px] text-lg sticky bg-gray-900 z-50'>

                {/* Image */}
                <div className=''>
                   <a href="#"> <img src="/Logo.png" alt="Logo" /> </a>
                </div>

                    {/* List Nav */}
                <div>
                <ul className='flex font-medium w-96 justify-between'>
                <li className='group'>
                    <a href="#">Home</a>
                    <div className='opacity-0 w-7 h-0.5 bg-gradient-to-l from-teal-700 to-emerald-700 group-hover:opacity-100 mx-auto'></div>
                </li>
                <li className='group'>
                    <a href="#">Services</a>
                    <div className=' opacity-0 w-7 h-0.5 bg-gradient-to-l from-teal-700 to-emerald-700 group-hover:opacity-100 mx-auto'></div>
                </li>
                <li className='group'>
                    <a href="#">Project</a>
                       <div className=' opacity-0 w-7 h-0.5 bg-gradient-to-l from-teal-700 to-emerald-700 group-hover:opacity-100 mx-auto'></div>
                    </li>
                <li className='group'>
                    <a href="#">About Us</a>
                    <div className=' opacity-0 w-7 h-0.5 bg-gradient-to-l from-teal-700 to-emerald-700 group-hover:opacity-100 mx-auto'></  div>
                 </li>
                </ul>
                </div>

                    {/* Button */}
                <div>
                    <button type="button" className='bg-gradient-to-l from-teal-700 to-emerald-400 w-[134px] h-14 rounded-full font-medium text-lg'>Contact Us</button>
                </div>
{/* --------------------------------------------------------------------------------------------------------------------------------- */}
            </nav>


export const WebMain = () => {
    return (
        <div>
                    <div className=' bg-Ornament-box bg-gray-900 w-full h-[900px] bg-cover '> 
{/*--------------------------------------------------------------------------------------------------------------------------------*/}
            {/* Navigasi */}
            <nav className='flex justify-around font-sans top-0 text-white h-[90px] text-lg sticky bg-gray-900 z-50 items-center'>

                {/* Image */}
                <div className=''>
                   <a href="#"> <img src="/Logo.png" alt="Logo" /> </a>
                </div>

                    {/* List Nav */}
                <div>
                <ul className='flex font-medium w-96 justify-between'>
                <li className='group'>
                    <a href="#">Home</a>
                    <div className='opacity-0 w-7 h-0.5 bg-gradient-to-l from-teal-700 to-emerald-700 group-hover:opacity-100 mx-auto'></div>
                </li>
                <li className='group'>
                    <a href="#">Services</a>
                    <div className=' opacity-0 w-7 h-0.5 bg-gradient-to-l from-teal-700 to-emerald-700 group-hover:opacity-100 mx-auto'></div>
                </li>
                <li className='group'>
                    <a href="#">Project</a>
                       <div className=' opacity-0 w-7 h-0.5 bg-gradient-to-l from-teal-700 to-emerald-700 group-hover:opacity-100 mx-auto'></div>
                    </li>
                <li className='group'>
                    <a href="#">About Us</a>
                    <div className=' opacity-0 w-7 h-0.5 bg-gradient-to-l from-teal-700 to-emerald-700 group-hover:opacity-100 mx-auto'></  div>
                 </li>
                </ul>
                </div>

                    {/* Button */}
                <div>
                    <button type="button" className='bg-gradient-to-l from-teal-700 to-emerald-400 w-[134px] h-14 rounded-full font-medium text-lg'>Contact Us</button>
                </div>
{/* --------------------------------------------------------------------------------------------------------------------------------- */}
            </nav>


                {/* Section 1 */}
            <section className='flex items-center flex-col mt-24'>

                <div className='w-[320px] h-11 bg-white bg-opacity-10 rounded-full flex items-center justify-center'>
                    <h1 className='text-white font-sans font-medium text-sm text-center'>NUMBER ONE CREATIVE DIGITAL AGENCY </h1>
                </div>

                <div className=' mt-4'>
                    <h1 className='text-teal-400 text-7xl font-bold font-sans text-center'>Smart Choices</h1>
                    <h1 className='text-7xl text-white font-bold text-center'>For Your Business Growth</h1>
                    <h1 className='text-center text-gray-400 mt-2'>We're a team of experienced designers, developers, <br /> and marketers, passionate about delivering exceptional digital solutions.</h1>
                </div>

                <div>
                    <button type="button" className='bg-gradient-to-l from-teal-700 to-emerald-400 w-[140px] h-14 rounded-full mt-5 relative text-white text-lg font-medium'>Contact Us 
                    <span className='fa-solid fa-arrow-right ml-2'></span>
                     </button>
                </div>
            </section>

                {/* Section 2 */}
            <section className='flex justify-center mt-9 relative'>
               <img className='w-[1210px]' src="/Shape.png" alt="ll" />
              <div className='absolute flex justify-center font-sans text-3xl text-white font-semibold mt-5'>
                <h1 className=''>Benefit of improving your business</h1>
              </div>

              <div className='absolute flex justify-between w-[850px] h-[320px] items-center text-white font-sans font-semibold'>
                <a href="#">
                    <img className='ml-10' src="/Wrap.png" alt="" />
                    <h1 className='mt-5'>Expanding the Market</h1>
                </a>

                <a href="#">
                    <img src="/icon-wallet.png" alt="" />
                    <h1 className='mt-5'>Cost-Effective</h1>
                </a>

                <a href="#">
                    <img className='ml-3' src="/icon-propesional.png" alt="" />
                    <h1 className='mt-5'>More Professional</h1>
                </a>

                <a href="#">
                    <img src="/icon-human.png" alt="" />
                    <h1 className='mt-5'>Attract Client</h1>
                </a>
              </div>
            </section>
        </div>
        {/* Service */}
        
        </div>
    )
}
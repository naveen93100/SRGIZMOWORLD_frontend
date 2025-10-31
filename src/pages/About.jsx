import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="relative w-full font-[Be_Vietnam_Pro] pt-20">
            {/* Container for flex layout (image on left, text on right) */}
            <div className="flex w-full justify gap-4 overflow-hidden relative">
                {/* Image container */}
                <div className="w-full " data-aos='zoom-out'>
                    <img
                        src="/images/solar.avif"
                        alt="Solar Panel"
                        className="w-full h-screen xl:min-h-96 object-cover"
                    />
                </div>

                {/* Text content */}
                <div className="hidden xl:flex w-full  absolute text-white h-full ">
                    <div className="text-center flex lg:w-1/2 flex-col bg-black justify-center backdrop-blur-xl items-center h-full  " data-aos='fade-up'>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4" >
                            ABOUT US
                        </h1>
                        <p className="text-sm md:text-xl px-8 capitalize" > <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.25)]"> SR GIZMO WORLD. </span>{' '} is redefining how India goes solar. Driven by sustainability and innovation, we offer complete solar solutions—from expert consultation to flawless installation and reliable support. <br /><br /> In partnership with <span className="font-semibold text-red-700">Gautam Solar</span>, we deliver high-efficiency, long-lasting systems tailored for every energy need. </p>
                    </div>

                    <div className='text-center lg:w-1/2  flex flex-col justify-center items-center  h-full' data-aos='fade-right'>
                          <div className="rounded-full  overflow-hidden bg-black ">
                                <img src="./logo.jpg" alt="" className='w-30' />
                            </div>
                    </div>
                </div>

                {/* Mobile layout */}
                <div className="absolute w-full bg-black/50 h-full xl:hidden py-2">
                    <div className="text-center flex flex-col justify-center items-center h-full text-white">
                        <div className=" flex flex-col justify-end items-center">
                              <div className="rounded-full  overflow-hidden bg-black ">
                                <img src="./logo.jpg" alt="" className='w-20' />
                            </div>
                           
                        </div>
                        <p className="sm:text-xl text-center px-3 capitalize ">
                            <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.25)] '>SR GIZMO WORLD.</span> is a solar EPC company focused on delivering efficient, sustainable power solutions across India. As proud partners of <span className='text-red-700'>Gautam Solar</span>, we integrate industry-leading solar panels into every project, ensuring reliability and maximum performance. From rooftops to large-scale installations, we are here to light the way forward—cleanly and responsibly.
                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

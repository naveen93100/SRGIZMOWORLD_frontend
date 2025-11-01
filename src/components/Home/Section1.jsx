import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="relative w-full font-[Be_Vietnam_Pro] pt-20" >
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
                <div className="hidden xl:flex w-full absolute text-white  h-full ">
                    <div className="text-center lg:w-1/2 flex flex-col justify-center items-center backdrop-blur-xl  h-full  bg-black" data-aos='fade-up'>
                        <h1 className="text-2xl md:text-4xl font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.25)]" >
                            SR GIZMO WORLD
                        </h1>

                        <p className="text-sm md:text-xl capitalize" > At <span className="font-bold">SR GIZMO WORLD</span>, we’re dedicated to powering a cleaner, greener tomorrow with turnkey solar solutions. From design to installation and ongoing support, we handle every step with expert care—ensuring seamless, high-performance systems for homes, businesses, and industries. <br /> As proud partners of <span className="text-red-700 font-semibold">Gautam Solar</span>, we deliver cutting-edge, high-efficiency solar panels renowned for durability and innovation. <br /> With <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.25)] font-bold" data-aos='fade-left'>SR GIZMO WORLD</span>, going solar is effortless, empowering, and truly sustainable. </p>
                    </div>

                    <div className='text-center lg:w-1/2  flex flex-col justify-center items-center  h-full' data-aos='fade-right'>
                        <div className="w-28 rounded-2xl overflow-hidden mt-5 mb-2">
                            <img src="./logo.jpg" alt="" className=' w-full h-full ' />
                        </div>
                    </div>
                </div>

                <div className="absolute  w-full bg-black/50 h-full xl:hidden">
                    <div className="text-center flex flex-col justify-center sm:justify-center items-center h-full text-white ">
                        <div className=' sm:h-40  flex flex-col justify-end items-center'>

                            <div className="w-28 rounded-2xl overflow-hidden mt-5 mb-2">
                                <img src="./logo.jpg" alt="" className=' w-full h-full ' />
                            </div>

                        </div>
                        <h2 className="text-2xl sm:text-5xl font-bold mb-4">
                        </h2>
                        <p className="sm:text-xl text-center px-3 capitalize">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600 font-bold"> SR GIZMO WORLD.</span>
                            is a trusted leader in EPC (Engineering, Procurement, and Construction), providing fully integrated, end-to-end solar power solutions. We specialize in designing, engineering, and delivering high-performance turnkey systems tailored to meet your unique energy requirements.
                            Guided by innovation and a strong commitment to sustainability, we’re not just installing solar—we’re empowering a brighter, greener future, one project at a time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;






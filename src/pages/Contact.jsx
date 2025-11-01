import { useEffect } from 'react';
import { FaAddressBook, FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="relative w-full font-[Be_Vietnam_Pro]  pt-20">
            <div className="flex w-full justify gap-4 overflow-hidden relative">
                <div className="w-full" data-aos='zoom-out'>
                    <img
                        src="/images/solar.avif"
                        alt="Contact Us"
                        className="w-full h-screen xl:min-h-96 object-cover"
                    />
                </div>

                {/* Desktop view: Contact details */}
                <div className="hidden xl:flex w-full absolute h-full text-white">
                    <div className="text-center flex lg:w-1/2 flex-col bg-black justify-center backdrop-blur-xl items-center h-full  " data-aos='fade-up'>

                        <h1 className="text-3xl md:text-5xl font-bold  mb-6">
                            CONTACT US
                        </h1>

                        <div className="text-gray-700 text-md md:text-lg space-y-6 text-left ">

                            <div className="flex items-start gap-4">
                                <FaEnvelope className="text-orange-500 mt-1" size={22} />
                                <p>
                                    <a href="mailto:srgizmoworld@gmail.com" className="hover:text-orange-400 transition-all text-white">
                                        srgizmoworld@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaPhoneAlt className="text-orange-500 mt-1" size={22} />
                                <p>
                                    <a href="tel:7978048351" className="hover:text-orange-400 transition-all text-white">
                                        7978048351
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='text-center lg:w-1/2  flex flex-col justify-center items-center  h-full'>
                        <div className="w-28 rounded-2xl overflow-hidden mt-5 mb-2">
                            <img src="./logo.jpg" alt="" className=' w-full h-full ' />
                        </div>
                    </div>

                </div>

                {/* Mobile layout */}
                <div className="absolute w-full bg-black/50 h-full xl:hidden">
                    <div className="text-center flex flex-col justify-center items-center h-full text-white px-4">
                        <div className="h-60 flex flex-col justify-end items-center">
                            <div className="w-28 rounded-2xl overflow-hidden mt-5 mb-2">
                                <img src="./logo.jpg" alt="" className=' w-full h-full ' />
                            </div>

                        </div>

                        <div className="text-sm sm:text-lg text-center space-y-4 w-full px-4 flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                            <div className="flex gap-3 items-start">
                                <FaEnvelope className="text-orange-500 mt-1" />
                                <p className='text-xs'>
                                    srgizmoworld@gmail.com
                                </p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <FaPhoneAlt className="text-orange-500 mt-1" />
                                <p className='text-xs'>7978048351</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

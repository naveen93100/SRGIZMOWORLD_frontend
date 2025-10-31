import React from 'react';

const Footer = () => {
    return (
        <footer className=" text-black p-7 font-[Be_Vietnam_Pro] bg-black">
            <div className=" grid md:grid-cols-2 gap-8 items-center justify-items-between border p-2 rounded-xl  border-gray-700 py-7">
                {/* Logo and Description */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className=" rounded-lg overflow-hidden">
                            <img src="/logo.jpg" alt="" className='w-20 object-cover ' />
                        </div>
                    </div>
                    <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-3xl">
                        Driving a sustainable future with next-generation solar innovation. At <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600">SR GIZMO WORLD</span>, we combine advanced technology, engineering expertise, and energy efficiency to deliver reliable, high-performance solar solutions—designed for today and built to last tomorrow.
                    </p>


                </div>

                {/* Contact Information */}
                <div className="flex flex-col gap-3 text-sm md:items-end">
                    <h4 className="text-lg font-medium mb-1 text-slate-400">Contact Us</h4>
                    <p className=" no-underline">
                        <a href="tel:7978048351" className="text-slate-400 hover:underline">7978048351</a>
                    </p>
                    <p>
                        <a href="mailto:srgizmoworld@gmail.com" className="text-slate-400 hover:underline text-[12px]">srgizmoworld@gmail.com	</a>
                    </p>
                    <p className="text-slate-400 mt-4 text-xs">© {new Date().getFullYear()} SR GIZMO WORLD. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



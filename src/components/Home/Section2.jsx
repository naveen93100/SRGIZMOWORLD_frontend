import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    const features = [
        {
            title: 'Tailored Solar Solutions',
            description: 'Engineered for your property and energy goals—maximum efficiency, lifetime savings.',
        },
        {
            title: 'Precision Installation',
            description: 'Expert-led, timely installations with minimal disruption and optimal performance.',
        },
        {
            title: 'Live Performance Tracking',
            description: 'Get insights and monitor your solar system in real time from anywhere.',
        },
        {
            title: 'Support That Never Sleeps',
            description: '24/7 dedicated help desk to keep your solar system running smoothly always.',
        },
    ];

    return (
        <section className="font-[Be_Vietnam_Pro] px-4 sm:px-8 py-14 space-y-20 bg-black">
            {/* Who We Are Section */}
            <div className="bg-black backdrop-blur-lg border border-gray-700 rounded-3xl shadow-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10" data-aos="fade-up">
                <div className="lg:w-1/2">
                    <img src="/solar.avif" alt="Solar" className="rounded-2xl shadow-xl w-full" loading="lazy" />
                </div>
                <div className="lg:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-500">
                        Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600">We Are</span>
                    </h1>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600 font-semibold">SR GIZMO WORLD.</span> offers complete solar energy solutions through expert Engineering, Procurement, and Construction (EPC) services. We deliver efficient, customized systems designed to reduce energy costs and support a sustainable future.
                    </p>
                    <p className="mt-4 text-gray-500 text-base md:text-lg leading-relaxed">
                        In partnership with <span className="font-bold text-red-600">Gautam Solar</span>, we use globally certified solar panels that ensure long-lasting performance, reliability, and trusted results for every installation.
                    </p>



                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-black border border-gray-700 rounded-3xl shadow-xl p-8 md:p-12" data-aos="fade-up">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-500">
                    Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600">Choose Us?</span>
                </h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="border-b-1 border-r-1 rounded-2xl border-white p-6  shadow-md hover:shadow-xl transition-all hover:shadow-gray-800 duration-300 " data-aos="fade-up" data-aos-delay={index * 150}>
                            <h2 className="text-lg font-semibold text-orange-500 mb-2">{feature.title}</h2>
                            <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg" data-aos="zoom-in">
                <img src="/images/Group 438.png" alt="Decorative" className="w-full object-cover" loading="lazy" />
            </div>

            {/* Experience Section */}
            <div className="relative w-full py-20 bg-black border border-gray-700 text-white rounded-3xl overflow-hidden" data-aos="fade-up">
               
                <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Experience SR GIZMO WORLD.</h1>
                    <p className="text-md md:text-lg">
                        Choosing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600 font-semibold">SR GIZMO WORLD.</span> means aligning with a forward-focused company dedicated to sustainable innovation and client success—from ideation to implementation.
                    </p>
                    <p className="text-md md:text-lg">
                        With us, sustainability is more than a promise—it's our core principle and long-term vision.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section2;

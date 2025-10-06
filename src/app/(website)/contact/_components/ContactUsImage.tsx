"use client";
import React from "react";
import Image from "next/image";

const ContactUsImage = () => {
    return (
        <div className="relative w-full h-[650px] rounded-l-lg  flex-1 overflow-hidden">
            {/* Background Image */}
            <Image
                src="/contactusImage.jpg"
                alt="Contact Background"
                fill
                className=" object-cover"
                priority
            />

            {/* Overlay with Gradient and Text */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-blue-950/70 flex flex-col justify-center items-center text-center px-6 py-16 text-white">
                <div className="max-w-2xl w-full space-y-10">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-4xl font-extrabold leading-tight drop-shadow-lg">
                        Looking for Your Dream Home?
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white/80 text-lg md:text-xl drop-shadow-md max-w-xl mx-auto">
                        Reach out to us — we’ll help you find the perfect house or apartment to
                        rent that matches your lifestyle and budget.
                    </p>

                    {/* Contact Info */}
                    <div className="mt-16 text-left text-white/90 space-y-3 mx-auto max-w-md">
                        <p>
                            <span className="font-semibold text-white">ADDRESS:</span> India
                        </p>
                        <p>
                            <span className="font-semibold text-white">EMAIL:</span>{" "}
                            <a
                                href="mailto:darshakchavda2000@gmail.com"
                                className="hover:underline"
                            >
                                darshakchavda2000@gmail.com
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-white">PHONE:</span>{" "}
                            +91-1234567890
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ContactUsImage;

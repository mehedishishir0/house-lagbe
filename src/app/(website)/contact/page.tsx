import React from "react";
import ContactUsForm from "./_components/ContactUs-Form";
import ContactUsImage from "./_components/ContactUsImage";

const Page = () => {
    return (
        <div className="container rounded-lg bg-gradient-to-br from-black via-slate-300 to-blue-950 text-white   mt-32 shadow-[0px_5px_10px_0px_#00000029]  p-0 flex flex-col md:flex-row  gap-6">
            <div className="flex-1 ">
                <ContactUsImage />
            </div>

            <div className="flex-1  rounded-xl p-8">
                <ContactUsForm />
            </div>
        </div>
    );
};

export default Page;

import React from 'react'
import LoginformBody from './form'

const LoginForm = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-white to-blue-950 text-white flex items-center justify-center">
            <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">

                {/* Left Side Content */}
                <div className="max-w-xl space-y-6">
                    <h1 className="text-4xl font-bold bg-gradient-to-br from-black to-blue-950 bg-clip-text text-transparent">
                        Find Your Perfect Home, Anytime
                    </h1>
                    <p className="text-lg leading-relaxed bg-gradient-to-br from-black to-blue-950  bg-clip-text text-transparent">
                        Join <span className="font-semibold">House Lagbe</span> today and explore thousands of verified rental listings tailored to your needs.
                        Whether you’re looking for a cozy room, a family flat, or a luxury apartment, we make house hunting simple, safe, and fast.
                        Create your account to connect with trusted landlords and renters near you.
                    </p>
                </div>

                {/* Right Side Form */}
                <div className="w-full max-w-xl">
                    <LoginformBody />
                </div>

            </div>
        </div>


    )
}

export default LoginForm
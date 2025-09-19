"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-black to-blue-950 text-gray-300 py-10 mt-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">House Lagbe</h2>
                    <p className="text-sm leading-relaxed">
                        The best platform for finding and renting houses in Bangladesh.
                        Browse, connect, and rent with ease.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/rent" className="hover:text-white">
                                Browse Rentals
                            </Link>
                        </li>
                        <li>
                            <Link href="/post" className="hover:text-white">
                                Post Property
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/faq" className="hover:text-white">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:text-white">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-white">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-white">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" className="hover:text-white">
                            <Twitter size={20} />
                        </Link>
                        <Link href="#" className="hover:text-white">
                            <Instagram size={20} />
                        </Link>
                        <Link href="mailto:info@houselagbe.com" className="hover:text-white">
                            <Mail size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} House Lagbe. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

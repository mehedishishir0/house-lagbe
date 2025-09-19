"use client";

import React from "react";
import Image from "next/image";

interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
}

const demoBlogs: Blog[] = [
    {
        id: 1,
        title: "How to Find Your Perfect Rental Home",
        description:
            "Looking for a new home to rent can be overwhelming. In this guide, we’ll walk you through key tips and tricks to make your rental journey easier and stress-free.",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "Top 5 Affordable Areas to Live in Dhaka",
        description:
            "If you’re looking for budget-friendly living, Dhaka has several hidden gems. Here are the top 5 affordable areas with good facilities and transportation.",
        image:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 3,
        title: "Why Online House Renting is the Future",
        description:
            "Digital platforms are changing how we rent houses. Learn why online house renting is convenient, transparent, and a better option for both tenants and landlords.",
        image:
            "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
];

const RecentBlog = () => {
    return (
        <section className="py-10 container mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">Recent Blogs</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {demoBlogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                        <div className="relative w-full h-48">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{blog?.title}</h2>
                            <p className="text-gray-600 text-sm">
                                {blog?.description?.slice(0, 80)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentBlog;

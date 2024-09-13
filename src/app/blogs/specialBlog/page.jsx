import Link from 'next/link';
import React from 'react';

const SpecialBlog= () => {
    const blogs = [
        {
            slug: "intro-to-react",
            title: "Introduction to React: A Beginner's Guide",
            description: "Learn the basics of React.js, its component-based architecture, and why it's one of the most popular libraries for building modern web applications."
        },
        {
            slug: "css-grid-vs-flexbox",
            title: "CSS Grid vs. Flexbox: When and How to Use Them",
            description: "A detailed comparison between CSS Grid and Flexbox, exploring their unique features and the best use cases for each layout system."
        },
        {
            slug: "firebase-auth",
            title: "Getting Started with Firebase Authentication",
            description: "Explore Firebase Authentication for user management in web apps. This guide covers how to integrate email, password, and third-party authentication systems."
        },
        {
            slug: "optimize-performance-react",
            title: "10 Tips to Optimize Performance in React Apps",
            description: "Boost the performance of your React applications with these optimization techniques, including lazy loading, memoization, and code-splitting."
        },
        {
            slug: "tailwind-vs-bootstrap",
            title: "Tailwind CSS vs Bootstrap: A Head-to-Head Comparison",
            description: "Understand the key differences between Tailwind CSS and Bootstrap to help you choose the right framework for your next project."
        }
    ]

    return (
        <div className='p-4'>
            {
                blogs.map((blog) => (<div key={blog.slug} className='border-2 p-12'>
                    <h3 className='text-xl font-bold'>{blog.title}</h3>
                    <h3>{blog.description}</h3>
                    <button className='bg-red-300 p-2 rounded-md'><Link href={`specialBlog/${blog.slug}`}>View Details</Link></button>
                </div>))
            }
        </div>
    );
};



export default SpecialBlog;
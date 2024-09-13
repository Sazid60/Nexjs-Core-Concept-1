import React from 'react';

const page = ({params}) => {
    console.log(params.slug)

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

    const {title, description} = blogs.find((blog)=> blog.slug === params.slug)
    
    return (
        <div>
            <h5 className='text-4xl font-bold'>{title}</h5>
            <h1>{description}</h1>
        </div>
    );
};

export default page;
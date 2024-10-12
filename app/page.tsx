 import Link from "next/link";
import React from 'react';
import './page.css'

export default function navbar(){
  return (
    <div>
      <nav className="navbar">
        {/* Left Side: Logo */}
        <div className="navbar-logo">
          <h1><i>Ayesha Mughal</i></h1>
        </div>

        {/* Right Side: Links */}
        <div className="navbar-links">
          <Link href="/home">Home</ Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/services">Services</Link>
        </div>
      </nav>

      {/* Centered Heading */}
      <div className="welcome-text">
        <h2><i>Welcome My First Next.js Assigment</i></h2>
      </div>
    </div>
  );
};


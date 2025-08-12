"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-6 md:px-16">
      
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center md:w-1/2"
      >
        <Image
          src="/Ezenwa.jpg" // Put your image in /public/me.jpg
          alt="Okechukwu Ezenwa Prince"
          width={300}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 md:mt-0 md:ml-12 text-center md:text-left md:w-1/2"
      >
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Okechukwu Ezenwa Prince
        </h1>
        <p className="text-lg mb-4">
          Aspiring to be the best Software Engineer.  
          I currently hold an <strong>OND in Computer Science</strong>.
        </p>
        <p className="text-gray-300">
                Attended a boot-camp called <strong><Link href={"https://gomycode.com/ng/"}>GOMYCODE</Link></strong> during my IT where i learnt how to build both frontend and backend applications with these tech skills;<br /> HTML, CSS, Javascript(JS) and React (Frontend skills), Typescript(TS), Next.js,
                Express.js (Backend skills), MongoDB (Database). <br />I guess you can call me a Fullstack Developer, because i can do both frontend and backend applications <br /> Not to flex but i also know python, rust, kotlin..... and counting, i learn new programming 
                languages just for the fun of it........i really just love to code
        </p>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10">
      
      {/* Left Side - Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center md:w-1/2"
      >
        <Card className="bg-gray-800 border-gray-700 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/Ezenwa.jpg"
              alt="Okechukwu Ezenwa Prince"
              width={350}
              height={450}
              className="object-cover w-full h-full"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Right Side - Intro Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 md:mt-0 md:ml-12 text-center md:text-left md:w-1/2"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 leading-tight">
          Okechukwu Ezenwa Prince
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-lg">
          Aspiring to be the <span className="text-yellow-400">best Software Engineer</span>.  
          Currently hold an <strong>OND in Computer Science</strong>.
        </p>

        <p className="text-gray-400 leading-relaxed mb-6">
          Attended <strong>
            <Link 
              href="https://gomycode.com/ng/" 
              className="text-yellow-400 hover:underline"
            >
              GOMYCODE
            </Link>
          </strong> during my IT where I built fullstack apps with <br />
          <span className="text-gray-200">HTML, CSS, JavaScript, React, TypeScript, Next.js, Express.js, MongoDB</span>.  
          I guess you can call me a <span className="font-semibold">Fullstack Developer</span>.  
          <br /> Not to flex 🤭 but I also know React-Native, Python, Rust, Kotlin…  
          and I keep learning new languages just for fun — I <strong>really love to code</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold rounded-xl px-6 py-3">
            <Link href="/projects">See My Projects</Link>
          </Button>
          {/* <Button asChild variant="outline" className="border-gray-600 text-gray-200 hover:bg-gray-800 px-6 py-3 rounded-xl">
            <Link href="#contact">Contact Me</Link>
          </Button> */}
        </div>
      </motion.div>
    </section>
  );
}

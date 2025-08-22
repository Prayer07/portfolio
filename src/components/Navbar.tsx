"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-yellow-400">
          Ezenwa.dev
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-300">
          <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-yellow-400 transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:flex">
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 rounded-xl font-semibold">
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <nav className="flex flex-col items-center space-y-4 py-6 text-gray-300">
            <Link href="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/projects" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 rounded-xl font-semibold">
              <Link href="/contact">Hire Me</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

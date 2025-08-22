"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const languages = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "React" },
  { id: 3, name: "Next.js" },
  { id: 4, name: "Python" },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-6 py-12 text-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
            My Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore projects I’ve built using different technologies.  
            Click on a card to view detailed projects in that category.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {languages.map((l, index) => (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/projects/${l.name.toLowerCase()}`}>
                <Card className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-yellow-400/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h2 className="text-2xl font-bold text-yellow-400">
                      {l.name}
                    </h2>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
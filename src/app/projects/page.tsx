"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectProps{
  title: string
  stack: string
  desc: string
  github: string
  deploy: string
}

const projects: ProjectProps[] = [
    {
      title: "Clock-App",
      stack: "html, css and javascript",
      desc: "Made a clock that displays the day, date, month, year and time",
      github: "https://github.com/Prayer07/typescriptClock",
      deploy: "https://typescript-clock.vercel.app/",
    },

    {
      title: "Tic-tac-toe",
      stack: "html, css and javascript",
      desc: "Made a tic-tac-toe game when i was still learning html dom",
      github: "https://github.com/Prayer07/tic-tac-toe",
      deploy: "https://tic-tac-toe-beta-eight-97.vercel.app/",
    },

    {
      title: "Banking-App",
      stack: "Next.js, typescript and mongoDB",
      desc: "Built a web app for user signup/login, add money, transfer money, transaction history, and receipts",
      github: "https://github.com/Prayer07/ts_Bank",
      deploy: "http://ts-bank.vercel.app",
    },

    {
      title: "Safe Family App",
      stack: "React-Native, typescript, mongoDB, express.js and expo",
      desc: "Built a real-time family safety and tracking application that enables family members to share live locations, send SOS alerts, and stay connected during emergencies, Implemented features such as geolocation, and emergency notifications",
      github: "https://github.com/Prayer07/safe-family3",
      deploy: "https://expo.dev/accounts/prayer072/projects/safe-family/builds/e4f7e2eb-17a1-457e-a14e-e85e2fabee1d",
    },

    {
      title: "Diamond Stores",
      stack: "Next.js, javascript",
      desc: "Creates an online store for my sister",
      github: "https://github.com/Prayer07/adaeze_web",
      deploy: "https://adaeze-web.vercel.app",
    },

    {
      title: "Chat App",
      stack: "React, javascript, express and mongoDB",
      desc: "Developed a private 1:1 chat app with live messaging, authentication, and MongoDB storage.",
      github: "https://github.com/Prayer07/chat-app2",
      deploy: "https://chat-app4-m9d3.onrender.com/",
    },

    {
      title: "My Portfolio",
      stack: "Next.js and typescript",
      desc: "Designed and deployed a portfolio webpage where users can explore my projects, view source code, and run live demonstrations",
      github: "https://github.com/Prayer07/portfolio",
      deploy: "https://ezenwa-portfolio.vercel.app/",
    },

    {
      title: "Desktop Ai",
      stack: "Python",
      desc: "Its an ai i build for myself that performs action using voice command",
      github: "https://github.com/Prayer07/prince-ai",
      deploy: "",
    },

    {
        title: "Python bank app console",
        stack: "Python",
        desc: "Just for fun",
        github: "https://github.com/Prayer07/Prayer07-python_banking_app_console",
        deploy: "",
    },
  ]

export default function ProjectDetailsPage() {
  const { name } = useParams();
  const projectList = projects || []

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
            My Projects
          </h1>
          <p className="text-gray-400">
            Here are some projects I have built.
          </p>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.length > 0 ? (
            projectList.map((proj, index) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-yellow-400/20 transition-all">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                      {proj.title || "coming soon"}
                    </h2>
                    <p className="text-gray-300 mb-4">Stack: {proj.stack.toUpperCase() || "coming soon"}</p>
                    <p className="text-gray-300 mb-4">{proj.desc || "coming soon"}</p>
                  <div className="flex gap-4">

                    {proj.github && (
                      <Button asChild variant="outline" className="border-gray-600 hover:bg-gray-700 rounded-xl px-4">
                        <Link href={proj.github} target="_blank">
                          View Code
                        </Link>
                      </Button>
                    )}

                    {proj.deploy ? (
                      <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold rounded-xl px-4">
                      <Link href={proj.deploy} target="_blank">
                        View Live
                      </Link>
                    </Button>) : null
                    }
                  </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              No projects found for {name}.
            </p>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold rounded-xl px-6">
            <Link href="/">← Back </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
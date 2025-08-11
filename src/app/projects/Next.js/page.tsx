import Link from 'next/link'
import React from 'react'

const projects = [
    {
        id: 1,
        name: "Banking-App",
        details: "Used Next.js, typescript and mongoDB",
        github: "https://github.com/Prayer07/ts_Bank",
        deploy: "http://ts-bank.vercel.app",
    },
    {
        id: 2,
        name: "...",
        details: "Used Next.js, javascript and mongoDB",
        github: "https://github.com/Prayer07/BankChat",
        deploy: "...",
    },
    {
        id: 3,
        name: "My Portfolio",
        details: "Used Next.js and typescript",
        github: "...",
        deploy: "...",
    },
]

export default function page() {
  return (
    <>
    {projects.map((p) =>(
        <div key={p.id} className="border border-gray-300 rounded-lg p-4 shadow-sm proj">
            <h2 className="font-bold color">Project-Name: <span style={{color:"white"}}>{p.name}</span></h2>
            <h2 className="font-bold color">Details: <span style={{color:"white"}}>{p.details}</span></h2>
            <Link href={p.github} className="font-bold color">Github-link: <span style={{color:"white"}}>{p.github}</span></Link> <br />
            <Link href={p.deploy} className="font-bold color">Deployment-link: <span style={{color:"white"}}>{p.deploy}</span></Link>
        </div>
    ))}
    </>
  )
}

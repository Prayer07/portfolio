import React from 'react'

const projects = [
    {
        id: 1,
        name: "...",
        details: "...",
        github: "...",
        deploy: "...",
    },
    {
        id: 2,
        name: "...",
        details: "...",
        github: "...",
        deploy: "...",
    },
    {
        id: 3,
        name: "...",
        details: "...",
        github: "...",
        deploy: "...",
    },
]

export default function page() {
  return (
    <>
    {projects.map((p) =>(
        <div key={p.id} className="border border-gray-300 rounded-lg p-4 shadow-sm proj">
            <h2 className="text-xl font-bold color">Project-Name: <span style={{color:"white"}}>{p.name}</span></h2>
            <h2 className="text-xl font-bold color">Details: <span style={{color:"white"}}>{p.details}</span></h2>
            <p className="text-xl font-bold color">Github-link: <span style={{color:"white"}}>{p.github}</span></p>
            <p className="text-xl font-bold color">Deployment-link: <span style={{color:"white"}}>{p.deploy}</span></p>
        </div>
    ))}
    </>
  )
}

import React from 'react'

const projects = [
    {
        id: 1,
        name: "Desktop Ai",
        details: "Its an ai i build for myself that performs action using voice command",
        github: "https://github.com/Prayer07/prince-ai",
        deploy: "",
    },
    {
        id: 2,
        name: "Python bank app",
        details: "Just for fun",
        github: "https://github.com/Prayer07/Prayer07-python_banking_app_console",
        deploy: "",
    },
    // {
    //     id: 3,
    //     name: "",
    //     details: "",
    //     github: "",
    //     deploy: "",
    // },
]

export default function page() {
  return (
    <>
    {projects.map((p) =>(
        <div key={p.id} className="border border-gray-300 rounded-lg p-4 shadow-sm proj">
            <h2 className="font-bold color">Project-Name: <span style={{color:"white"}}>{p.name}</span></h2>
            <h2 className="font-bold color">Details: <span style={{color:"white"}}>{p.details}</span></h2>
            <p className="font-bold color">Github-link: <span style={{color:"white"}}>{p.github}</span></p>
            {/* <p className="font-bold color">Deployment-link: <span style={{color:"white"}}>{p.deploy}</span></p> */}
        </div>
    ))}
    </>
  )
}

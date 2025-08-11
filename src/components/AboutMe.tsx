import Link from 'next/link'
import React from 'react'

export default function AboutMe() {
    return (
    <>
        <div className='me' id='about' style={{textAlign:"center"}}>
            <p style={{fontWeight:"bold"}}>
                My name is Okechukwu Ezenwa Prince, <br />
                Aspiring to be the best Software Engineer, currently have my OND <br />(Ordinary National Diploma),
                in Computer Science. <br />Attended a boot-camp called <Link href={"https://gomycode.com/ng/"} style={{color: "black"}}>GOMYCODE</Link> during my IT where i learnt how to build both frontend and backend applications with these tech skills;<br /> HTML, CSS, Javascript(JS) and React (Frontend skills), Typescript(TS), Next.js,
                Express.js (Backend skills), MongoDB (Database). <br />I guess you can call me a Fullstack Developer, because i can do both frontend and backend applications <br /> Not to flex but i also know python, rust, kotlin..... and counting, i learn new programming 
                languages just for the fun of it........i really just love to code
            </p>
            {/* <button>
                <Link href={"/projects"}>View My projects</Link>
            </button> */}
        </div>

    </>
    )
}

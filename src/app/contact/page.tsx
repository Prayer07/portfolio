import { FaWhatsapp, FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import React from 'react'

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="border color bold p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">You can contact me through:</h1>
        <ul className="space-y-4">
          <li className="flex items-center justify-center space-x-2">
            <FaWhatsapp className="text-green-400" />
            <span>Whatsapp: 09161083039</span>
          </li>
          <li className="flex items-center justify-center space-x-2">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:ezenwaokechukwu3@gmail.com" className="hover:underline">
              ezenwaokechukwu3@gmail.com
            </a>
          </li>
          <li className="flex items-center justify-center space-x-2">
            <FaGithub className="text-white" />
            <a href="https://github.com/Prayer07" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com
            </a>
          </li>
          <li className="flex items-center justify-center space-x-2">
            <FaTwitter className="text-blue-400" />
            <a href="https://x.com/pra_yer07" target="_blank" rel="noopener noreferrer" className="hover:underline">
              twitter.com
            </a>
          </li>
          <li className="flex items-center justify-center space-x-2">
            <FaLinkedin className="text-blue-500" />
            <a href="https://www.linkedin.com/in/ezenwa-okechukwu-58858533a/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}




// import Link from 'next/link'
// import React from 'react'

// export default function page() {
//   return (
//     <>
//     <div className='contact'>
//       <h1>You can contact me through:</h1>
//       <p>Whatsapp: 09161083039</p>
//       <p>Email: ezenwaokechukwu3@gmail.com </p>
//       <p>Github: <Link href={"https://github.com/Prayer07"}>github.com</Link></p>
//       <p>Twitter: <Link href={"https://x.com/pra_yer07"}>twitter.com</Link></p>
//       <p>LinkedIn: <Link href={"https://www.linkedin.com/in/ezenwa-okechukwu-58858533a/"}>linkedIn.com</Link></p>
//     </div>
//     </>
//   )
// }

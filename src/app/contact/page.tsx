import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
    <div className='contact'>
      <h1>You can contact me through:</h1>
      <p>Whatsapp: 09161083039</p>
      <p>Email: ezenwaokechukwu3@gmail.com </p>
      <p>Github: <Link href={"https://github.com/Prayer07"}>github.com</Link></p>
      <p>Twitter: <Link href={"https://x.com/pra_yer07"}>twitter.com</Link></p>
      <p>LinkedIn: <Link href={"https://www.linkedin.com/in/ezenwa-okechukwu-58858533a/"}>linkedIn.com</Link></p>
    </div>
    </>
  )
}

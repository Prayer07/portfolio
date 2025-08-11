import Image from 'next/image'
import React from 'react'

export default function Me() {
  return (
    <>
    <div id='logo'>
    <Image style={{borderRadius:"5px"}} src={"/Ezenwa.jpg"} height={100} width={200} alt='me'/>
    </div>
    </>
  )
}

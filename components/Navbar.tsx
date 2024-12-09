'use client'

import Image from 'next/image'
import React from 'react'
import assetImg from '../assets/images'
import assetIcon from '../assets/icons'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className='relative w-11/12 max-[375px]:w-full mx-auto my-0 bg-white'>
        <nav className='flex justify-between items-center pt-2'>
            <div>
                <Link href={'/'}><Image className='max-[375px]:w-[120px]' src={assetImg.logo_img.src} width={150} height={96} alt="Picture of the author"/></Link>
            </div>
            <div className='flex justify-evenly w-3/4 siemreap max-[375px]:hidden'>
                <div><Link href={'/new_course'}>វគ្គសិស្សាថ្មី</Link></div>
                <div><Link href={'/department_course'}>វគ្គសិស្សាតាមនាយកដ្ធាន</Link></div>
                <div><Link href={'/by_categories'}>វគ្គសិស្សាតាមប្រភេទ</Link></div>
            </div>
            <button className='mr-4' onClick={()=>{alert('login')}}>
              <Image className='max-[375px]:w-[30px]' src={assetIcon.icon_ham.src} alt='ham_icon' width={40} height={40}/>
            </button>
        </nav>
    </header>
  )
}

export default Navbar
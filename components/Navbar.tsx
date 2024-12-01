import Image from 'next/image'
import React from 'react'
// import logo, icon_ham from '../app/assets/images/logo.png'
import logo_img from '../app/assets/images'
import icon_ham from '../app/assets/icons'
const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-between items-center m-2 '>
            <div>
                <Image src={logo_img.logo_img.src

                } width={150} height={96} alt="Picture of the author"/>
            </div>
            <div className='flex justify-between w-3/12'>
                <div>វគ្គសិស្សាថ្មី</div>
                <div>វគ្គសិស្សាតាមនាយកដ្ធាន</div>
                <div>វគ្គសិស្សាតាមប្រភេទ</div>
            </div>
            <div>
                <Image src={icon_ham.icon_ham.src} width={40} height={40} alt="Picture of the author"/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
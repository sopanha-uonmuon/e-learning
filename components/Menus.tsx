import React from 'react'
import assetIcon from '../assets/icons'
import Image from 'next/image'
import Link from 'next/link'

const Menus = () => {
  return (
	<div className='sm:hidden w-full fixed bottom-0 margin-center h-[55px] flex justify-evenly items-center border-t-2 border-[#0f172a] bg-white siemreap'>
		<Link href={'/'} className='menu-item'>
			<Image src={assetIcon.icon_home.src} alt='home_icon' width={16} height={16}/>
			<p className='text-[12px]'>ទំព័ដើម</p>
		</Link>
		<Link href={'/my_learning'} className='menu-item'>
			<Image src={assetIcon.icon_file.src} alt='file_icon' width={16} height={16}/>
			<p className='text-[12px]'>វគ្គសិក្សាររបស់ខ្ញុំ</p>
		</Link>
		<Link href={'/account'} className='menu-item'>
			<Image src={assetIcon.icon_acc.src} alt='home_icon' width={16} height={16}/>
			<p className='text-[12px]'>គណនីខ្ញុំ</p>
		</Link>
	</div>
  )
}

export default Menus
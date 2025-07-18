import Image from 'next/image'

import MobileMenuIcon from '@/icons/MobileMenuIcon'

const MobileMenu = () => {
  return (
    <div className='flex w-dvw items-center justify-between px-4 py-2 sm:hidden'>
      <Image
        src='/logo.png'
        alt='Logo firmy Holistyczna Ostoja'
        width={64}
        height={64}
      ></Image>
      <MobileMenuIcon />
    </div>
  )
}

export default MobileMenu

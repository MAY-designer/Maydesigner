import Image from "next/image"

import Link from "next/link"
import Socials from "../components/Socials" 
const Header = () => {
  return (<header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] mb-2  '>
  <div className='container mx-auto '>
  <div className='flex flex-col lg:flex-row justify-between items-center gap-y-3  py-4  '>
  <Link href={'/'}><Image src={'/logo.svg'} width={130} height={24}
priortty={true}/></Link>
    <Socials />
  </div>
  </div>
  </header>);
};

export default Header;

import Link from "next/link"

import {RiFacebookLine,RiBehanceLine,RiWhatsappLine,RiInstagramLine} from 'react-icons/ri'

const Socials = () => {
  return(<div className='flex items-center gap-x-5 text-lg'>
<Link href={'https://www.facebook.com/profile.php?id=100093596530363&mibextid=ZbWKwL'} className='hover:text-accent transition-all duration-300'>
<RiFacebookLine/>
</Link>

    <Link href={'https://wa.me/967773455454'} className='hover:text-accent transition-all duration-300'>
<RiWhatsappLine/>
</Link>


    <Link href={'https://instagram.com/maydesiner?utm_source=qr&igshid=OGU0MmVlOWVjOQ=='} className='hover:text-accent transition-all duration-300'>
<RiInstagramLine/>
</Link>

    <Link href={''} className='hover:text-accent transition-all duration-300'>
<RiBehanceLine/>
</Link>
    
</div>);
};

export default Socials;

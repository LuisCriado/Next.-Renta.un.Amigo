'use Client';


import Image from "next/image";
import { useRouter } from "next/navigation";



const Logo = () => {

    const router = useRouter();

  return (
    <Image
        alt='Logo'
        className='hidden md:block cursor-pointer'
        height='350'
        width='350'
        src='/images/hola.png'
      
    />
  )
}

export default Logo;

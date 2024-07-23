import { Roboto_Slab } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '@/constant'
import { roboto_slab } from '@/app/fonts'
import { ShoppingCart } from 'lucide-react';
import { UserRound } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="flex flexBetween navbar w-full">
            <div className="flex-1 flexStart">
                <Link href="/">
                    <div className="logo flex gap-3">
                        <Image
                            src="/NOSTRAlogo.png"
                            width={200}
                            height={100}
                            alt = "BrandLogo" 
                        />
                    </div>
                </Link>
                <ul className= {`xl:flex hidden text-small gap-7 ${roboto_slab.className}`} >
                    {NavLinks.map((link)=>(
                        <Link className="p-3 rounded-md  font-bold " href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
                <div className={`xl:flex flexcenter hidden gap-3 ${roboto_slab.className} justify-center items-center`}>
                    <ShoppingCart />
                    <UserRound />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
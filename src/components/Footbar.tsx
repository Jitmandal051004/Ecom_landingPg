import { dm_sans, roboto_slab } from '@/app/fonts';
import { footerLinks } from '@/constant';
import { Copyright } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({title, links} : ColumnProps) => (
    <div className={`footer_column ${roboto_slab.className} text-lg flex-wrap`} >
        <h4 className='font-semibold mb-4 uppercase w-40'>{title}</h4>
        <ul className="flex flex-col gap-2 font-normal text-xs text-zinc-700">
            {links.map((link) => <Link href="/" key={link}>
                <span className='text-sm'>
                {link}
                </span>
            </Link>)}
        </ul>
    </div>
)

const Footbar = () => {
    return (
        <div className='w-full py-10 border-t-2 border-zinc-300 bg-zinc-300 flex flex-col items-center justify-center'>
            <div className="w-[94.5%] flex flex-col gap-5">
                <div className='flex flex-col lg:flex-row mb-7 justify-between items-start'>
                    <div className='flex flex-col gap-4 lg:w-[20%]'>
                        <Image
                            src="/NOSTRAlogo.png"
                            width={200}
                            height={100}
                            alt = "BrandLogo" 
                        />
                        <div className='text-zinc-600 text-sm font-semibold'>
                            Specializes in providing high-quality, stylish products for your wardrobe
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6 mt-6 lg:mt-0 lg:gap-12">
                        <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>
                        <div className="flex-1 flex flex-col gap-4">
                            <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}/>      
                        </div>
                        <div className="flex-1 flex flex-col gap-4">
                            <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}/>      
                        </div>
                    </div>
                    <div className='lg:w-[15%] mt-8 flex flex-col gap-1 lg:gap-3'>
                        <div className='uppercase text-zinc-800 font-bold'>
                            Payment Gateway
                        </div>
                        <div className='flex gap-4'>
                            <Image 
                                src="/images/mastercard.svg"
                                width={50}
                                height={50}
                                alt='mastercard'
                            />
                            <Image 
                                src="/images/visa.svg"
                                width={50}
                                height={50}
                                alt='visa'
                            />
                            <Image 
                                src="/images/paypal.svg"
                                width={65}
                                height={50}
                                alt='paypal'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex items-center text-zinc-700 text-sm justify-center py-4 border-t-2 border-zinc-500'>
                    Copyright&nbsp;<Copyright />&nbsp;2024 Nostra. All right reserved
                </div>
            </div>
        </div>
    )
}

export default Footbar
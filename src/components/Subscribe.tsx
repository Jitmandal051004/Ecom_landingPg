import { roboto_slab } from '@/app/fonts'
import { Input } from "@/components/ui/input"
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link';

const Subscribe = () => {
    return (
        <div className='w-full flex justify-center mb-5 lg:mb-10'>
            <div className="w-[90.5%] lg:w-[60%] gap-4 flex flex-col items-center text-center">
                <div className={`${roboto_slab.className} font-extrabold text-2xl lg:text-4xl`}>
                    Subscribe to our newsletter to get updates to our latest collections
                </div>
                <div className='text-zinc-600 font-semibold text-sm lg:text-lg'>
                    Get 20% off on your first order just by subscribing to our newsletter
                </div>
                <div className='flex gap-2'>
                    <Input type="email" placeholder={`Enter your email`} className='bg-zinc-200'/>
                    <Button>
                        Subscribe
                    </Button>
                </div>
                <div>
                    <div className="font-medium text-sm text-zinc-500">
                        You will able to unsubscribe at any time.
                    </div>
                    <div className="font-medium text-sm text-zinc-500">
                        Read our Privacy Policy <Link href="/" className='text-zinc-800 border-b-2 border-black'>here</Link>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Subscribe
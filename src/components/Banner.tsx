import { roboto_slab } from '@/app/fonts'
import Image from 'next/image'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'

const Banner = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[94.5%] h-[27rem] lg:h-[35rem] rounded-xl overflow-hidden relative bg-hero-banner bg-center'>
                <div className='absolute inset-0 flex flex-col gap-10 items-center justify-center text-center '>
                    <p className={`${roboto_slab.className} w-[80%] lg:w-[60%] text-pretty font-bold text-zinc-900 font-mono text-2xl lg:text-[3rem] leading-[1.5]`}>
                        Level up your style with our summer collections
                    </p>
                    <Button className='flex gap-2'>
                        Shop now <MoveRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Banner
import { roboto_slab } from "@/app/fonts"
import { Button } from "./ui/button"
import { MoveRight } from "lucide-react"

const OfferBanner = () => {
    return (
        <div className='w-full flex justify-center mb-3'>
            <div className='w-[94.5%] lg:h-[25rem] flex-col lg:flex-row rounded-xl flex border-2 border-zinc-600'>
                <div className="mb-2 lg:w-[50%] h-[10rem] lg:h-full bg-offer-banner bg-cover rounded-t-xl lg:rounded-l-xl lg:rounded-r-none">
                </div>
                <div className='lg:w-[50%] h-[10rem] lg:h-full flex flex-col gap-1 items-center justify-center text-center lg:text-left lg:items-start p-9 '>
                    <div className="text-sm font-bold">
                        LIMITED OFFER
                    </div>
                    <p className={`${roboto_slab.className} mb-7 w-full text-pretty font-bold text-zinc-900 font-mono text-xl lg:text-[3rem] leading-[1.3]`}>
                        35% off only this friday and get Special Gift
                    </p>
                    <Button className='flex gap-2'>
                        Grab it now <MoveRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default OfferBanner
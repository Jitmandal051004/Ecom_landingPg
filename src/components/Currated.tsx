import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'

const Currated = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="w-[94.5%]">
                <div className='font-bold text-3xl mb-7'>
                    Currated picks
                </div>
                <div className="flex flex-col lg:gap-4 gap-6 mb-2 lg:flex-row justify-between">
                    <div className={`relative text-center lg:text-left lg:items-start lg:w-[20%] h-80 flex flex-col lg:gap-2 rounded-xl bg-cover bg-CP1 `}>
                        <Button className='flex gap-7 py-2 absolute bottom-9 left-1/2 -translate-x-1/2'>
                            Best Seller <MoveRight size={25}/>
                        </Button>
                    </div>
                    <div className={`relative text-center lg:text-left lg:items-start lg:w-[20%] h-80 flex flex-col lg:gap-2 rounded-xl bg-cover bg-CP2 `}>
                        <Button className='flex gap-7 py-2 absolute bottom-9 left-1/2 -translate-x-1/2'>
                            Shop Men <MoveRight size={25}/>
                        </Button>
                    </div>
                    <div className={`relative text-center lg:text-left lg:items-start lg:w-[20%] h-80 flex flex-col lg:gap-2 rounded-xl bg-cover bg-CP3 `}>
                        <Button className='flex gap-7 py-2 absolute bottom-9 left-1/2 -translate-x-1/2'>
                            Shop Women <MoveRight size={25}/>
                        </Button>
                    </div>
                    <div className={`relative text-center lg:text-left lg:items-start lg:w-[20%] h-80 flex flex-col lg:gap-2 rounded-xl bg-cover bg-CP4 `}>
                        <Button className='flex gap-7 py-2 absolute bottom-9 left-1/2 -translate-x-1/2'>
                            Shop Casual <MoveRight size={25}/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Currated
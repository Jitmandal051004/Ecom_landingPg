import { UserRev } from '@/constant'
import { CircleDollarSign, Laugh } from 'lucide-react'
import React from 'react'

const UserExp = () => {
    return (
        <div className='w-full flex justify-center mt-6'>
            <div className="flex flex-col gap-8 w-[94.5%]">
                <div className="title flex flex-col lg:flex-row text-center lg:text-left justify-between items-center w-full">
                    <span className='font-bold text-3xl text-wrap tracking-wide'>
                        We provide best<br/> customer experiences
                    </span>
                    <span className='py-6 lg:pl-7 lg:border-l-4 lg:border-black font-semibold text-gray-500'>
                        we ensure our customers have the best shopping experiences
                    </span>
                </div>
                <div className="flex flex-col gap-4 lg:flex-row justify-between">
                    {UserRev.map((rev, index)=> {
                        return(
                        <div key={index} className='items-center text-center lg:text-left lg:items-start lg:w-[20%] flex flex-col gap-2'>
                            <CircleDollarSign size={50} className='p-3 mb-2 bg-zinc-300 rounded-lg'/>
                            <div className='font-bold text-xl'>
                                {rev.title}
                            </div>
                            <div className='font-semibold text-gray-500 text-wrap'>
                                {rev.desc}
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default UserExp
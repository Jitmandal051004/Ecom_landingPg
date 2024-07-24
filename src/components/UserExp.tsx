import { CircleDollarSign, Laugh, ShoppingCart, Truck } from 'lucide-react'
import React from 'react'

const UserExp = () => {
    return (
        <div className='w-full flex justify-center mt-6'>
            <div className="flex flex-col gap-10 w-[94.5%]">
                <div className="title flex flex-col lg:flex-row text-center lg:text-left justify-between items-center w-full">
                    <span className='font-bold text-3xl text-wrap tracking-wide'>
                        We provide best<br/> customer experiences
                    </span>
                    <span className='py-6 lg:pl-7 lg:border-l-4 lg:border-black font-semibold text-gray-500'>
                        we ensure our customers have the best shopping experiences
                    </span>
                </div>
                <div className="flex flex-col gap-4 mb-10 lg:flex-row justify-between">
                    <div className='items-center text-center lg:text-left lg:items-start lg:w-[20%] flex flex-col gap-2'>
                        <CircleDollarSign size={50} className='p-3 mb-2 bg-zinc-300 rounded-lg'/>
                        <div className='font-bold text-xl'>
                            Original Products
                        </div>
                        <div className='font-semibold text-gray-500 text-wrap'>
                            We provide money back guarantee if the product are not original
                        </div>
                    </div>
                    <div className='items-center text-center lg:text-left lg:items-start lg:w-[20%] flex flex-col gap-2'>
                        <Laugh size={50} className='p-3 mb-2 bg-zinc-300 rounded-lg'/>
                        <div className='font-bold text-xl'>
                            Satisfaction Guarantee
                        </div>
                        <div className='font-semibold text-gray-500 text-wrap'>
                            Exchange the product you&apos;ve purchased if it doesn&apos;t fit on you
                        </div>
                    </div>
                    <div className='items-center text-center lg:text-left lg:items-start lg:w-[20%] flex flex-col gap-2'>
                        <ShoppingCart size={50} className='p-3 mb-2 bg-zinc-300 rounded-lg'/>
                        <div className='font-bold text-xl'>
                            New Arrival Everyday
                        </div>
                        <div className='font-semibold text-gray-500 text-wrap'>
                            We updates our collections almost everyday
                        </div>
                    </div>
                    <div className='items-center text-center lg:text-left lg:items-start lg:w-[20%] flex flex-col gap-2'>
                        <Truck size={50} className='p-3 mb-2 bg-zinc-300 rounded-lg'/>
                        <div className='font-bold text-xl'>
                            Fast & Free Shipping
                        </div>
                        <div className='font-semibold text-gray-500 text-wrap'>
                            We offer fast and free shipping for our loyal customer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserExp
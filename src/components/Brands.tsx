import React from 'react'
import { BrandsCompany } from '@/constant'
import Image from 'next/image'


const Brands = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="w-[94.5%] ">
                <div className='font-bold text-3xl mb-7'>
                    Brands
                </div>
                <div className='flex items-center justify-evenly flex-wrap overflow-hidden'>
                    {BrandsCompany.map((brand, index)=>
                        <span key={index}>
                            <Image
                                src={`/images/${brand}`}
                                width={140}
                                height={140}
                                alt='comp logo'
                                className=' p-3'
                            />
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Brands
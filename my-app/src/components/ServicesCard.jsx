import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
// import '../styles/ServicesCard.css'

import { FreeMode, Pagination, Autoplay } from 'swiper/modules'

import { RxArrowTopRight} from 'react-icons/rx'
import { ServiceData } from '../constants'

const ServicesCard = () => {

    
  return (
    <>
        <div className="flex items-center justify-center flex-col h-screen bg-[#103025]">
            <h1 className='text-2xl text-white -mt-32 pb-14'> Our Services</h1>
            <Swiper
            autoplay={{ delay: 3000 }}
            breakpoints={{
                340: {
                    slidesPreview:2,
                    spaceBetween: 15
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}

            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules = {[FreeMode, Pagination, Autoplay]}
            className='max-w-[90%] lg:max-w-[80%]'
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="flex flex-col gap-6 group relative shadow-lg 
                        text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] 
                        overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: `url(${item.backgroundImage})`}}
                            />
                            <div className="absolute inset-0 opacity-10 bg-black group-hover:opacity-50"/>
                            <div className="relative flex flex-col gap-3">
                                <item.icon className='text-white group-hover:text-[#BC9442] w-[32px] h-[32px]'/>
                                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                                <p className='lg:text-[18px]'>{item.content}</p>
                            </div> 
                            <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-[#BC9442] group-hover:rotate-45 duration-100'/>                           
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
  )
}

export default ServicesCard
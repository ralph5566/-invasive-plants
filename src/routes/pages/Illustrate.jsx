// import { useState, useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Plants from '../../components/Plants/Plants'
// import PLANTS from '../../../public/plants'

function Illustrate() {
    const screenW = Math.floor(document.documentElement.clientWidth / 250)
    const plants = useLoaderData()
    // const plants = PLANTS

    const [no, setNo] = useState('0')

    let plantNo = plants[no]

    function plantHandler(index) {
        console.log(index)
        setNo(index)
    }

    return (
        <>
            <Plants
                buttons={
                    <Swiper
                        // className=""
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={1}
                        slidesPerView={screenW}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                    >
                        {plants.map((plant, index) => (
                            <SwiperSlide key={plant.no}>
                                <Link
                                    to={`/plants?${plant.no}`}
                                    className="mx-20"
                                    key={plant.no}
                                    onClick={() => plantHandler(index)}
                                >
                                    <img
                                        // src={plant.img}
                                        src={`http://localhost:3000/${plant.img}`}
                                        className="w-40 mx-20 my-0 max-md:mx-auto"
                                        alt={plant.name}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }
            >
                {plants.length === 0 && (
                    <>
                        <h2>獲取失敗</h2>
                    </>
                )}

                <main className="inline-flex max-md:flex-col w-full justify-center my-28 max-lg:mt-20 max-md:mt-5 max-xl:mb-6 ">
                    <div className=" relative w-1/2 max-md:w-full">
                        <img
                            // src={plantNo.img}
                            src={`http://localhost:3000/${plantNo.img}`}
                            className="mx-auto w-2/3"
                            alt={plantNo.name}
                        />
                    </div>

                    <div className="flex flex-col justify-center mx-auto my-auto px-12 max-md:px-0 items-start w-3/4">
                        <h3 className="flex text-left text-xl leading-loose">
                            {plantNo.name}
                            <br />
                            {plantNo.genus} {plantNo.type}
                        </h3>

                        <h1 className="italic my-5 text-2xl leading-loose">
                            &ldquo; {plantNo.title} &rdquo;
                        </h1>
                        <h3 className="mb-8">{plantNo.desc}</h3>
                    </div>
                </main>
            </Plants>
        </>
    )
}

export default Illustrate

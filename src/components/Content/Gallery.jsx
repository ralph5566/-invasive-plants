import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'

import Plants from '../Plants/Plants'
import PlantsDetails from './PlantDetails'
// import { createPortal } from 'react-dom'

const Gallery = () => {
    const plants = useLoaderData()
    const [showDetail, setShowDetail] = useState(false)
    const [plantNo, setPlantNo] = useState('')

    const showDetailHandler = useCallback(
        function showDetailHandler(no) {
            setShowDetail(!showDetail)
            setPlantNo(no)
        },
        [showDetail]
    )

    return (
        <>
            <Plants>
                <ul className="inline-block w-4/5 m-[5%] max-md:mt-16  ">
                    {plants.map((plant) => (
                        <Link
                            className="inline-block mx-10 my-4"
                            key={plant.no}
                            onClick={() => showDetailHandler(plant.no)}
                        >
                            <img
                                src={plant.img}
                                className="flex w-[20vh] rounded-lg p-3 border-lightBlue border hover:border-yy"
                                alt={plant.name}
                            />
                            <h2 className="mt-4">{plant.name}</h2>
                        </Link>
                    ))}
                </ul>
            </Plants>

            {showDetail && (
                <PlantsDetails
                    // plantModal={showDetail}
                    onPlant={showDetailHandler}
                    no={plantNo}
                />
            )}
        </>
    )
}

export default Gallery

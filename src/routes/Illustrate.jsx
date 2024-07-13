// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

import Plant from '../components/Plant'
import classes from './Illustrate.module.css'

function Illustrate() {
    const plants = useLoaderData()
    // const [plants, setPlants] = useState([])
    // const [isFetching, setIsFetching] = useState(false)

    // useEffect(() => {
    //     async function fetchPlants() {
    //         setIsFetching(true)
    //         const response = await fetch('http://localhost:3000/plants')
    //         const resData = await response.json()
    //         if (!response.ok) {
    //             throw new Error({ message: 'Fetching Error' })
    //         }

    //         setPlants(resData.plants)
    //         setIsFetching(false)
    //     }

    //     fetchPlants()
    // }, [])

    function scrollInHandler() {}

    function scrollOutHandler() {}

    // const plants = [
    //     { no: '001', name: '大花咸豐草', img: '/img/IMG_NO01.png' },
    //     { no: '002', name: '非洲鳳仙花', img: '/img/IMG_NO02.png' },
    //     { no: '003', name: '巴西水竹草', img: '/img/IMG_NO03.png' },
    //     { no: '004', name: '小花蔓澤蘭', img: '/img/IMG_NO04.png' },
    //     { no: '005', name: '水芙蓉', img: '/img/IMG_NO05.png' },
    //     { no: '006', name: '布袋蓮', img: '/img/IMG_NO06.png' },
    //     { no: '007', name: '互花米草', img: '/img/IMG_NO07.png' },
    //     { no: '008', name: '馬櫻丹', img: '/img/IMG_NO08.png' },
    //     { no: '009', name: '紫花藿香薊', img: '/img/IMG_NO09.png' },
    //     { no: '010', name: '貓腥草', img: '/img/IMG_NO10.png' },
    //     { no: '011', name: '豬草', img: '/img/IMG_NO11.png' },
    //     { no: '012', name: '美洲含羞草', img: '/img/IMG_NO12.png' },
    //     { no: '013', name: '銀膠菊', img: '/img/IMG_NO13.png' },
    //     { no: '014', name: '銀合歡', img: '/img/IMG_NO14.png' },
    //     { no: '015', name: '日本菟絲子', img: '/img/IMG_NO15.png' },
    // ]

    return (
        <>
            {plants.length === 0 && (
                <>
                    <h2>獲取失敗</h2>
                </>
            )}

            {plants.length > 0 && (
                <ul className={classes.content_plants}>
                    <button
                        className={classes.button_left}
                        onClick={scrollOutHandler}
                    >
                        {'<'}
                    </button>
                    <button
                        className={classes.button_right}
                        onClick={scrollInHandler}
                    >
                        {'>'}
                    </button>
                    {plants.map((plant) => (
                        <Plant
                            name={plant.name}
                            key={plant.no}
                            img={plant.img}
                        />
                    ))}
                </ul>
            )}
        </>
    )
}

export default Illustrate

export async function loader() {
    const response = await fetch('http://localhost:3000/plants')
    const resData = await response.json()
    return resData.plants
}

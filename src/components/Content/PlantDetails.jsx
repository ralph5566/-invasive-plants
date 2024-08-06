import { useLoaderData, Link } from 'react-router-dom'

import Modal from '../Modal/Modal'
import { useEffect } from 'react'
import ProgressBar from './ProgressBar'
// import Plant from '../components/Plant'

const TIMER = 8000

const PlantsDetails = ({ onPlant, no }) => {
    const post = useLoaderData()
    const postNo = post[no - 1]

    useEffect(() => {
        const timer = setTimeout(() => {
            onPlant()
        }, TIMER)

        return () => {
            clearTimeout(timer)
        }
    }, [onPlant])

    if (!post) {
        return (
            <>
                <main className="">
                    <h1>資料錯誤...</h1>
                    <p>資料無法找到...</p>
                    <p>
                        <Link to="/" className="">
                            首頁
                        </Link>
                    </p>
                </main>
            </>
        )
    }

    return (
        <>
            <Modal open={onPlant}>
                <button
                    className=" absolute w-10 h-10 top-5 right-4 t text-4xl"
                    onClick={onPlant}
                >
                    X
                </button>
                <div className="bg-content-bgc bg-cover w-full">
                    <main className="flex flex-col w-[80%] mx-auto mt-10 mb-20 max-md:mt-5 max-md:mb-20 ">
                        <div className="w-[95%] mx-auto">
                            <img
                                src={postNo.img}
                                className="w-48 max-sm:w-28 mx-auto mt-5"
                            />
                            <h3 className="my-2">{postNo.name}</h3>

                            <h1 className="flex max-ss:hidden justify-center mx-auto mt-2">
                                &ldquo; {postNo.title} &rdquo;
                            </h1>
                            <h3 className="mt-2">{postNo.desc}</h3>
                        </div>
                    </main>

                    <ProgressBar timer={TIMER} />
                    {/* <progress
                    className="absolute left-0 bottom-0 w-full bg-yy"
                    value={remainingTime}
                    max={TIMER}
                /> */}
                </div>
            </Modal>
        </>
    )
}

export default PlantsDetails

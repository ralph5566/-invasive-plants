import { useEffect, useState } from 'react'

const ProgressBar = ({ timer }) => {
    const [remainingTime, setRemainingTime] = useState(timer)

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTimer) => prevTimer - 10)
        }, 10)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <progress
                className="absolute left-0 bottom-0 w-full bg-yy"
                value={remainingTime}
                max={timer}
            />
        </>
    )
}

export default ProgressBar

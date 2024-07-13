import './App.css'
// import { useState } from 'react'
import Content from '../components/Content'
import { Outlet } from 'react-router-dom'

function App() {
    // const [isSign, setIsSign] = useState(false)

    // function setSignHandler(postSign) {
    //     if (isSign === true) {
    //         console.log('Log out')
    //         setIsSign(false)
    //     } else if (isSign === false) {
    //         if (postSign.account === 'abc' && postSign.password === 'abc') {
    //             console.log(postSign.account)
    //             setIsSign(true)
    //         } else {
    //             console.log('Error')
    //             throw new Error({ message: '帳號或密碼錯誤' })
    //         }
    //     }
    // }

    return (
        <>
            <Outlet />
            <main>
                <Content />
            </main>
        </>
    )
}

export default App

export async function loader() {
    const response = await fetch('http://localhost:3000/plants')
    const resData = await response.json()
    return resData.plants
}

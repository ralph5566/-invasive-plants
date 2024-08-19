import { Outlet } from 'react-router-dom'

import End from '../../components/RooterLayout/End'
import Header from '../../components/RooterLayout/Header'

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <End />
        </>
    )
}

export default RootLayout

export async function Action({ request }) {
    const formData = request.formData()
    const signData = Object.fromEntries(formData) // * {account:"...",password:'...}

    console.log(signData)

    const response = await fetch('http://localhost:3000/sign', {
        method: 'POST',
        body: JSON.stringify(signData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const resData = await response.json()

    if (!response.ok) {
        throw new Error({ message: '登入錯誤' })
    }

    return resData.message
}

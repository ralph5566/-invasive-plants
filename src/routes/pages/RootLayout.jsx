import {
    Outlet,
    json,
    redirect,
    useLoaderData,
    // useSubmit,
} from 'react-router-dom'

import End from '../../components/RooterLayout/End'
import Header from '../../components/RooterLayout/Header'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../redux/Sign'
import { getTokenDuration } from '../../util/auth'
// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'

const RootLayout = () => {
    // const isSign = useSelector((state) => state.isAuth.isSign)

    // useEffect(() => {
    //     const sendSignData = async () => {
    //         const response = await fetch(
    //             'https://plantinvasive-746a6-default-rtdb.asia-southeast1.firebasedatabase.app/',
    //             {
    //                 method: 'PUT',
    //                 body: JSON.stringify(isSign),
    //                 headers: 'Access-Control-Allow-Origin',
    //             }
    //         )

    //         if (!response.ok) {
    //             console.log('123')
    //         }
    //         if (response.ok) {
    //             console.log('123')
    //         }
    //     }

    //     sendSignData()
    // }, [isSign])

    const token = useLoaderData()
    const dispatch = useDispatch()
    // const submit = useSubmit()

    useEffect(() => {
        if (!token) {
            dispatch(authActions.logout())
            return
        }

        if (token === 'EXPIRED') {
            dispatch(authActions.logout())
            localStorage.removeItem('token')
            return
        }

        const tokenDuration = getTokenDuration()
        console.log(tokenDuration)

        setTimeout(() => {
            dispatch(authActions.logout())
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
        }, tokenDuration)
    }, [token])

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
    const searchParams = new URL(request.url).searchParams
    const mode = searchParams.get('mode') || 'sign'

    const method = request.method
    const formData = await request.formData()
    const signData = Object.fromEntries(formData) // * {account:"...",password:'...}

    console.log(signData)

    const response = await fetch('http://localhost:3000/' + mode, {
        method: method,
        body: JSON.stringify(signData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    // const resData = await response.json()

    if (response.status === 422) {
        return response
    }

    if (!response.ok) {
        throw json({ message: '登入錯誤' }, { status: 500 })
    }

    return redirect('/')
}

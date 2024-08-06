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

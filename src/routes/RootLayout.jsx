import { Outlet } from 'react-router-dom'

import NavList from '../components/NavList'
import End from '../components/End'

const RootLayout = () => {
    return (
        <>
            <NavList />
            <Outlet />
            <End />
        </>
    )
}

export default RootLayout

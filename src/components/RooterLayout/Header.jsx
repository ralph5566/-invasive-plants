import { useContext, useState } from 'react'

import { CheckSign } from '../../Sign/Sign'
import NavBar from './NavBar'
import Sign from './Sign/Sign'
import HeaderBar from './HeaderBar'

const Header = () => {
    const { isSign, signChange } = useContext(CheckSign)
    const [showModal, setShowModal] = useState(false)
    const [signModal, setSignModal] = useState(false)

    function showModalHandler() {
        setShowModal(!showModal)
        setSignModal(false)
    }
    function signModalHandler() {
        setSignModal(!signModal)
        setShowModal(false)
    }

    return (
        <>
            <HeaderBar onSign={signModalHandler} onModal={showModalHandler} />

            {showModal && !signModal && (
                <NavBar
                    showModal={showModal}
                    onModal={showModalHandler}
                    isSign={isSign}
                    onSign={signModalHandler}
                    signOut={() => {
                        signChange()
                        showModalHandler()
                    }}
                />
            )}

            {signModal && !showModal && (
                <Sign onSign={signModalHandler} signModal={signModal} />
            )}
        </>
    )
}

export default Header

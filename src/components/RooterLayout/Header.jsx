import { useCallback, useContext, useState } from 'react'

import { CheckSign } from '../../Sign/Sign'
import NavBar from './NavBar'
import Sign from './Sign/Sign'
import NewSign from './Sign/NewSign'
import HeaderBar from './HeaderBar'

const Header = () => {
    const { isSign, signChange } = useContext(CheckSign)
    const [showModal, setShowModal] = useState(false)
    const [signModal, setSignModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)

    const showModalHandler = useCallback(
        function showModalHandler() {
            setShowModal(!showModal)
        },
        [showModal]
    )
    const signModalHandler = useCallback(
        function signModalHandler() {
            setSignModal(!signModal)
            setShowModal(false)
        },
        [signModal]
    )
    const signUpModalHandler = useCallback(
        function signUpModalHandler() {
            setSignUpModal(() => !signUpModal)
            setShowModal(false)
        },
        [signUpModal]
    )

    return (
        <>
            <HeaderBar
                onSign={signModalHandler}
                onModal={showModalHandler}
                onSignUp={signUpModalHandler}
            />

            {showModal && !signModal && (
                <NavBar
                    isSign={isSign}
                    showModal={showModal}
                    onModal={showModalHandler}
                    onSign={signModalHandler}
                    onSignUp={signUpModalHandler}
                    onsSignOut={() => {
                        signChange()
                        showModalHandler()
                    }}
                />
            )}

            {signModal && !showModal && (
                <Sign onSign={signModalHandler} signModal={signModal} />
            )}

            {signUpModal && (
                <NewSign
                    onCancel={signUpModalHandler}
                    showModal={signUpModal}
                />
            )}
        </>
    )
}

export default Header

import { useCallback, useContext, useState } from 'react'

import CheckSign from '../../Context/Sign'
import NavBar from './NavBar'
import Sign from './Sign/Sign'
import NewSign from './Sign/NewSign'
import HeaderBar from './HeaderBar'
import Button from '../Tools/Button'

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

    function handlerToTop() {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <HeaderBar
                onSign={signModalHandler}
                onModal={showModalHandler}
                onSignUp={signUpModalHandler}
            />
            <Button
                className="fixed z-20 duration-300 left-10 bottom-10 rotate-90 h-10 w-10 rounded-lg hover:text-yy shadow-2m hover:shadow-3m"
                onClick={handlerToTop}
            >
                {`<`}
            </Button>

            {showModal && !signModal && (
                <NavBar
                    isSign={isSign}
                    showModal={showModal}
                    onModal={showModalHandler}
                    onSign={signModalHandler}
                    onSignUp={signUpModalHandler}
                    onSignOut={() => {
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

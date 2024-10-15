import { useCallback, useState } from 'react'

// import CheckSign from '../../Context/Sign'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import NavBar from './NavBar'
import Sign from './Sign/Sign'
import NewSign from './Sign/NewSign'
import HeaderBar from './HeaderBar'
import Button from '../Tools/Button'
import { authActions } from '../../redux/Sign'
// import { showBarActions } from '../../redux/showBarModal'

const Header = () => {
    // const { isSign, signChange } = useContext(CheckSign)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const showModal = useSelector((state) => state.showBar.isShow)

    const [showModal, setShowModal] = useState(false)
    const [signModal, setSignModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)

    const barShowHandler = useCallback(function showModalHandler() {
        console.log('show')
        setShowModal(true)
    }, [])

    const barCloseHandler = useCallback(function showModalHandler() {
        console.log('show')
        setShowModal(false)
    }, [])

    const signModalHandler = useCallback(
        function signModalHandler() {
            console.log('sign')
            // console.log(signModal)
            setSignModal(() => !signModal)
            setShowModal(false)
        },
        [signModal]
    )

    const signUpModalHandler = useCallback(
        function signUpModalHandler() {
            console.log('signUp')
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
                onSignUp={signUpModalHandler}
                onShowBar={barShowHandler}
            />
            <Button
                className="fixed z-20 duration-300 left-10 bottom-10 rotate-90 h-10 w-10 rounded-lg hover:text-yy shadow-2m hover:shadow-3m"
                onClick={handlerToTop}
            >
                {`<`}
            </Button>

            {showModal && (
                <NavBar
                    showModal={showModal}
                    onBarClose={barCloseHandler}
                    onSign={signModalHandler}
                    onSignUp={signUpModalHandler}
                    onSignOut={() => {
                        dispatch(authActions.logout())
                        localStorage.removeItem('token')
                        localStorage.removeItem('expiration')
                        barCloseHandler()
                        navigate('/')
                        // signChange()
                        // dispatch(showBarActions.onShow())
                    }}
                />
            )}

            {signModal && (
                <Sign
                    onSign={signModalHandler}
                    signModal={signModal}
                    method="POST"
                />
            )}

            {signUpModal && (
                <NewSign
                    onCancel={signUpModalHandler}
                    showModal={signUpModal}
                    method="PATCH"
                />
            )}
        </>
    )
}

export default Header

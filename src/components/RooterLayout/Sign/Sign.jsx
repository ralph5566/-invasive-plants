import { Form, redirect, useNavigation } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Modal from '../../Modal/Modal'
import Input from '../../Tools/Input'
import Button from '../../Tools/Button'
// import CheckSign from '../../../Context/Sign'
import { useInput } from '../../../hook/useInput'
import { hasMinLength } from '../../../util/validation'
import { authActions } from '../../../redux/Sign'

// import useHttp from '../../../hook/useHttp'

// const requestConfig = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// }

function Sign({ signModal, onSign }) {
    // let { signChange } = useContext(CheckSign)
    // const data = useActionData()
    // const submit = useSubmit()
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [error, setError] = useState()
    const isSubmitting = navigation.state === 'submitting'

    // const {
    //     data,
    //     isLoading: isSending,
    //     error,
    //     sendRequest,
    // } = useHttp('http://localhost:3000/sign', requestConfig)

    const {
        value: accountValue,
        handlerChange: handleAccountChange,
        handlerInputBlur: handleAccountBlur,
        hasError: accountError,
    } = useInput('', (value) => hasMinLength(value, 4))

    const {
        value: passwordValue,
        handlerChange: handlePasswordChange,
        handlerInputBlur: handlePasswordBlur,
        hasError: passwordError,
    } = useInput('', (value) => hasMinLength(value, 5))

    // const [enterAccount, setEnterAccount] = useState({
    //     account: '',
    //     password: '',
    // })
    // const [didEdit, setDidEdit] = useState({
    //     account: false,
    //     password: false,
    // })

    // const accountError =
    //     didEdit.account && hasMinLength(enterAccount.account, 4)
    // const passwordError =
    //     !accountError &&
    //     didEdit.password &&
    //     hasMinLength(enterAccount.password, 5)

    // function handlerChange(inputIdentifier, newValue) {
    //     // console.log(enterAccount)
    //     setEnterAccount((prevUserInput) => {
    //         return {
    //             ...prevUserInput,
    //             [inputIdentifier]: newValue,
    //         }
    //     })
    //     setDidEdit((prevEdit) => ({
    //         ...prevEdit,
    //         [inputIdentifier]: false,
    //     }))
    // }

    // function handlerInputBlur(identifier) {
    //     setDidEdit((prevEdit) => ({
    //         ...prevEdit,
    //         [identifier]: true,
    //     }))
    // }

    async function submitHandler(evt) {
        evt.preventDefault()

        const fd = new FormData(evt.target)
        const customerData = Object.fromEntries(fd.entries()) // { account:... , ...}

        // const send = await sendRequest(
        //     JSON.stringify({
        //         user: customerData,
        //     }),
        //     signChange,
        //     onSign
        // )

        // if (!res) {
        //     signChange(customerData)
        //     onSign()
        // }

        const response = await fetch('http://localhost:3000/sign', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: customerData,
            }),
        })
        console.log(response.errors)

        if (response.ok) {
            // signChange(customerData)
            dispatch(authActions.login())

            localStorage.setItem('token', customerData.account)
            const expiration = new Date()
            expiration.setHours(expiration.getHours() + 1)
            localStorage.setItem('expiration', expiration.toISOString())

            redirect('/')
            onSign()
        } else {
            setError(response.message)
        }
    }

    return (
        <>
            <Modal open={signModal}>
                <Form
                    className="p-10 w-10/12 max-lg:w-full mx-auto rounded-xl"
                    method="post"
                    onSubmit={(evt) => submitHandler(evt)}
                >
                    <img
                        alt="LOGO"
                        // src="/img/IMG_logo02.png"
                        src="http://localhost:3000/images/IMG_logo02.png"
                        className="mx-auto w-36 pb-2 "
                    />
                    <Input
                        id="account"
                        name="帳號"
                        value={accountValue}
                        length={4}
                        auto="user"
                        onBlur={handleAccountBlur}
                        onChange={handleAccountChange}
                    />
                    <Input
                        id="password"
                        name="密碼"
                        value={passwordValue}
                        type="password"
                        length={5}
                        auto="current-password"
                        onBlur={handlePasswordBlur}
                        onChange={handlePasswordChange}
                    />

                    <p className="flex justify-end max-lg:justify-center gap-2 mt-8 max-sm:mt-6">
                        <Button disabled={isSubmitting} type="submit">
                            {isSubmitting ? '傳送中...' : '登 入'}
                        </Button>
                        <button
                            type="button"
                            className="duration-200 text-center cursor-pointer px-6 py-0.5 rounded-lg border-none bg-purple hover:bg-hoverPup hover:text-tahiti"
                            onClick={onSign}
                        >
                            關 閉
                        </button>
                    </p>

                    <div className="control-error">
                        {accountError && (
                            <h1 className="text-sm text-red mt-8 max-sm:mt-2">
                                Account have to more than 4 words
                            </h1>
                        )}
                        {!accountError && passwordError && (
                            <h1 className="text-sm text-red mt-8 max-sm:mt-2">
                                Password have to more than 5 words
                            </h1>
                        )}
                        {error && (
                            <h1 className="text-sm text-red mt-8 max-sm:mt-2">
                                {error}
                            </h1>
                        )}
                    </div>
                </Form>
            </Modal>
        </>
    )
}

export default Sign

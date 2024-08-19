import { useState } from 'react'
import { Form } from 'react-router-dom'

import Modal from '../../Modal/Modal'
import Input from '../../Tools/Input'
import Button from '../../Tools/Button'
import { hasMinLength } from '../../../util/validation'
import { useInput } from '../../../hook/useInput'

function Sign({ onCancel, showModal }) {
    const [error, setError] = useState()

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

    const {
        value: passwordCheckValue,
        handlerChange: handlePasswordCheckChange,
        handlerInputBlur: handlePasswordCheckBlur,
    } = useInput('', (value) => hasMinLength(value, 5))

    async function submitHandler(evt) {
        evt.preventDefault()

        if (passwordCheckValue !== passwordValue) {
            console.log('error password')
            setError('Error CheckedPassword')
            return
            // throw new Error({ message: 'Password Error' })
        }

        const fd = new FormData(evt.target)
        const customerData = Object.fromEntries(fd.entries()) // { account:... , ...}

        const response = await fetch('http://localhost:3000/newSign', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: customerData,
            }),
        })
        if (response.ok) {
            onCancel()
        }
    }

    return (
        <>
            <Modal open={showModal}>
                <Form
                    className="p-10 w-10/12 max-lg:w-full mx-auto rounded-xl max-sm:p-7"
                    onSubmit={submitHandler}
                >
                    <img
                        alt="LOGO"
                        // src="/img/IMG_logo02.png"
                        src="http://localhost:3000/images/IMG_logo02.png"
                        className="mx-auto w-36 pb-2 max-sm:hidden"
                    />
                    <Input
                        id="account"
                        name="帳號"
                        value={accountValue}
                        length={4}
                        auto="user"
                        isSignUp
                        onChange={handleAccountChange}
                        onBlur={handleAccountBlur}
                    />
                    <Input
                        id="password"
                        name="密碼"
                        type="password"
                        value={passwordValue}
                        length={5}
                        auto="new-password"
                        isSignUp
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur}
                    />
                    <Input
                        id="passwordCheck"
                        name="確認密碼"
                        type="password"
                        value={passwordCheckValue}
                        auto="new-password"
                        isSignUp
                        onChange={handlePasswordCheckChange}
                        onBlur={handlePasswordCheckBlur}
                    />

                    <p className="flex justify-end max-lg:justify-center gap-2 mt-8 max-sm:mt-5">
                        <Button type="submit">註 冊</Button>
                        <button
                            type="button"
                            className=" text-center  cursor-pointer px-6 py-0.5 rounded-lg border-none bg-purple hover:bg-hoverPup hover:text-yy"
                            onClick={onCancel}
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
                        {passwordError && (
                            <h1 className="text-sm text-red mt-8 max-sm:mt-2">
                                Password have to more than 4 words
                            </h1>
                        )}
                        {!accountError && !passwordError && error && (
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

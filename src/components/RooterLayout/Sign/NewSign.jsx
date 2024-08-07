import { useState } from 'react'
import { Form } from 'react-router-dom'
import { useContext } from 'react'

import Modal from '../../Modal/Modal'
import Input from '../../Tools/Input'
import Button from '../../Tools/Button'
import { CheckSign } from '../../../Sign/Sign'

function Sign({ onCancel, onSignUp, showModal }) {
    let { signUp } = useContext(CheckSign)

    const [enterAccount, setEnterAccount] = useState({
        account: '',
        password: '',
    })
    const [checkPassword, setCheckPassword] = useState('')

    function handlerChange(inputIdentifier, newValue) {
        console.log(enterAccount)
        setEnterAccount((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            }
        })
    }

    function passwordCheckHandler(event) {
        setCheckPassword(event.target.value)
        if (checkPassword !== enterAccount.password) {
            throw new Error({ message: 'Password Error' })
        }
    }

    function submitHandler(evt) {
        evt.preventDefault()
        const postSign = {
            account: enterAccount.account,
            password: enterAccount.password,
        }
        if (checkPassword !== enterAccount.password) {
            throw new Error({ message: 'Password Error' })
        }

        signUp(postSign)
        onSignUp()
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
                        src="/img/IMG_logo02.png"
                        className="mx-auto w-36 pb-2 max-sm:hidden"
                    />
                    <Input
                        id="user"
                        name="帳號"
                        value={enterAccount.account}
                        auto="user"
                        signUp
                        onChange={(evt) =>
                            handlerChange('account', evt.target.value)
                        }
                    />
                    <Input
                        id="password"
                        name="密碼"
                        type="password"
                        value={enterAccount.password}
                        auto="current-password"
                        signUp
                        onChange={(evt) =>
                            handlerChange('password', evt.target.value)
                        }
                    />
                    <Input
                        id="passwordCheck"
                        name="確認密碼"
                        type="password"
                        value={checkPassword}
                        signUp
                        onChange={passwordCheckHandler}
                    />
                    <p className="flex justify-end max-lg:justify-center gap-2 mt-4 max-sm:mt-0">
                        <Button type="submit">註 冊</Button>

                        <button
                            type="button"
                            className=" text-center mt-7 cursor-pointer px-6 py-0.5 rounded-lg border-none bg-purple hover:bg-hoverPup hover:text-yy"
                            onClick={onCancel}
                        >
                            關 閉
                        </button>
                    </p>
                </Form>
            </Modal>
        </>
    )
}

export default Sign

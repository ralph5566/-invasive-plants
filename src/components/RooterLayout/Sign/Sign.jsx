import { useState } from 'react'
import { Form } from 'react-router-dom'
import { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { createPortal } from 'react-dom'

import Modal from '../../Modal/Modal'
import Input from '../../Tools/Input'
import Button from '../../Tools/Button'
import { CheckSign } from '../../../Sign/Sign'

function Sign({ signModal, onSign }) {
    // const navigate = useNavigate()
    let { signChange } = useContext(CheckSign)

    const [enterAccount, setEnterAccount] = useState({
        account: '',
        password: '',
    })

    function handlerChange(inputIdentifier, newValue) {
        console.log(enterAccount)
        setEnterAccount((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            }
        })
    }

    function submitHandler(evt) {
        evt.preventDefault()
        const postSign = {
            account: enterAccount.account,
            password: enterAccount.password,
        }
        // onLogIn(postSign)
        signChange(postSign)
        // console.log(isSign)
        // isSign = true
        // console.log(signChange)

        // console.log(postSign)
        // navigate('..')
        onSign()
    }

    return (
        <>
            <Modal open={signModal} onClose={onSign}>
                <Form
                    className="p-10 w-10/12 max-lg:w-full mx-auto rounded-xl"
                    method="post"
                    onSubmit={(evt) => submitHandler(evt)}
                >
                    <img
                        alt="LOGO"
                        src="/img/IMG_logo.png"
                        className="mx-auto w-36 pb-2"
                    />
                    <Input
                        id="user"
                        name="帳號"
                        value={enterAccount.account}
                        auto="user"
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
                        onChange={(evt) =>
                            handlerChange('password', evt.target.value)
                        }
                    />
                    <p className="flex justify-end max-lg:justify-center gap-2 mt-4">
                        <Button type="submit">登 入</Button>

                        <button
                            type="button"
                            className=" text-center mt-7 cursor-pointer px-6 py-0.5 rounded-lg border-none bg-purple hover:bg-hoverPup hover:text-yy"
                            onClick={onSign}
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

export async function Action({ request }) {
    const formData = request.formData()
    const signData = Object.fromEntries(formData) // * {account:"...",password:'...}
    const response = await fetch('http://localhost:3000/sign', {
        method: 'POST',
        body: JSON.stringify(signData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if (!response.ok) {
        throw new Error({ message: '登入錯誤' })
    }
    return redirect('/')
}

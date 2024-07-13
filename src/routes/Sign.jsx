import { useState } from 'react'
import { Link } from 'react-router-dom'

import classes from './Sign.module.css'
import Modal from '../components/Modal'

function Sign({ onLogIn }) {
    const [enterAccount, setEnterAccount] = useState('')
    const [enterPassword, setEnterPassword] = useState('')

    function accountHandler(event) {
        // console.log(enterAccount)
        setEnterAccount(event.target.value)
    }

    function passwordHandler(event) {
        setEnterPassword(event.target.value)
    }

    function submitHandler(evt) {
        evt.preventDefault()
        const postSign = {
            account: enterAccount,
            password: enterPassword,
        }
        console.log(postSign)
        onLogIn(postSign)
        // onCancel()
    }

    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}>
                <p>
                    <label htmlFor="account">帳號</label>
                    <input id="account" required onChange={accountHandler} />
                </p>
                <p>
                    <label htmlFor="password">密碼</label>
                    <input
                        type="password"
                        id="password"
                        required
                        onChange={passwordHandler}
                    />
                </p>
                <p className={classes.actions}>
                    <Link type="submit" className={classes.button}>
                        登入
                    </Link>
                    <Link type="button" className={classes.button} to="..">
                        關閉
                    </Link>
                </p>
            </form>
        </Modal>
    )
}

export default Sign

import { useState } from 'react'
import classes from './Sign.module.css'

import { NavLink } from 'react-router-dom'

function Sign({ onCancel, onSignIn }) {
    const [enterAccount, setEnterAccount] = useState('')
    const [enterPassword, setEnterPassword] = useState('')

    function accountHandler(event) {
        console.log(enterAccount)
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
        onSignIn(postSign)
        onCancel()
    }

    return (
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
            <p>
                <label htmlFor="password">確認密碼</label>
                <input
                    type="password"
                    id="password"
                    required
                    onChange={passwordHandler}
                />
            </p>
            <p className={classes.actions}>
                <NavLink type="submit" className={classes.button}>
                    註冊
                </NavLink>
                <NavLink
                    type="button"
                    className={classes.button}
                    onClick={onCancel}
                >
                    關閉
                </NavLink>
            </p>
        </form>
    )
}

export default Sign

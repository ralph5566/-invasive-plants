import classes from './NavList.module.css'
import { Link } from 'react-router-dom'

const NavList = ({ onShowModal, isSign, onLogOut }) => {
    return (
        <>
            <header className={classes.header}>
                <ul className={classes.nav_list}>
                    <Link to="/">
                        <img
                            src="/img/IMG_logo.png"
                            className={classes.nav_logo}
                        />
                    </Link>
                    <Link to="/plants" className={classes.nav_link}>
                        圖鑑
                    </Link>
                    <Link className={classes.nav_link}>小遊戲</Link>
                    <Link className={classes.nav_link}>關於我們</Link>
                    <Link className={classes.nav_link}>??</Link>
                </ul>

                <ul className={classes.nav_sign}>
                    {!isSign && (
                        <>
                            <li className={classes.nav_link}>
                                <Link
                                    to="/login"
                                    className={classes.button}
                                    onClick={onShowModal}
                                >
                                    登入
                                </Link>
                            </li>
                            <li className={classes.nav_link}>
                                <Link
                                    className={classes.button}
                                    onClick={onShowModal}
                                >
                                    註冊
                                </Link>
                            </li>
                        </>
                    )}
                    {isSign && (
                        <>
                            <li className={classes.nav_link}>
                                <Link
                                    className={classes.button}
                                    onClick={onLogOut}
                                >
                                    登出
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </header>
        </>
    )
}

export default NavList

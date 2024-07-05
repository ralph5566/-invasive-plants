// import React from 'react'
import classes from './NavList.module.css'
// import { Link } from 'react-router-dom'

const NavList = () => {
    return (
        <>
            <div className={classes.nav_bar}>
                <div className={classes.nav_bar_list}>
                    <ul className={classes.nav_link_list}>
                        <li className={classes.nav_link}>首頁</li>
                        <li className={classes.nav_link}>圖鑑</li>
                        <li className={classes.nav_link}>遊戲</li>
                        <li className={classes.nav_link}>關於我們</li>
                        <li className={classes.nav_link}>??</li>
                    </ul>

                    {/* <ul className={classes.nav_link_sign}> */}
                    <li className={classes.nav_link}>登入</li>
                    <li className={classes.nav_link}>註冊</li>
                    {/* </ul> */}
                </div>
            </div>
        </>
    )
}

export default NavList

import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { CheckSign } from '../../Sign/Sign'

const HeaderBar = ({ onSign, onModal }) => {
    const { isSign, signChange } = useContext(CheckSign)
    let nav_link = 'pointer-events-auto text-lg mr-4 cursor-pointer'
    const isActive = false

    if (!isActive) {
        nav_link += ' text-lightBlue'
    } else {
        nav_link += ' text-yy'
    }

    return (
        <>
            <header className="fixed justify-between p-5 items-center w-full overflow-hidden flex max-md:hidden z-[5]">
                <ul className=" inline-flex items-center">
                    <Link to="/">
                        <img
                            src="/img/IMG_logo02.png"
                            className="w-24 me-7 relative top-px cursor-pointer"
                            alt="LOGO"
                        />
                    </Link>
                    <Link to="/plants" className={nav_link}>
                        圖鑑
                    </Link>
                    <Link className={nav_link} to="/game">
                        遊戲
                    </Link>
                    <Link className={nav_link} to="/special">
                        宣傳
                    </Link>
                    <Link className={nav_link} to="/about">
                        關於我們
                    </Link>
                </ul>

                <ul className="inline-flex items-center">
                    {!isSign && (
                        <>
                            <li className=" text-lightBlue mr-5 cursor-pointer shadow-2m  hover:shadow-3m">
                                <button
                                    onClick={onSign}
                                    className="text-lg rounded-lg border-none px-6 py-1"
                                >
                                    登入
                                </button>
                            </li>
                            <li className=" text-lightBlue mr-5 cursor-pointer shadow-2m hover:shadow-3m">
                                <Link
                                    onClick
                                    className="text-lg rounded-lg border-none px-6 py-1"
                                >
                                    註冊
                                </Link>
                            </li>
                        </>
                    )}
                    {isSign && (
                        <>
                            <li className=" text-lightBlue mr-5 cursor-pointer shadow-2m hover:shadow-3m">
                                <button
                                    className="text-lg rounded-lg border-none px-6 py-1"
                                    onClick={() => signChange()}
                                >
                                    登出
                                </button>
                            </li>
                        </>
                    )}
                    {}
                </ul>
            </header>

            <header className="hidden max-md:flex justify-center p-20 w-full border border-yy bg-black">
                <button
                    className="w-10 h-10  absolute top-14 right-6 text-yy text-4xl rounded border-white"
                    onClick={onModal}
                >
                    X
                </button>
                <Link to="/">
                    <img
                        alt="LOGO"
                        src="/img/IMG_logo.png"
                        className="w-40 relative top-px cursor-pointer "
                    />
                </Link>
            </header>
        </>
    )
}

export default HeaderBar

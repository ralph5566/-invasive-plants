import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'

const NavBar = ({
    isSign,
    showModal,
    onModal,
    onSign,
    onSignUp,
    onSignOut,
}) => {
    let nav_link = 'hover:text-yy py-1'
    const isActive = false

    if (!isActive) {
        nav_link += ' text-lightBlue'
    } else {
        nav_link += ' text-yy'
    }

    return (
        <>
            <Modal open={showModal} onClose={onModal}>
                <div className="mx-auto my-auto">
                    <button
                        className=" absolute w-10 h-10 top-5 right-4 t text-4xl"
                        onClick={onModal}
                    >
                        X
                    </button>

                    <div className="flex flex-col">
                        <Link to="/" onClick={showModal}>
                            <img
                                alt="LOGO"
                                src="/img/IMG_logo02.png"
                                className="mx-auto w-36 pb-4 cursor-pointer "
                            />
                        </Link>
                        {/* <hr className="mb-6 w-4/5 mx-auto" /> */}
                        <div className="flex flex-col py-1 text-xl">
                            <Link
                                to="/plants"
                                onClick={showModal}
                                className={nav_link}
                            >
                                圖鑑
                            </Link>
                            <Link
                                to="/game"
                                onClick={showModal}
                                className={nav_link}
                            >
                                遊戲
                            </Link>
                            <Link
                                to="/special"
                                onClick={showModal}
                                className={nav_link}
                            >
                                宣傳
                            </Link>
                            <Link
                                to="/about"
                                onClick={showModal}
                                className={nav_link}
                            >
                                關於我們
                            </Link>
                        </div>

                        {!isSign && (
                            <div className="flex mt-8">
                                <button
                                    onClick={onSign}
                                    className="text-center rounded-lg border-none px-3 py-1 mx-3 shadow-2m  hover:shadow-3m hover:text-yy "
                                >
                                    登 入
                                </button>
                                <button
                                    onClick={onSignUp}
                                    className="text-center rounded-lg border-none px-3 py-1 mx-3  shadow-2m  hover:shadow-3m hover:text-yy"
                                >
                                    註 冊
                                </button>
                            </div>
                        )}

                        {isSign && (
                            <div className="flex mt-8">
                                <button
                                    onClick={onSignOut}
                                    className="text-center rounded-lg border-none px-3 py-1 mx-auto  shadow-2m  hover:shadow-3m hover:text-yy "
                                >
                                    登 出
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default NavBar

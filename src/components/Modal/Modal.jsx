import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, open }) => {
    const dialog = useRef()

    useEffect(() => {
        if (open) {
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }
    }, [open])

    return createPortal(
        <>
            <div
                ref={dialog}
                className="fixed top-0 left-0 w-full h-screen z-10 bg-bgcB"
                // onClick={onClose}

                // {...props}
            />
            <dialog
                ref={dialog}
                // open={open}
                // onClose={open}
                // className=" flex mx-auto my-auto  bg-bgcB h-full w-screen"
                className="flex w-1/2 max-md:w-[85%] h-3/4 max-ss:h-2/3 border-none rounded-lg  p-0 overflow-hidden mx-auto mt-32"
            >
                {children}
            </dialog>
        </>,
        document.getElementById('modal')
    )
}

export default Modal

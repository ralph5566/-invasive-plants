import { createContext, useState } from 'react'

export const CheckSign = createContext({
    isSign: false,
    signChange: () => {},
})

export default function SignProvider({ children }) {
    const [isSign, setIsSign] = useState(false)

    const ctxSign = {
        isSign: isSign,
        signChange: cT,
    }

    function cT(user) {
        if (user) {
            console.log(user)
        }
        setIsSign(() => !isSign)
    }

    return <CheckSign.Provider value={ctxSign}>{children}</CheckSign.Provider>
}

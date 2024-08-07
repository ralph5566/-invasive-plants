import { createContext, useState } from 'react'

export const CheckSign = createContext({
    isSign: false,
    signChange: () => {},
    signUp: () => {},
})

export default function SignProvider({ children }) {
    const [isSign, setIsSign] = useState(false)

    const ctxSign = {
        isSign: isSign,
        signChange: cT,
        signUp: cU,
    }

    function cT(user) {
        if (user) {
            console.log(user)
        }
        setIsSign(() => !isSign)
    }

    function cU(user) {
        if (user) {
            console.log(user)
        }
    }

    return <CheckSign.Provider value={ctxSign}>{children}</CheckSign.Provider>
}

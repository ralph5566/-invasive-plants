import { createContext, useState } from 'react'

export const Questions = createContext({
    questions: [],
    signChange: () => {},
})

export default function SignProvider({ children }) {
    // const [isSign, setIsSign] = useState(false)

    const ctxQuestion = {
        question: [],
        // signChange: cT,
    }

    // function cT(user) {
    //     if (user) {
    //         console.log(user)
    //     }
    //     setIsSign(() => !isSign)
    // }

    return (
        <Questions.Provider value={ctxQuestion}>{children}</Questions.Provider>
    )
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App, { Loader as plantsLoader } from './routes/pages/App.jsx'
import './index.css'
import SignProvider from './Sign/Sign.jsx'

import RootLayout from './routes/pages/RootLayout.jsx'
import Illustrate from './routes/pages/Illustrate.jsx'

import Game, { Loader as questionsLoader } from './routes/pages/Game.jsx'
import About from './routes/pages/About.jsx'
import Special from './routes/pages/Special.jsx'
import Error from './routes/pages/Error.jsx'

// const [isSign, setIsSign] = useState(false)

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <App />,
                loader: plantsLoader,
            },
            {
                path: '/plants',
                element: <Illustrate />,
                loader: plantsLoader,
            },

            { path: '/game', element: <Game />, loader: questionsLoader },
            { path: '/about', element: <About /> },
            { path: '/special', element: <Special /> },
            { path: '/', element: <Error /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SignProvider>
            <RouterProvider router={router} />
        </SignProvider>
    </React.StrictMode>
)

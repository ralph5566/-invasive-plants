import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App, { Loader as plantsLoader } from './routes/pages/App.jsx'
import './index.css'
// import { SignProvider } from './Context/Sign.jsx'
import { Provider } from 'react-redux'
import store from './redux/index.js'

import RootLayout from './routes/pages/RootLayout.jsx'
// {  Action as signAction }
import Illustrate from './routes/pages/Illustrate.jsx'
import Game, { Loader as questionsLoader } from './routes/pages/Game.jsx'
import About from './routes/pages/About.jsx'
import Special from './routes/pages/Special.jsx'
import Error from './routes/pages/Error.jsx'
import { tokenLoader, checkAuthLoader } from './util/auth.js'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        id: 'root',
        loader: tokenLoader,
        // action: signAction,
        children: [
            {
                index: true,
                element: <App />,
                loader: plantsLoader,
            },
            {
                path: '/plants',
                id: 'plants-detail',
                loader: plantsLoader,
                children: [
                    {
                        index: true,
                        element: <Illustrate />,
                        // loader: plantsLoader,
                    },
                    {
                        path: ':plantNo',
                        element: <Illustrate />,
                        // loader: plantsLoader,
                    },
                ],
            },

            {
                path: '/game',
                element: <Game />,
                loader: questionsLoader,
            },
            { path: '/about', element: <About /> },
            { path: '/special', element: <Special />, loader: checkAuthLoader },
            // loader: checkAuthLoader
            { path: '/error', element: <Error /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <SignProvider> */}
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>

        {/* </SignProvider> */}
    </React.StrictMode>
)

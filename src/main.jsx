import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App, { loader as plantsLoader } from './routes/App.jsx'
import './index.css'
import RootLayout from './routes/RootLayout.jsx'
import Illustrate from './routes/Illustrate.jsx'
import Sign from './routes/Sign.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <App />,
                loader: plantsLoader,
                children: [{ path: '/login', element: <Sign /> }],
            },
            {
                path: '/plants',
                loader: plantsLoader,
                element: <Illustrate />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

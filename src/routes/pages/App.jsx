import Content from '../../components/Content/Content'
// import { Outlet } from 'react-router-dom'

function App() {
    return (
        <>
            {/* <Outlet /> */}
            <main>
                <Content />
            </main>
        </>
    )
}

export default App

export async function Loader() {
    const response = await fetch('http://localhost:3000/plants')
    const resData = await response.json()
    return resData.plants
}

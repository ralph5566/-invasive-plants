import Button from '../../components/Tools/Button'

const Error = ({ title = '404', message = '找不到網頁' }) => {
    function homeHandler() {
        navigator('..')
    }

    return (
        <>
            <div className="error pt-20">
                <img
                    className="w-1/2 mx-auto max-md:w-5/6"
                    src="img/IMG_005.jpg"
                />
                <div className="my-10">
                    <h1 className="text-5xl mb-3">{title}</h1>
                    <p className="text-2xl">{message}</p>
                </div>

                <div className=" mb-20">
                    <Button onClick={homeHandler}>首頁</Button>
                </div>
            </div>
        </>
    )
}

export default Error

import Gallery from './Gallery'
import ContentSwiper from './Swiper'

const Content = () => {
    return (
        <>
            <ContentSwiper />

            <div className="mx-auto">
                <h1 className="text-4xl mt-20 mb-5 mx-8 leading-[3.5rem]">
                    天 反 時 為 災 。 地 反 物 為 妖
                </h1>
                <div className="text-lg pt-12 mx-8 ">
                    <h2>
                        妖怪皆由草木或動物等轉變的，也是怪異或反常的事物的集合，源於對未知的恐懼
                    </h2>
                    <h2>
                        透過認識與教育，了解並認識他們，揭開真面目，降妖除魔
                    </h2>
                </div>
            </div>

            <Gallery />
        </>
    )
}

export default Content

export async function Loader() {
    const response = await fetch('http://localhost:3000/plants')
    const resData = await response.json()
    return resData.plants
}

import classes from './Content.module.css'
// import NewSign from './NewSign'

import Illustrate from '../routes/Illustrate'

const Content = () => {
    return (
        <>
            <div className={classes.content_img}>
                <img src="/img/IMG_001.jpg" className={classes.img} />
                <img src="/img/IMG_002.jpg" className={classes.img} />
            </div>
            <div className={classes.content_caption}>
                <h1 className={classes.content_title}>
                    天 反 時 為 災 。 地 反 物 為 妖
                </h1>
                <div className={classes.content_p}>
                    <h2>
                        妖怪由草木或動物等轉變的，也是怪異或反常的事物的集合，源於對未知的恐懼
                    </h2>
                    <h2>透過認識與教育，揭開他們的真面目，降妖除魔</h2>
                </div>
            </div>
            <h1>圖 鑑</h1>
            <hr />
            <Illustrate />
        </>
    )
}

export default Content

export async function loader() {
    const response = await fetch('http://localhost:3000/plants')
    const resData = await response.json()
    return resData.plants
}

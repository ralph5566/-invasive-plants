import classes from './Plant.module.css'

const Plant = ({ name, img }) => {
    return (
        <div className={classes.content_plant}>
            <img src={img} className={classes.plant_img} alt={name} />
            <h2 className={classes.content_h2}>{name}</h2>
        </div>
    )
}

export default Plant

import classes from './CurrentWeather.module.css'

import Card from '../../hoc/Card/Card'
import WeatherIcon from '../../hoc/WeatherIcon/WeatherIcon'

const CurrentWeather = (props) => (
    <Card className={classes.CurrentWeather}>
        <div className={classes.Header}>
            <div style={{ fontWeight: 'bold' }} >{props.weather.date}</div>
            <div>{props.location}</div>
        </div>
        <div className={classes.Icon}>
            <WeatherIcon code={props.weather.iconCode} />
            <div className={classes.Description}>{props.weather.description}</div>
        </div>
        <div className={classes.Temp}>{props.weather.temperature} º</div>
        <div className={classes.Wind}>
            <span className="iconify" data-icon="bi:wind" data-inline="false"></span>
            <span> {props.weather.windSpeed} m/s </span>
            <span className="iconify" data-icon="et-compass" data-inline="false"></span>
            <span> {props.weather.windDirection}</span>
        </div>
    </Card>
)

export default CurrentWeather
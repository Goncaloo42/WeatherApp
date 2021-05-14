import classes from './Forecast.module.css'

import Card from '../../../hoc/Card/Card'
import WeatherIcon from '../../../hoc/WeatherIcon/WeatherIcon'

const Forecast = (props) => (
    <Card className={classes.Forecast}>
        <div className={classes.Header}>
            <div>{props.forecast.dayOfWeek}</div>
            <div>{props.forecast.dayOfMonth}</div>
        </div>
        <div className={classes.Icon}>
            <WeatherIcon code={props.forecast.icon} />
        </div>
        <div className={classes.Temp}>{props.forecast.temperature} º</div>
        <div className={classes.Wind}>
            <span className="iconify" data-icon="bi:wind" data-inline="false"></span>
            <span> {props.forecast.wind} m/s</span>
        </div>
    </Card>
)

export default Forecast




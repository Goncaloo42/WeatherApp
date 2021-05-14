import classes from "./ForecastList.module.css"

import Forecast from './Forecast/Forecast'

const ForecastList = (props) => {
    let mappedForecast = props.weatherList
        .map((item, i) => (<Forecast key={i} forecast={item} />) );

    return (
        <div className={classes.ForecastList}>
            {mappedForecast}
        </div>
    );
    }

export default ForecastList
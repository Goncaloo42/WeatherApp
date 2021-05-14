import classes from './WeatherIcon.module.css';

const WeatherIcon = (props) => (
    !props.code ? null :
        <div className={classes.WeatherIcon}>
            <img src={'http://openweathermap.org/img/w/' + props.code + '.png'} alt="WeatherIcon" />
        </div>
);

export default WeatherIcon;
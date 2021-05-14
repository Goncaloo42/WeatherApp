import classes from './CitySelector.module.css'

import Card from '../../hoc/Card/Card'
import City from './City/City'
import InputBox from '../UI/InputBox/InputBox'

const CitySelector = (props) => {
    let cities = props.cities.map((city, index) => {
        return <City key={index} city={city} clicked={() => props.clicked(city)} cityDelete={() => props.cityDelete(city)} />
    });

    return (
        <Card className={classes.CitySelector}>
            <InputBox cityAdd={props.cityAdd} newCity={props.newCity}/>
            <div className={classes.List}>
                {cities}
            </div>
        </Card>
    );
};

export default CitySelector;

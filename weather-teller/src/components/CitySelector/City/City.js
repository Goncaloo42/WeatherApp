import classes from "./City.module.css";

import trashIcon from '@iconify-icons/gridicons/trash';
import Button from '../../UI/Button/Button'
import { DELETE_CITY_HINT } from '../../../utils/Constants'
import Tooltip from '../../UI/Tooltip/Tooltip'

const City = (props) => (
    <div className={classes.City}>
        <div className={classes.CityButton} onClick={props.clicked}>
            {props.city}
        </div>
        <Tooltip id="deleteCityTip" place="right" effect="solid" message={DELETE_CITY_HINT} />
        <Button icon={trashIcon} width="1.5em" height="1.5em" clicked={props.cityDelete} tipId="deleteCityTip"/>
    </div>
);

export default City;
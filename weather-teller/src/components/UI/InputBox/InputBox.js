import Button from '../Button/Button'
import addIcon from '@iconify-icons/gridicons/add'
import { CITY_FORMAT_HINT, ADD_CITY_HINT } from '../../../utils/Constants'
import Tooltip from '../Tooltip/Tooltip'

import classes from './InputBox.module.css'

const InputBox = (props) => (
    <div className={classes.InputBox}>
        <Tooltip id="cityFormatTip" place="top" effect="solid" message={CITY_FORMAT_HINT} />
        <input type="text" ref={props.newCity} data-tip data-for="cityFormatTip" />
        <Tooltip id="addCityTip" place="right" effect="solid" message={ADD_CITY_HINT} />
        <Button icon={addIcon} width="1.5em" height="1.5em" clicked={props.cityAdd} tipId="addCityTip" />
    </div>
);

export default InputBox;
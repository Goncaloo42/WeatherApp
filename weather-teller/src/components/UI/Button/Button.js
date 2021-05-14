import classes from './Button.module.css';
import { Icon } from '@iconify/react';

const Button = (props) => (
    <Icon className={classes.Button} icon={props.icon} width={props.width} height={props.height} onClick={props.clicked}  data-tip data-for={props.tipId} />
);

export default Button;
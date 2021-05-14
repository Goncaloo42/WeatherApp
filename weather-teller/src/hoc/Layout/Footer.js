import classes from './Footer.module.css'

const Footer = (props) => (
    <div className={classes.Footer}>{props.footer}</div>
)

export default Footer
import classes from './Header.module.css'
import Logo from '../../assets/images/app_icon.png'

const Header = (props) => (
    <div className={classes.Header}>
        <img alt="logo" src={Logo} className={classes.Logo} />
        <h1>{props.title}</h1>
    </div>
)

export default Header
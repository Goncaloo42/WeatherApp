import ReactDOM from 'react-dom'

import Card from '../../../hoc/Card/Card'
import Button from '../Button/Button'
import checkmarkCircle from '@iconify-icons/gridicons/checkmark-circle';

import classes from './ErrorModal.module.css'

const Modal = (props) => {
    return (
    <>
        <div className={classes.Backdrop} onClick={props.dismiss} />
        <Card className={classes.Modal}>
            <header className={classes.Header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.Content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.Actions}>
            <Button icon={checkmarkCircle}  width="3em" height="3em" clicked={props.dismiss} />
            </footer>
        </Card>
    </>
    )
}

const ErrorModal = (props) => {
    return (
        ReactDOM.createPortal(<Modal dismiss={props.dismiss} title={props.title} message={props.message}/>, document.getElementById('errormodal-root'))
    )
};

export default ErrorModal;
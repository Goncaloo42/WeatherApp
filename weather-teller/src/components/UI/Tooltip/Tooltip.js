import ReactTooltip from 'react-tooltip'

const Tooltip = (props) => (
    <>
        <ReactTooltip id={props.id} place={props.place} effect={props.effect}>
            {props.message}
        </ReactTooltip>
    </>
);

export default Tooltip;
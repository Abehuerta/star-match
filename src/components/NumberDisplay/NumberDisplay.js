import { colors } from "../../theme";


const NumberDisplay = props => (
    <button 
        className="number" 
        onClick={() => props.onClick(props.number, props.status)}
    >
        <span className="button-front" style = {{background: colors[props.status]}}>
            {props.number}
        </span>
    </button>
);

export default NumberDisplay
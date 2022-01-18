import { colors } from "../../theme";

const PlayAgain = props => (
    <div className="game-done">
        <div 
            className='message'
            style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
        >
            {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
        </div>
        <button className="number" onClick={props.onClick}>
            <span className="button-front" style={{ width: 125, height:30, margin: 'auto', fontSize: 20}}>Play Again</span>
        </button>
    </div>
);

export default PlayAgain;
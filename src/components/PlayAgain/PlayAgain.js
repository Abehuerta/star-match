import { GAME_STATUS } from "../../hooks/useGameState";

const PlayAgain = props => (
    <div className="game-done">
        <div 
            className='message'
            style={{ color: props.gameStatus === GAME_STATUS.LOST ? 'red' : 'green'}}
        >
            {props.gameStatus === GAME_STATUS.LOST ? 'Game Over' : 'Nice'}
        </div>
        <button className="number" onClick={props.onClick}>
            <span className="button-front" style={{ width: 125, height:30, margin: 'auto', fontSize: 20}}>Play Again</span>
        </button>
    </div>
);

export default PlayAgain;
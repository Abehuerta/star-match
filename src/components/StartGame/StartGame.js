const StartGame = (props) => {
    return (
        <div className="pregame">
            <button className="number" onClick={props.startGame}>
                <span className="button-front" style={{ width: 150, height:40, margin: 'auto', fontSize: 25}}>Start Game</span>
            </button>
        </div>
    );
}

export default StartGame;
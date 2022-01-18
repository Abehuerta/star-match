import { useState } from "react"
import { Card } from "../Card";

const Game = () => {
    const [gameId, setGameId] = useState(1);
    return (
        <>
            <div className="help">
                Pick 1 or more numbers that sum to the number of gold stars
            </div>
            <Card key={gameId} startNewGame={() => setGameId(gameId + 1) }/>
        </>
    );
}

export default Game;
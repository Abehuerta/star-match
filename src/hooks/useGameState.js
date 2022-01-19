import { useState, useEffect } from "react";
import { random, randomSumIn, range, sum } from "../utils";

export const GAME_STATUS = {
    PREGAME: 'pregame',
    ACTIVE: 'active',
    WON: 'won',
    LOST: 'lost'
}

const useGameState = () => {
    const [stars, setStars] = useState(random(1,9));
    const [availableNums, setAvailableNums] = useState(range(1,9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);
    const [gameStatus, setGameStatus] = useState(GAME_STATUS.PREGAME);

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0 && gameStatus === GAME_STATUS.ACTIVE){
            const timerId = setTimeout(() =>{
            setSecondsLeft(secondsLeft -1);
            },1000)
            return () => clearTimeout(timerId);
        }
        return () => console.log('Component is changing');
    });
      

    const setGameState = (newCandidateNums) => {
        if(sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        }else{
            const newAvailbleNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            //redraw stars
            setStars(randomSumIn(newAvailbleNums, 9));
            setAvailableNums(newAvailbleNums);
            setCandidateNums([]);
        }
    } 

    return {stars, availableNums, candidateNums, secondsLeft, setGameState, gameStatus, setGameStatus}
}

export default useGameState;
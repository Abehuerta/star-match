import { useState, useEffect } from "react";
import { random, randomSumIn, range, sum } from "../utils";

const useGameState = () => {
    const [stars, setStars] = useState(random(1,9));
    //availableNums
    const [availableNums, setAvailableNums] = useState(range(1,9));
    //candidateNums
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        console.log('Rendering...');
        if (secondsLeft > 0 && availableNums.length > 0){
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

    return {stars, availableNums, candidateNums, secondsLeft, setGameState}
}

export default useGameState;
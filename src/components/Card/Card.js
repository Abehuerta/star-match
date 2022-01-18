import useGameState from '../../hooks/useGameState';
import { range, sum } from '../../utils';
import { NumberDisplay } from '../NumberDisplay';
import { PlayAgain } from '../PlayAgain';
import { StarDisplay } from '../StarDisplay';


const Card = (props) => {
    
    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState
    } = useGameState();

    const candidatesAreWrong = sum(candidateNums) > stars;
    const gameStatus = availableNums.length === 0
        ? 'won'
        : secondsLeft === 0 ? 'lost' : 'active'

    const numberStatus = (number) => {
        if(!availableNums.includes(number)) {
            return 'used'
        }
        if(candidateNums.includes(number)){
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        return 'available';
    };

    const onNumberClick = (number, currentStatus) => {
        // currentStatus => newStatus
        if(currentStatus === 'used'){
            return;
        }
        // candidateNums
        const newCandidateNums = 
            currentStatus === 'available'
                ? candidateNums.concat(number)
                : candidateNums.filter(cn => cn !== number);

        setGameState(newCandidateNums);
    }

    return (
    <div className="body">
        <div className='card'>
            <div className='card-forefront'>
                <div className='card-header'>
                    {gameStatus !== 'active' ? (
                        <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/>
                    ) : (
                        <StarDisplay count={stars} />
                    )}
                </div>
                <div className='divider'></div>
                <div className='card-footer'>
                    {range(1,9).map(number =>
                        <NumberDisplay 
                            key={number} 
                            status={numberStatus(number)}
                            number={number}
                            onClick={onNumberClick}
                        />    
                    )}
                </div>
            </div>
        </div>
        <div className="timer">{secondsLeft}</div>
    </div>
    );
}

export default Card;
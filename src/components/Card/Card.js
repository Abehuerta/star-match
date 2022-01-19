import useGameState from '../../hooks/useGameState';
import { range, sum } from '../../utils';
import { NumberDisplay } from '../NumberDisplay';
import { PlayAgain } from '../PlayAgain';
import { StarDisplay } from '../StarDisplay';
import { StartGame } from '../StartGame';
import { GAME_STATUS } from '../../hooks/useGameState';


const Card = (props) => {
    
    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState,
        gameStatus, setGameStatus
    } = useGameState();

    const candidatesAreWrong = sum(candidateNums) > stars;

    if(gameStatus === GAME_STATUS.ACTIVE){
        if(secondsLeft === 0){
            setGameStatus(GAME_STATUS.LOST);
        }else if(availableNums.length === 0){
            setGameStatus(GAME_STATUS.WON);
        }
    }

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
                    { gameStatus === GAME_STATUS.PREGAME ? (
                        <StartGame startGame={() => setGameStatus(GAME_STATUS.ACTIVE)} />
                    ) : gameStatus !== GAME_STATUS.ACTIVE ? (
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
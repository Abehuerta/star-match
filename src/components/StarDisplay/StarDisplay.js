import { range } from "../../utils";

const StarDisplay = props => (
    <>
        {range(1,props.count).map(starId => 
            <div key={starId} className ="star"></div>    
        )}
        {range(props.count, 8).map(starId => 
            <div key={starId} className ="star-greyed"></div>    
        )}
    </>
);

export default StarDisplay
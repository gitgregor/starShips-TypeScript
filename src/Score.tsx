
import * as React from 'react';

interface Props {
    result: string;
}

const Score: React.FunctionComponent<Props> = (props) => {
    return (
        <div className="scorePlayerName" >
            {props.result}
        </div>);
}

export default Score;
import React from 'react';

const userOutput = props => {
    return (
        <div className="user-output">
            <p>{props.title}</p>
            <p>{props.content}</p>
        </div>
    )
}

export default userOutput;
import React from 'react';

const userInput = props => {

    return <input className="user-input" onChange={props.inputChange} value={props.inputValue}/>;
}

export default userInput;
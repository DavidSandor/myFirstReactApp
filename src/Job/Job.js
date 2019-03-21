import React from 'react';

const job = props => {

    const workTime = () => {
        if (props.fullTime) {
            return <p>This job is full-time</p>
        }
        else{
            return <p>This job is part-time</p>
        }
    }

    return (
        <div className="job">
            <h2>{props.position}</h2>
            <p>Monthly salary: {props.salary} EUR</p>
            {workTime()}
        </div>
    )
};

export default job;
import React from 'react';

const havaloginp =( props ) => {

    return (
        <div className="Havalogin">
            <p onClick={props.click}> {props.username} </p>
        </div>
    )
};


export default havaloginp;
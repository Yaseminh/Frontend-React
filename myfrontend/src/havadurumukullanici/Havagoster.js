import React from 'react';

//import './Havadurumu.css';

const havagoster= ( props ) => {

    return (
        <div className="HavaDurum">
            <p onClick={props.click}> {props.name} </p>
        </div>
    )
};

export default havagoster;
import React from 'react';

//import './Havadurumu.css';

const havadurumu= ( props ) => {

    return (
        <div className="HavaDurum">
            <p onClick={props.click}> {props.sehir} </p>
        </div>
    )
};

export default havadurumu;
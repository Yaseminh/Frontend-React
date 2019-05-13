import React from 'react';

//import './Havadurumu.css';

const aramagecmisi= ( props ) => {

    return (
        <div className="Aramagecmisi">
            <p onClick={props.click}> {props.sehir} </p>
        </div>
    )
};

export default aramagecmisi;
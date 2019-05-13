import React from 'react';


const nameformpost= ( props ) => {
    return (
        <div className="Havadurumusehir">
            <p onClick={props.click}> {props.id} {props.sehir} </p>                   
        </div>
    )
};

export default nameformpost;
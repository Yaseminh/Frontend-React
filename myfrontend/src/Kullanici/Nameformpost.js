import React from 'react';


const nameformpost= ( props ) => {
    return (
        <div className="Nameformpost">
            <p onClick={props.click}>  {props.id} {props.username} {props.surname} {props.password} {props.statu} </p>        
           
        </div>
    )
};

export default nameformpost;
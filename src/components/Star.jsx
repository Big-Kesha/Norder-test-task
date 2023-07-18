import React from 'react';
import './stars.sass'


const Star = ({number}) => {
    return (
        <>
            <input
                type='radio'
                id={`${number}-star-rating`}
                name={`star-rating`}
            />
            <label htmlFor={`${number}-star-rating`}/>
        </>
    );
};

export default Star;
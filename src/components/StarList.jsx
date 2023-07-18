import React from 'react';
import Star from "./Star";
import './stars.sass'

const StarList = () => {
    let starList = []

    for(let i = 5; i > 0; i--){
        starList.push(<Star number={i} key={i}/>)
    }

    return (
        <form className={'Stars'}>
            {starList}
        </form>
    );
};

export default StarList;
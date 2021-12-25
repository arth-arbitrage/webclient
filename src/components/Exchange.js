import React from 'react';
import Swappools from './Swappools';

function Exchange(props) {
    if (props === undefined) return (<div></div>);
    console.log(props.swappools.swappools)
    return (
        props.swappools.swappools.map((swappools) => {
            return (
                <div className="container">
                    <Swappools swappools={swappools} />
                </div>
            );
        })
    );
}

export default Exchange;


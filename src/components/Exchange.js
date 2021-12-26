import React from 'react';
import Swappools from './Swappools';

function Exchange(props) {
    if (props === undefined) return (<div></div>);
    console.log(props.exchanges.swappools)
    return (
        props.exchanges.swappools.map((swappools) => {
            return (
                <div className="container">
                    <Swappools exchgName={swappools.name} exchgId={swappools.id} swappools={swappools.pools} />
                </div>
            );
        })
    );
}

export default Exchange;


import React from 'react';
import Lenderpool from './Lenderpools';

function Lenders(props) {
    if (props === undefined) return (<div></div>);
    
    return (
        props.lenders.lenderpools.map((lenderpools) => {
            return (
                <div className="container">
                    <Lenderpool lenderName={lenderpools.name} lenderId={lenderpools.id} lenderpools={lenderpools.pools} />
                </div>
            );
        })                
    );
}
export default Lenders;
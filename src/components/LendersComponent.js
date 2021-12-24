import React from 'react';
import Lenderpool from './LenderpoolComponent';




function Lender(props) {
    if (props === undefined) return (<div></div>);
    
    return (
        props.lenderpools.lenderpools.map((lenderpools) => {

            return (
                <div className="container">
                    <Lenderpool lenderpools={lenderpools} />
                </div>
            );
        })
            
                
    );
}
export default Lender;
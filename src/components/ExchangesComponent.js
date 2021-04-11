import React from 'react';
import Swappool from './SwappoolComponent';

const Exchanges = (props) => {

    const Exchange = props.exchanges.exchanges.map((exchange) => {
        
        
        return (
            <div className="container">
                
                <Swappool exchange></Swappool>
                
                </div>
        );
    });
                
     
       
     if (props.exchanges.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.exchanges.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
    return (
        <div className="container">
                    
        {Exchange}
        </div>
        );
    
}


export default Exchanges;
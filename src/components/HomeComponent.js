import React from 'react';
import Swappool from './SwappoolComponent';




function Home(props) {
    if (props === undefined) return (<div></div>);
    console.log(props.swappools.swappools)
    return (
        props.swappools.swappools.map((swappools) => {

            return (
                <div className="container">
                    <Swappool swappools={swappools} />
                </div>
            );
        })
            
                
    );
}

export default Home;


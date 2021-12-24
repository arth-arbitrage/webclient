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

/*const swappool = props.swappools.swappools.map((swappool) => {
    return (
        <div key={swappool.id}>
            <RenderItem swappool={swappool} />

        </div>
    );
});*/

/*function RenderItem ({swappool})
    return (
        <div className="container">
        <div>
            {swappool.name}
        </div></div>
    );
}*/


/*function RenderItem ({exchange}) {
    return (
        <Card>
            <CardTitle>{exchange.ExchangeToken2}</CardTitle>
        </Card>
    );
}

 const Exchange = (props) => {

  const exchange = props.exchanges.exchanges.map((exchange) => {
    return (
        <div className="col-12 col-md-5 m-1"  key={exchange.id}>
            <RenderItem exchange={exchange} />
        </div>
    );
});
    if (props.exchanges.isLoading) {
    return(
        <div className="container">
            <div className="row">
                <Loading />
            </div>
        </div>
    );
    }
    else if (props.exchanges.errMess) {
    return(
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
            <div className="row">
                 <div className="col-12">
                    <h3>Exchanges</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {exchange}
            </div>
        </div>
    );
}


export default Exchange;*/
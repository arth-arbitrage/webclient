import React from 'react';
import { Loading } from './LoadingComponent';



const Swappool = (props) => {

        
    const swappool = props.swappools.map((swappool) => {
        const { id, name, token0, token1, reserve0, reserve1, price0, price1, fees } = swappool
        return (
            <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{token0}</td>
            <td>{token1}</td>
            <td>{reserve0}</td>
            <td>{reserve1}</td>
            <td>{price0}</td>
            <td>{price1}</td>
            <td>{fees}</td>
        </tr>
        );
    });
    if (props.swappools.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.swappools.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.swappools.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else

        return (
            <div className="container">
                <div>
                    <h1 id='title'>Swappools</h1>
                    
                    <table id='swappools'>
                        <tbody>
                            <th>ID</th><th>NAME</th><th>TOKEN0</th><th>TOKEN1</th><th>RESERVE0</th><th>RESERVE1</th>
                            <th>PRICE0</th><th>PRICE1</th><th>FEES</th>
                            {/*<tr>{header}</tr>*/}
                            {swappool}
                        </tbody>
                    </table>
                </div>
            </div>

        );
}


export default Swappool;
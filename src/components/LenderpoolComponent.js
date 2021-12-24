import React from 'react';
import { Loading } from './LoadingComponent';



const Lenderpool = (props) => {

        
    const lenderpool = props.lenderpools.map((lenderpool) => {
        const { id, name, token, reserve,fees } = lenderpool
        return (
            <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{token}</td>
            <td>{reserve}</td>
            <td>{fees}</td>
        </tr>
        );
    });
    if (props.lenderpools.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.lenderpools.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.lenderpools.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else

        return (
            <div className="container">
                <div>
                    <h1 id='title'>Lenderpools</h1>
                    
                    <table id='swappools'>
                        <tbody>
                            <th>ID</th><th>NAME</th><th>TOKEN</th><th>RESERVE</th><th>FEES</th>
                                {lenderpool}
                        </tbody>
                    </table>
                </div>
            </div>

        );
}


export default Lenderpool;
import React from 'react';
import { Loading } from './LoadingComponent';
import { useEffect, useState, useRef } from "react";
import { connect } from 'react-redux';
import { addNewOperation } from '../redux/ActionCreators';
import "./Component.css";

const LenderpoolRow = (props) => {

    const [quantity0, setQuantity0] = useState("100");
    const [quantity1, setQuantity1] = useState("100");
    const [price0, setPrice0] = useState("100");
    const [price1, setPrice1] = useState("100");
    const { id, name, token, reserve,fees } = props.lenderpool;

    const handleClickOpButton = async () => {
        props.addNewOperation({ id, name, token0: token, token1:"", quantity0, quantity1:"", price0:"", price1:"", fees });
    }

    return(
        <tr key={id} onClick={() => handleClickOpButton()}>
        <td>{id}</td>
        <td className="td-name">{name}</td>
        <td>{token}</td>
        <td>{reserve}</td>
        <td>{fees}</td>
        </tr>
    );
}
const Lenderpool = (props) => {

    const lenderpool = props.lenderpools.map((lenderpool) => {
        const { id, name, token, reserve,fees } = lenderpool
        return (<LenderpoolRow {...props} lenderpool={lenderpool}> </LenderpoolRow>);
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
            <div>
                <h1 id='title'>Lenderpools: {props.lenderName} </h1>
                
                <table id='swappools'>
                    <tbody>
                        <th>ID</th><th>NAME</th><th>TOKEN</th><th>RESERVE</th><th>FEES</th>
                            {lenderpool}
                    </tbody>
                </table>
            </div>
        );
}


export default connect(null, {addNewOperation})(Lenderpool);
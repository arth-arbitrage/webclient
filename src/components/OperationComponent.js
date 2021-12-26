import React from 'react';
import { EmptyOperation } from './EmptyOperation';
import styled from "styled-components";
import { clearOperations } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { useEffect, useState, useRef } from "react";
import "./Component.css";

const Operations = (props) => {
    let operations = props.operations.operations;  
    const [amount, setAmount] = useState("");
    const [id, setId] = useState("1");
    const [name, setName] = useState("USDT-wEth");
    const [token0, setToken0] = useState("USDT");

    const [token1, setToken1] = useState("wETH");

    const [quantity0, setQuantity0] = useState("100");
    const [quantity1, setQuantity1] = useState("100");
    const [price0, setPrice0] = useState("100");
    const [price1, setPrice1] = useState("100");
    const [fees, setFees1] = useState("0.003");

    const handleClickOpButton = async () => {
        props.addNewOperation({ id, name, token0, token1, quantity0, quantity1, price0, price1, fees });
    }

    const handleChangeAmount = async () => {
        
    }

    console.log(`props ${props}`);
    const opdispList = operations.map((operation) => {
        const { id, name, token0, token1, quantity0, quantity1, price0, price1, fees } = operation
        return (
            <tr key={id}>
            <td>{id}</td>
            <td className="td-name">{name}</td>
            <td>{token0}</td>
            <td>{token1}</td>
            <td><div contenteditable='true'>{quantity0}</div></td>
            <td>{quantity1}</td>
            <td>{price0}</td>
            <td>{price1}</td>
            <td>{fees}</td>
        </tr>
        );
    });
    if (operations.isEmpty) {
        return (
            <div className="container">
                <div className="row">
                    <EmptyOperation />
                </div>
            </div>
        );
    }
    else if (operations.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{operations.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else

        return (
            <div className="container">
                <div>
                    <h1 id='title'>Multi Swap Operations</h1>
                    <OpPanel> 
                        <Select>
                            <option value="" hidden>
                            Funding Source
                            </option>
                            <option value="1">Flash Loan</option>
                            <option value="2">Own Funds</option>
                        </Select>     
                        <AmountLabel>Amount</AmountLabel>
                        <Input value={amount} name="amount" placeholder="Amount" onChange={handleChangeAmount}></Input>                   
                        <OpButton onClick = {props.clearOperations}>Clear</OpButton>
                        <OpButton >Estimate</OpButton>
                        <OpButton >Execute</OpButton>
                
                    </OpPanel>
                    <table id='swappools'>
                        <tbody>
                            <th>ID</th><th>Name</th><th>Token0</th><th>Token1</th><th>Token0 Qty</th><th>Token1 Qty</th>
                            <th>Token1 Price</th><th>Token1 Price</th><th>Fees</th>
                            {/*<tr>{header}</tr>*/}
                            {opdispList}
                        </tbody>
                    </table>
                </div>
            </div>

        );
}

const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
  };

  
  const OpButton = styled.button`
  background-color: #e91e63;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 16px;
  outline: 0;
  width: 120px;
  //text-transform: uppercase;
  margin: 10px 10px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #ad1457;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
const OpPanel = styled.div`
  color: palevioletred;
  font-size: 20px;
  margin: 0.5em;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TableData = styled.td`
//font-size: 3vh;
border: 1px solid LightGrey;
height: 100%;
width: 10%;
text-align: left;
vertical-align: middle;
text-overflow: ellipsis;
}
`;

const Select = styled.select`
  width: 200px;
  height: 35px;
  background-color: #e91e63;
  color: white;
  padding-left: 5px;
  font-size: 16px;
  border: none;
  margin: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const AmountLabel = styled.div`
  position: relative;
  margin: 0.6em;
  padding: 0.5em;
  align-items: center;
  color: palevioletred;
  font-size: 16px;
  box-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;  
  flex-basis:80px
`;

const Input = styled.input`
position: relative; 
font-size: 16px;
padding: 0.5em;
margin: 0.6em;
color: ${props => props.inputColor || "palevioletred"};
background: #282C34;
border: none;
border-radius: 3px;
box-sizing: border-box;
flex-grow: 0;
flex-shrink: 0;
max-width: 160px;
`;
export default connect(null, {clearOperations})(Operations);
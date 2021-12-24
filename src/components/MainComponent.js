import React, { Component } from 'react';
import Home from './HomeComponent';
import Exchanges from './ExchangesComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchExchanges } from '../redux/ActionCreators';
import { Network, Arbitrage } from 'arbitrage-js';
import { connectWallet, web3Provider, onNetworkUpdate } from '../wallet';


const mapStateToProps = state => {
  return {
     //exchanges: state.exchanges,
 
    /* lenders: state.lenders*/
    swappools: state.swappools

  }
}
const mapDispatchToProps = dispatch => ({

  fetchExchanges: () => { dispatch(fetchExchanges())},
  /*fetchLenders: () => dispatch(fetchLenders())*/

});




class Main extends Component {

  state = {
    accountAddress: null,
    test:"Test String"
  }

  constructor(props) {
    super(props);
    this.onChangeAddress()
    onNetworkUpdate(this.onChangeAddress)
    this.renderControls = this.renderControls.bind(this)
  }
  componentDidMount() {
    /*this.props.fetchExchanges();*/
    /*this.props.fetchLenders();
    this.props.fetchSwappools();*/

  }

  onChangeAddress = () => {
    console.log(web3Provider);
    this.arbitrage = new Arbitrage(web3Provider, {
      networkName: Network.Main
    })
    this.web3 = this.arbitrage.web3
    this.web3.eth.getAccounts((err, res) => {
      if(err !== null){
        console.log(err)
      } else {
        this.setState({
          accountAddress: res[0]
        })
      }
    })
  }

  async enableWallet() {
    const { accountAddress } = this.props
    if (!accountAddress) {
      await connectWallet()
    }
  }
  renderControls(props)  {  
    return (
    <div className="mb-3 ml-4">
      <div className="btn-group" role="group">
        <button type="button" className={"btn btn-outline-secondary " + "active" } data-toggle="button" onClick={() => this.enableWallet()}>
          Refresh Wallet
        </button>
        
      </div>
      <div>{props.account}</div>
    </div>
    )
  }

  render() {

    const HomePage = () => {
      
      return(
        <div>
          {this.renderControls({account: this.state.accountAddress})}
          {<Home swappools={this.props.swappools} ></Home>}
        </div>
      );
    }
    const ExchangePage = () => {
      
      return(

        <Exchanges 
            exchanges={this.props.exchanges}
            swappools={this.props.swappools}
        />
    
      );
    }



    return (
      <div>

        <Switch>
           
          <Route path='/' component={HomePage} />
          

          {/*<Redirect to="/exchanges" />*/}
        </Switch>

      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 
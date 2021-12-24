import React, { Component } from 'react';
import Home from './HomeComponent';
import Exchanges from './ExchangesComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchExchanges } from '../redux/ActionCreators';
import { fetchLenders } from '../redux/ActionCreators';
import Lenders from './LendersComponent';
import Operation from './OperationComponent';





const mapStateToProps = state => {
  return {
     //exchanges: state.exchanges,
 
     lenderpools: state.lenderpools,
    swappools: state.swappools

  }
}
const mapDispatchToProps = dispatch => ({

  fetchExchanges: () => { dispatch(fetchExchanges())},
  fetchLenders: () => { dispatch(fetchLenders())},

});




class Main extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchExchanges();
    this.props.fetchLenders();
    /*this.props.fetchSwappools();*/

  }

   
  
  render() {

    const HomePage = () => {
      
      return(
       <div class ="container"  >
        <Home 
           
            swappools={this.props.swappools}
        />
        <Lenders
          lenderpools = {this.props.lenderpools}
      />
      
      </div>
      );
    }
   



    return (
      <div>

        <Switch>
           
          <Route path='/' component={HomePage} />
          

        </Switch>


      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 
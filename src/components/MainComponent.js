import React, { Component } from 'react';
import Home from './HomeComponent';
import Exchanges from './ExchangesComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchExchanges } from '../redux/ActionCreators';





const mapStateToProps = state => {
  return {
     //exchanges: state.exchanges,
 
    /* lenders: state.lenders*/
    swappools: state.swappools

  }
}
const mapDispatchToProps = dispatch => ({

  fetchExchanges: () => { dispatch(fetchExchanges())},
  /*fetchLenders: () => dispatch(fetchLenders())
  fetchSwappools: () => { dispatch(fetchSwappools()) }*/

});




class Main extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchExchanges();
    /*this.props.fetchLenders();
    this.props.fetchSwappools();*/

  }

   
  
  render() {

    const HomePage = () => {
      
      return(
         
        <Home 
           
            swappools={this.props.swappools}
        />
    
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
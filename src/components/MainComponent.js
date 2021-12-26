import React, { Component } from 'react';
import Exchange from './Exchange';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchExchanges } from '../redux/ActionCreators';
import { fetchLenders } from '../redux/ActionCreators';
import { initOperations } from '../redux/ActionCreators';
import Lenders from './Lenders';
import Operations from './OperationComponent';
import './MainComponent.css';


const mapStateToProps = state => {
  return {
     //exchanges: state.exchanges,
 
    lenders: state.lenders,
    exchanges: state.exchanges,
    operations: state.operations,
  }
}
const mapDispatchToProps = dispatch => ({

  fetchExchanges: () => { dispatch(fetchExchanges())},
  fetchLenders: () => { dispatch(fetchLenders())},
  initOperations: () => { dispatch(initOperations())},
});




class Main extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchExchanges();
    this.props.fetchLenders();
    this.props.initOperations();
  }
  
  render() {
    const HomePage = () => {
      return(
       <div className="container-main"  >
          <Operations operations={this.props.operations} />
          <Exchange   exchanges={this.props.exchanges} />
          <Lenders lenders = {this.props.lenders} />
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
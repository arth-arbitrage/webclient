import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';

export const swappoolsFailed = (errmess) => ({
  type: ActionTypes.SWAPPOOLS_FAILED,
  payload: errmess
});

export const addSwappools = (id, name, swappools) => ({
  type: ActionTypes.ADD_SWAPPOOLS,
  payload: {id: id, name: name, pools: swappools}
});

export const fetchExchanges = () => (dispatch) => {

  dispatch(exchangesLoading(true));

  return fetch(baseUrl + '/exchanges')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(exchanges => {
      console.log(`exchanges: ${JSON.stringify(exchanges)}`);
      exchanges.map((exchange, index) => {
      return fetch(baseUrl + '/exchanges/'+exchange.id+'/pools')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
          error => {
            var errmess = new Error(error.message);
            throw errmess;
          })
        .then(response => response.json())
        .then(pools => {
          console.log(`pools: ${pools}`);
          dispatch(addSwappools(exchange.id, exchange.name, pools))
        })
      })
    })
    .catch(error => dispatch(exchangesFailed(error.message)));
}

export const exchangesLoading = () => ({
  type: ActionTypes.EXCHANGES_LOADING
});

export const exchangesFailed = (errmess) => ({
  type: ActionTypes.EXCHANGES_FAILED,
  payload: errmess
});


export const addLenderpools = (id, name, lenderpools) => ({
  type: ActionTypes.ADD_LENDERPOOLS,
  payload: {id: id, name: name, pools:lenderpools}
});

export const fetchLenders = () => (dispatch) => {

  dispatch(lendersLoading(true));

  return fetch(baseUrl + '/lenders')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(lenders => {
      lenders.map((lender, index) => {
      return fetch(baseUrl + '/lenders/'+lender.id+'/pools')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
          error => {
            var errmess = new Error(error.message);
            throw errmess;
          })
        .then(response => response.json())
        .then(pools => dispatch(addLenderpools(lender.id, lender.name, pools)))
      })
    })
    .catch(error => dispatch(lendersFailed(error.message)));
}
export const lendersLoading = () => ({
  type: ActionTypes.LENDERS_LOADING
});

export const lendersFailed = (errmess) => ({
  type: ActionTypes.LENDERS_FAILED,
  payload: errmess
});

export const initOperations = () => ({
  type: ActionTypes.OPERATION_INIT,
  payload: []
});

export const addNewOperation = (operation) => ({
  type: ActionTypes.OPERATION_ADD,
  payload: operation,
});

export const clearOperations = (operation) => ({
  type: ActionTypes.OPERATION_CLEAR,
  payload: "",
});



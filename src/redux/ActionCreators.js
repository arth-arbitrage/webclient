import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';

/*export const fetchSwappools = () => (dispatch) => {

  dispatch(swappoolsLoading(true));

  return fetch(baseUrl + 'swappools')
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
    .then(swappools => dispatch(addSwappools(swappools)))
    .catch(error => dispatch(swappoolsFailed(error.message)));
}*/

/*export const swappoolsLoading = () => ({
  type: ActionTypes.SWAPPOOLS_LOADING
});*/

export const swappoolsFailed = (errmess) => ({
  type: ActionTypes.SWAPPOOLS_FAILED,
  payload: errmess
});

export const addSwappools = (swappools) => ({
  type: ActionTypes.ADD_SWAPPOOLS,
  payload: swappools
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
        .then(pools => dispatch(addSwappools(pools)))
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

/*export const addExchanges = (exchanges) => ({
  type: ActionTypes.ADD_EXCHANGES,
  payload: exchanges
});*/

/*export const fetchLenderpools= () => (dispatch) => {

  dispatch(lenderpoolsLoading());

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
  .then(lenders => dispatch(addLenders(lenders)))
  .catch(error => dispatch(lendersFailed(error.message)));
}
export const lendersLoading = () => ({
  type: ActionTypes.LENDERS_LOADING
});*/

/*export const lendersFailed = (errmess) => ({
  type: ActionTypes.LENDERS_FAILED,
  payload: errmess
});*/

export const addLenderpools = (lenderpools) => ({
  type: ActionTypes.ADD_LENDERPOOLS,
  payload: lenderpools
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
        .then(pools => dispatch(addLenderpools(pools)))
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

export const addLenders = (lenders) => ({
  type: ActionTypes.ADD_LENDERS,
  payload: lenders
});




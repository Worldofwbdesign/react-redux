let redux = require('redux');

const defaultState = {
  searchText: '',
  showCompleted: false,
  todos: []
};

let reducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'UPDATE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
      break;
    default:
      return state;
  }
};

let store = redux.createStore(reducer);

console.log('current state', store.getState());

const action = {
  type: 'UPDATE_SEARCH_TEXT',
  searchText: 'Dog'
}

store.dispatch(action);

console.log('new state', store.getState());

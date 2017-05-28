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

let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

let unsubscribe = store.subscribe(() => {
  let state = store.getState();

  console.log(state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

const action = {
  type: 'UPDATE_SEARCH_TEXT',
  searchText: 'Dog'
};
const action2 = {
  type: 'UPDATE_SEARCH_TEXT',
  searchText: 'Cat'
}

store.dispatch(action);
store.dispatch(action2);

let redux = require('redux');
let axios = require('axios');

let actions = require('./actions/index');
let store = require('./store/configureStore').configure();

let unsubscribe = store.subscribe(() => {
  let state = store.getState();

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = `<a target="_blank" href="${state.map.url}">Check out your location</a>`;
  }

  console.log('new state', store.getState());
});

store.dispatch(actions.updateSearchText('Dogs'));
store.dispatch(actions.updateSearchText('Cats'));
store.dispatch(actions.addTodo('Feed Cat', '14.05.2017'));
store.dispatch(actions.addTodo('Feed Dog', '14.06.2017'));
store.dispatch(actions.removeTodo(2));
store.dispatch(actions.fetchLocation());

let redux = require('redux');

let searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCH_TEXT':
      return action.searchText
    default:
      return state;
  }
};

let updateSearchText = (searchText) => {
  return {
    type: 'UPDATE_SEARCH_TEXT',
    searchText
  }
};


let todoId = 1;
let todosReducer = (state = [], action) => {
  switch(action.type) {

    case 'ADD_TODO':
      return [
          ...state,
          {
            id: todoId++,
            title: action.title,
            dateCreated: action.dateCreated,
          }
        ]
      break;

    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id)

    default:
      return state;
  }
};

let addTodo = (title, dateCreated) => {
  return {
    type: 'ADD_TODO',
    title,
    dateCreated
  }
};

let removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

let reducer = redux.combineReducers({
  searchText: searchTextReducer,
  todos: todosReducer
})

let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

let unsubscribe = store.subscribe(() => {
  let state = store.getState();

  console.log(state.searchText);
  document.getElementById('app').innerHTML = state.searchText;

  console.log('new todos array', store.getState());
});

store.dispatch(updateSearchText('Dogs'));
store.dispatch(updateSearchText('Cats'));
store.dispatch(addTodo('Feed Cat', '14.05.2017'));
store.dispatch(addTodo('Feed Dog', '14.06.2017'));
store.dispatch(removeTodo(2));

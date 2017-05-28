let redux = require('redux');

const defaultState = {
  searchText: '',
  showCompleted: false,
  todos: []
};

let todoId = 1;

let reducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'UPDATE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
      break;

    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: todoId++,
            title: action.todo.title,
            dateCreated: action.todo.dateCreated,
          }
        ]
      }
      break;

    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id)
      }

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

  console.log('new todos array', store.getState());
});

const action = {
  type: 'UPDATE_SEARCH_TEXT',
  searchText: 'Dog'
};
const action2 = {
  type: 'UPDATE_SEARCH_TEXT',
  searchText: 'Cat'
};

const addTodo = {
  type: 'ADD_TODO',
  todo: {
    title: 'Feed cat',
    dateCreated: '14.08.2017'
  }
};

const addTodo2 = {
  type: 'ADD_TODO',
  todo: {
    title: 'Watch film',
    dateCreated: '18.09.2017'
  }
}

const removeTodo = {
  type: 'REMOVE_TODO',
  id: 2
}

store.dispatch(action);
store.dispatch(action2);
store.dispatch(addTodo);
store.dispatch(addTodo2);
store.dispatch(removeTodo);

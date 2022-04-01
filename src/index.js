import { createStore } from 'redux';

const inputTodo = document.querySelector("input");
const inputTodoBtn = document.querySelector("button");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE TODO";

const reducer = (state = [], action) => {
    //console.log(action);
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE_TODO:
            return [];
        default:
            return state;
    }
}
const store = createStore(reducer);

store.subscribe(() => { console.log(store.getState()) });

const createTodo = () => {
    //console.log(inputTodo.value);
    const toDo = inputTodo.value;
    inputTodo.value = "";
    store.dispatch({ type: ADD_TODO, text: toDo });
}

inputTodoBtn.addEventListener("click", createTodo);
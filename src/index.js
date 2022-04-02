import { createStore } from 'redux';

const inputTodo = document.querySelector("input");
const inputTodoBtn = document.querySelector("button");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE TODO";

const addToDo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

const deleteToDo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

const reducer = (state = [], action) => {

    switch (action.type) {
        case ADD_TODO:
            const newToDoObj = { text: action.text, id: Date.now() };
            return [newToDoObj, ...state];
        case DELETE_TODO:
            const newState = state.filter( toDo => toDo.id !== Number(action.id));
            return newState;
        default:
            return state;
    }
}
const store = createStore(reducer);

const dispatchAddToDo = text => {
    store.dispatch(addToDo(text));
}

const dispatchDeleteTodo = (event) => {
    const id = event.target.parentNode.id;
    store.dispatch(deleteToDo(id));
}


const paintToDos = () => {

    const toDos = store.getState();
    ul.innerHTML = ""; // ul 초기화
    toDos.forEach( toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "❌"
        btn.addEventListener("click", dispatchDeleteTodo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
}
store.subscribe(paintToDos);


const createTodo = () => {

    const toDo = inputTodo.value;
    if(toDo === "") {
        return;
    }
    inputTodo.value = "";
    inputTodo.focus();
    dispatchAddToDo(toDo);
}

inputTodoBtn.addEventListener("click", createTodo);
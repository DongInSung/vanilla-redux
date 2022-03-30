import { createStore } from "redux";


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {

    switch(action.type) {
        case "ADD":
            return count + 1;
        case "MINUS":
            return count - 1;
    }

    return count;
}
const countStore = createStore(countModifier);

console.log(countStore.getState());

countStore.dispatch({ type: "ADD"});
countStore.dispatch({ type: "ADD"});

console.log(countStore.getState());









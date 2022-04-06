import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../store/store";
import { add } from "../store/store";
import ToDo from "../components/ToDo";

function Home( {toDos, addToDo} ) {
    
    const [text, setText] = useState("");

    const onChange = (event) => {
        setText(event.target.value);
    }

    const onSubmit = () => {
        if(text === "") {
            return;
        }
        addToDo(text);

        setText("");
        document.querySelector("input").focus();
    }

    return (
        <>
            <h1>To Do</h1>
            <input type='text' value={text} onChange={onChange} />
            <button onClick={onSubmit}>Add To Do</button>

            <ul>
                {toDos.map( toDo => (
                    <ToDo key={toDo.id} text={toDo.text} id={toDo.id} />
                ))}
            </ul>
        </>
    )
}


function mapStateToProps(state) {
    return {
        toDos: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => dispatch(add(text))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";


function Detail({ toDos }) {

    const id = useParams();

    const [toDo, setToDo] = useState({
        id: null,
        text: null
    });

    useEffect(() => {
        const findToDo = toDos.filter(x => x.id === parseInt(id.id));
        
        if(findToDo.length !== 0) {
            setToDo({
                id: findToDo[0].id,
                text: findToDo[0].text
            });
        }

    }, [toDos])

    return (
        <>
            <h1>{toDo.text === null ? null : toDo.text}</h1>
            <h5>{toDo.id === null ? null : `created at  ${toDo.id}`}</h5>
        </>
    )
}

function mapStateToProps(state) {
    return {
        toDos: state
    }
}

export default connect(mapStateToProps, null)(Detail);
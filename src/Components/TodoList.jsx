import React from "react";
const TodoList = (props) => {
    //     const deleteItems=()=>{
    // console.log("DELETED");
    //     };
    return (
        <>
            <div className="todo_style">
                {/* Using fontawesome icon cross *.we want when we click this cross
        icon item get deleted therefore we use onclick event*/}
                <i className="fa fa-times" aria-hidden="true"
                    onClick={() => {
                        props.onSelect(props.id);
                    }} />
                <li>{props.text}</li>
            </div>
        </>
    )
};
export default TodoList;
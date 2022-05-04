import React from "react";



const ActualAction = ({text, goals, goalItems, setGoalItems, setCount}) => {
    

    const deleteHandler=()=>{
        setGoalItems(goalItems.filter((el) => el.id !== goals.id ))
        
    }


    const completeHandler = () => {
    setGoalItems(goalItems.map( item => {
        if(item.id === goals.id){
            setCount(prevCount => prevCount+1)
            return {
                ...item, completed: !item.completed

            }
        }
        return item;
    }))
}

    return(
    <>
     <div className="things-style">
        <li className={`todo-item ${goals.completed ? "completed" : '' } `}>{text}</li>
        <button onClick={completeHandler}  className="complete-btn"><i className="fa-check">Done</i></button>
        <button onClick={deleteHandler} className="trash-btn"><i className="fa-trash">Delete</i></button>
     </div>
     </>
    );
}


export default ActualAction;


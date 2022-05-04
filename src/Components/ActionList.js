import React from "react";
import ActualAction from "./ActualAction";

const ActionList = ({goalItems, setGoalItems, setCount}) => {
    
return(
    <div className="todo-container">
      <ul className="todo-list">
          {goalItems.map( goals => (
              <ActualAction 
              goalItems={goalItems} 
              setGoalItems={setGoalItems}
              setCount={setCount} 
              text={goals.text} 
              goals={goals}
              key={goals.id}/>
          )) }
      </ul>
    </div>
)
}


export default ActionList;
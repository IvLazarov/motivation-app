import React from "react";
import {Link} from 'react-router-dom';
import Popup from "./Popup";
import { useState } from "react";

const TakingAction = () => {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [goalText, setGoalText] = useState('');
    const[toDoItems, setToDoItems ] = useState([]);
    
    const handleChange=(e)=>{
        setGoalText(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
   
    return (
        <div className="part-two">
            <div className="goal-style">

                <button onClick={() => setButtonPopup(true)} >set a goal</button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h5>A small change today will make you change your way!</h5>
                <form>
                <input type="text" onChange={handleChange} value={goalText} placeholder="e.g. clean my room, do 10 push ups..." />
                <button type="submit" onClick={() => console.log('btn clicked')} >set goal</button>
                    
                </form>
            </Popup>    
            
            </div>
            <Link to="/">The right words can inspire action.</Link>
        </div>
    )
}

export default TakingAction;

//Napraj da go chita tekstot od search bar kako vo Quote.js i da go dodava vo HTML kako pasusi so kopche Done
//Koga kje se klikne kopcheto tekstot se precrtvua
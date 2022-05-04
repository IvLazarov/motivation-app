import React from "react";
import {Link} from 'react-router-dom';
import Popup from "./Popup";
import { useState } from "react";
import ActionList from "./ActionList";
import ActionCounter from "./ActionCounter";

const TakingAction = () => {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [goalText, setGoalText] = useState('');
    const [goalItems, setGoalItems] = useState([]);
    const[count, setCount] = useState(0);

    const handleChange=(e)=>{
        setGoalText(e.target.value);
    }

    const goalHandler = (e)=>{
        e.preventDefault();
        setGoalItems([
            ...goalItems, {text:goalText, completed:false, id:Math.random() *100}
        ]);
        setGoalText('');
    }

    
    
   
    return (
        <div className="part-two">
            <div className="goal-style">
                <button className="popup-str" onClick={() => setButtonPopup(true)} >set a goal</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h5>A small change today will make you change your way!</h5>
                <form>
                <input type="text" onChange={handleChange} value={goalText} placeholder="e.g. clean my room, do 10 push ups..." />
                <button className="gl-btn" type="submit" onClick={goalHandler} >set goal</button>
                </form>
            </Popup>    
            <ActionList setCount={setCount} setGoalItems={setGoalItems} goalItems={goalItems}/>
            </div>
            <Link to="/">The right words can inspire action.</Link>
            <ActionCounter count={count} />
        </div>
    )
}

export default TakingAction;


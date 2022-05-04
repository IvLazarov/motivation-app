import React, {useState} from "react";
import { Link } from "react-router-dom";


const Quote = () => {
    const [quoteText, setQuoteText]=useState('')
    const [actualQuote, setActualQuote]=useState([])
    const handleChange=(e) =>{
        setQuoteText(e.target.value)
        
    }

    let quoteSearch =() =>{
        
        fetch(`https://api.quotable.io/search/quotes?query=${quoteText}`)
        .then(response => response.json())
        .then(data => setActualQuote(data.results))
    }
    

    return(
       
        <div className='home-hld'>
        <Link to="/actions">Reading quotes is good. Taking action is better.</Link>
        <h2>
        Like grains of sand in an hourglass, we sift from day to day
        and neglect to talk about our feelings. So, tell me, how are you feeling today?
        </h2>
        <input type="text" onChange={handleChange} value={quoteText}  placeholder="e.g. sad, lonely, angry..." />
        <button type="submit" onClick={quoteSearch}>motivate me</button>
        {actualQuote.map(quote => {
            return <div id="quote-stl" key={quote.id}>{quote.content}</div>
        })}
        
        </div>
        
        
    )
}

export default Quote;




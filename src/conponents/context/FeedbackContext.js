import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/feedback')
        .then (res => res.json())
        .then (data => setFeedback(data))
    },[]); 

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure to delete?')){
            setFeedback(feedback.filter((item)=>item.id !==id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log (newFeedback)
        setFeedback([newFeedback, ...feedback])
      
      }



    return <FeedbackContext.Provider value = {{feedback, deleteFeedback, addFeedback}}>
                {children}
            </FeedbackContext.Provider>

}


export default FeedbackContext;
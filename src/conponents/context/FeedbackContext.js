import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState (true)


  // useEffect(() => {
  //   fetch("http://localhost:5000/feedback")
  //     .then((res) => res.json())
  //     .then((data) => setFeedback(data));
  // }, []);

  // Alternative method/ Better method
  useEffect(() => {
    fetchFeedback ()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }


  // Feedback update functionality start
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  // Feedback update functionality end

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };




  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   console.log(newFeedback);
  //   setFeedback([newFeedback, ...feedback]);
  // };

  const addFeedback = async (newFeedback) => {
    const res = await fetch('/feedback',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
        body: JSON.stringify(newFeedback)
      })
      const data = await res.json()
  
      setFeedback([data, ...feedback]);
    
  }






  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

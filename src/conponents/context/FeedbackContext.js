import React, { createContext, useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

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
    const response = await fetch(`/feedback?_sort=id&_order=desc`) // http://localhost:5000 is writen in package.json as proxy
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }


  // Feedback update functionality start

  // const updateFeedback = (id, updItem) => {
  //   setFeedback(
  //     feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)) // JE ID PATHANO HOBE OITA BADE SOBGULO BUJHANO HOICHE ...ITEM
  //   );
  // };

  const updateFeedback = async (id, updItem) => {
    
    const res = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify (updItem)
    })
    const data = await res.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item)) // JE ID PATHANO HOBE OITA BADE SOBGULO BUJHANO HOICHE ...ITEM DIYE
    );
  };




  const [feedbackEdit, setFeedbackEdit] = useState({item: {}, edit: false });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  // Feedback update functionality end

  const deleteFeedback = async (id) => {
    if (window.confirm ("Are you sure to delete?")) {
      await fetch (`/feedback/${id}`, {method: 'DELETE'})
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

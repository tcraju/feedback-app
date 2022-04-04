// import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import './App.css';
import FeedbackForm from './conponents/FeedbackFrom/FeedbackForm';
import FeedbackList from './conponents/FeedbackList/FeedbackList';
import FeedbackStats from './conponents/FeedbackStats/FeedbackStats';
import Header from './conponents/Header/Header';

function App() {

  const [feedback, setFeedback] = useState([]);
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



  return (
    <div className="App container">
        <Header></Header>
        <FeedbackForm handleAdd = {addFeedback}></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}></FeedbackList>
    </div>
  );
}

export default App;

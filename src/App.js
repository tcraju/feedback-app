// import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
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




  return (
    <div className="App container">
        <Header></Header>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}></FeedbackList>
    </div>
  );
}

export default App;

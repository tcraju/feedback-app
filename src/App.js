import React from 'react';
import "./App.css";
import FeedbackForm from "./conponents/FeedbackFrom/FeedbackForm";
import FeedbackList from "./conponents/FeedbackList/FeedbackList";
import FeedbackStats from "./conponents/FeedbackStats/FeedbackStats";
import Header from "./conponents/Header/Header";
import { FeedbackProvider } from "./conponents/context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <div className="App container">
        <Header></Header>
        <FeedbackForm></FeedbackForm>
        <FeedbackStats></FeedbackStats>
        <FeedbackList></FeedbackList>
      </div>
    </FeedbackProvider>
  );
}

export default App;

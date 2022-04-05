import React, { useContext } from 'react';
import {FaTimes, FaEdit} from 'react-icons/fa';
import FeedbackContext from '../../context/FeedbackContext';
import Card from '../../Shared/Card';
const FeedbackItem = ({item}) => {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    
    // console.log(item)
    return (
        // <div className='card'>
        //     <div className='num-display'>{item.rating}</div>
        //     <button className='close' onClick={()=>handleDelete(item.id)}>
        //         <FaTimes color='purple'></FaTimes>
        //     </button>
        //     <div className='text-display'>{item.text}</div>
            
        // </div>
        <Card>
            <>
            <div className='num-display'>{item.rating}</div>
            <button className='close' onClick={()=>deleteFeedback(item.id)}>
            <FaTimes color='purple'></FaTimes>
            </button>
            <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit color='purple'/>
            </button>
            <div className='text-display'>{item.text}</div>
            </>  
        </Card>
    ); 
}; 

export default FeedbackItem;
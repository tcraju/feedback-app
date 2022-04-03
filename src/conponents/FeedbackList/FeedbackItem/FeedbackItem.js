import React from 'react';
import {FaTimes} from 'react-icons/fa';
import Card from '../../Shared/Card';
const FeedbackItem = ({item, handleDelete}) => {

    
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
            <button className='close' onClick={()=>handleDelete(item.id)}>
            <FaTimes color='purple'></FaTimes>
            </button>
            <div className='text-display'>{item.text}</div>
            </>  
        </Card>
    ); 
}; 

export default FeedbackItem;
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from '../Shared/Spinner';
import FeedbackItem from './FeedbackItem/FeedbackItem';



const FeedbackList = () => {

    const {feedback, isLoading} = useContext(FeedbackContext)

    if (!isLoading && (!feedback || feedback.length === 0)){
        return <p>No Feedback Yet</p>
    }


    return isLoading? (<Spinner></Spinner>) : (
        <div className='feedback-list'>
            <AnimatePresence>

            {feedback.map((item) => (
               
               <motion.div 
               key={item.id}
               initial={{opacity: 0}}
               animate={{opacity: 1}}
               exit={{opacity:0}}
               >

                <FeedbackItem key={item.id} item={item}></FeedbackItem>
                
                </motion.div>
           ) )}
            </AnimatePresence>

        </div>

    );

};

export default FeedbackList;
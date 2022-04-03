import FeedbackItem from './FeedbackItem/FeedbackItem';


const FeedbackList = ({feedback, handleDelete}) => {


    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}></FeedbackItem>
            ) )}

        </div>

    );
};

export default FeedbackList;
import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
    return (
        <ul className={css.feedbackList}>
            <li className={css.feedbackListItem}>Good: {feedback.good}</li>
            <li className={css.feedbackListItem}>Neutral: {feedback.neutral}</li>
            <li className={css.feedbackListItem}>Bad: {feedback.bad}</li>
            <li className={css.feedbackListItem}>Total: {totalFeedback}</li>
            <li className={css.feedbackListItem}>
                Positive Feedback: {positiveFeedbackPercentage}%
            </li>
        </ul>
    );
};

export default Feedback;

import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
    const initialFeedback = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem("feedback");
        return savedFeedback ? JSON.parse(savedFeedback) : initialFeedback;
    });

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = (feedbackType) => {
        setFeedback((prev) => ({
            ...prev,
            [feedbackType]: prev[feedbackType] + 1,
        }));
    };

    const resetFeedback = () => {
        setFeedback(initialFeedback);
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const positiveFeedbackPercentage = totalFeedback
        ? Math.round((feedback.good / totalFeedback) * 100)
        : 0;

    return (
        <div className="App">
            <Description />
            <Options
                handleLogOptions={updateFeedback}
                handleLogReset={resetFeedback}
                totalFeedback={totalFeedback}
            />

            {totalFeedback > 0 ? (
                <Feedback
                    feedback={feedback}
                    totalFeedback={totalFeedback}
                    positiveFeedbackPercentage={positiveFeedbackPercentage}
                />
            ) : (
                <Notification message="No feedback given yet." />
            )}
        </div>
    );
};

export default App;
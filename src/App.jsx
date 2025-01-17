// import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

// const initialFeedback = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
// };

function App() {
    return (
        <div className="App">
            <Description />
            <Options />
            <Feedback />
        </div>
    );
}

export default App;

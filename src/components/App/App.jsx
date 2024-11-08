import { useState, useEffect } from "react";
import css from "./App.module.css";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import Notification from "../Notification/Notification";

const getInitialState = () => {
  const savedState = localStorage.getItem("feedback");
  if (savedState !== null) {
    return JSON.parse(savedState);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export default function App() {
  const [state, setState] = useState(getInitialState);

  const updateFeedback = feedbackType => {
    setState({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(state));
  }, [state]);

  const totalFeedback = state.good + state.neutral + state.bad;
  const positiveFeedback = Math.round((state.good / totalFeedback) * 100);
  return (
    <div className={css.block}>
      <Description
        title={"Sip Happens Café"}
        desc={
          "Please leave your feedback about our service by selecting one of the options below."
        }
      />
      <Options
        onStateUpdate={updateFeedback}
        onStateReset={resetFeedback}
        feedbacks={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          states={state}
          total={totalFeedback}
          positiveFeedback={positiveFeedback + "%"}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Section from "./Section/Section";
import Description from "./Description/Description";
import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateFeedback = (event: React.MouseEvent<HTMLButtonElement>) => {
    let buttonText = null;

    if (event.target instanceof HTMLElement) {
      buttonText = event.target.innerHTML;
    }

    switch (buttonText) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const resetFeedback = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalCount = countTotalFeedback();

    if (totalCount > 0) {
      return Math.floor((good / totalCount) * 100);
    }

    return 0;
  };

  const totalFeedback = countTotalFeedback();

  return (
    <>
      <Description
        title="Sip Happens Café"
        descriptiontext="Please leave your feedback about our service by selecting one of the options below."
      ></Description>
      <Section>
        <Options
          options={["good", "neutral", "bad"]}
          total={totalFeedback}
          onLeaveFeedback={updateFeedback}
          onResetFeedback={resetFeedback}
        />
      </Section>
      <Section>
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}

export default App;

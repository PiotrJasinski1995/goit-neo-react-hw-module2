import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Section from "./Section/Section";
import Description from "./Description/Description";
import { useEffect, useState } from "react";

interface IObjectKeys {
  [key: string]: number;
}

interface IStatistics extends IObjectKeys {
  good: number;
  neutral: number;
  bad: number;
}

function App() {
  const initialState: IStatistics = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [statistics, setStatistics] = useState((): IStatistics => {
    const savedStatisticsValue =
      window.localStorage.getItem("saved-statistics");

    if (savedStatisticsValue !== null) {
      return JSON.parse(savedStatisticsValue);
    }

    return initialState;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-statistics", JSON.stringify(statistics));
  }, [statistics]);

  const updateFeedback = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) {
      return;
    }

    if (typeof event.target.dataset.category !== "string") {
      return;
    }

    const category: string = event.target.dataset.category;

    setStatistics({
      ...statistics,
      [category]: statistics[category] + 1,
    });
  };

  const resetFeedback = () => {
    setStatistics(initialState);
  };

  const countTotalFeedback = () => {
    return statistics.good + statistics.neutral + statistics.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalCount = countTotalFeedback();

    if (totalCount > 0) {
      return Math.floor((statistics.good / totalCount) * 100);
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
          good={statistics.good}
          neutral={statistics.neutral}
          bad={statistics.bad}
          total={totalFeedback}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}

export default App;

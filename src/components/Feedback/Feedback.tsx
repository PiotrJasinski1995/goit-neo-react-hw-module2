import Notification from "../Notification/Notification";

interface IStatistics {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

const Feedback = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}: IStatistics) => {
  return (
    <>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {total}</p>
          </li>
          <li>
            <p>Positive feedback: {positivePercentage}%</p>
          </li>
        </ul>
      )}
    </>
  );
};

export default Feedback;

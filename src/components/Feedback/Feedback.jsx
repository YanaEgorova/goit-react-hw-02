import css from "./Feedback.module.css";
// import clsx from "clsx";
// import { AiFillAccountBook } from "react-icons/ai";

// console.log(clsx);

export default function Feedback({
  states: { good, neutral, bad },
  total,
  positiveFeedback,
}) {
  return (
    <ul className={css.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positiveFeedback}</li>
    </ul>
  );
}

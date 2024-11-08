import css from "./Options.module.css";

export default function Options({ onStateUpdate, onStateReset, feedbacks }) {
  console.log(feedbacks);
  return (
    <ul className={css.list}>
      <li>
        <button className={css.btn} onClick={() => onStateUpdate("good")}>
          Good
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => onStateUpdate("neutral")}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => onStateUpdate("bad")}>
          Bad
        </button>
      </li>
      {feedbacks > 0 && (
        <li>
          <button className={css.btn} onClick={onStateReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}

// TimerSection.jsx
import styles from "./TimerSection.module.css";

function TimerSection({ displayTimer, onReset }) {
  return (
    <div className={styles.timerBox}>
      <button
        type="button"
        className={styles.resetButton}
        onClick={onReset} // just call the parent reset
      >
        Reset
      </button>

      <h2 className={styles.timer}>{displayTimer}</h2>
    </div>
  );
}

export default TimerSection;

import styles from "./TimerSection.module.css";
import handleOnClick from "./TimerSection.logic";

function TimerSection({
  timerCountDown,
  setTimerCountDown,
  setTimer,
  onReset,
  timer,
  displayTimer,
}) {
  return (
    <>
      <div className={styles.timerBox}>
        <button
          type="button"
          className={styles.resetButton}
          onClick={() => {
            handleOnClick(setTimer, setTimerCountDown);
            clearInterval(intervalRef.current);
          }}
        >
          Reset
        </button>
        <h2 className={styles.timer}>{displayTimer}</h2>
      </div>
    </>
  );
}

export default TimerSection;

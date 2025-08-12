import styles from "./TimerSection.module.css";
import handleOnClick from "./TimerSection.logic";

function TimerSection({ timerCountDown, setTimer, onReset, timer }) {
  return (
    <>
      <div className={styles.timerBox}>
        <button
          type="button"
          className={styles.resetButton}
          onClick={() => {
            handleOnClick(setTimer);
            clearInterval(intervalRef.current);
          }}
        >
          Reset
        </button>
        <h2 className={styles.timer}>{timer !== "" ? timer : "0:00"}</h2>
      </div>
    </>
  );
}

export default TimerSection;

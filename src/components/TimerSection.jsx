import styles from "./TimerSection.module.css";
import handleOnClick from "./TimerSection.logic";

function TimerSection({ value, setTimer }) {
  return (
    <>
      <div className={styles.timerBox}>
        <button
          type="button"
          className={styles.resetButton}
          onClick={() => {
            handleOnClick(setTimer);
          }}
        >
          Reset
        </button>
        <h2 className={styles.timer}>
          {value === "" || value === "not set" ? "0:00" : `${value}:00`}
        </h2>
      </div>
    </>
  );
}

export default TimerSection;

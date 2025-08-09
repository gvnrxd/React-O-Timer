import styles from "./TimerButtons.module.css";
import handleOnClick from "./TimerButtons.logic";

function TimerButtons({ setTimer }) {
  return (
    <>
      <div className={styles.timerButtonBox}>
        <button
          onClick={() => handleOnClick({ duration: 1, setTimer })}
          className={styles.timerButton}
        >
          1 MIN
        </button>
        <button
          onClick={() => handleOnClick({ duration: 5, setTimer })}
          className={styles.timerButton}
        >
          5 MIN
        </button>
        <button
          onClick={() => handleOnClick({ duration: 10, setTimer })}
          className={styles.timerButton}
        >
          10 MIN
        </button>
      </div>
    </>
  );
}

export default TimerButtons;

import styles from "./TimerButtons.module.css";

function TimerButtons() {
  return (
    <>
      <div className={styles.timerButtonBox}>
        <button className={styles.timerButton}>1 MIN</button>
        <button className={styles.timerButton}>5 MIN</button>
        <button className={styles.timerButton}>10 MIN</button>
      </div>
    </>
  );
}

export default TimerButtons;

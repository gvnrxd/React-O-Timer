import styles from "./TimerSection.module.css";

function TimerSection() {
  return (
    <>
      <div className={styles.timerBox}>
        <button className={styles.resetButton}>Reset</button>
        <h2 className={styles.timer}>0:00</h2>
      </div>
    </>
  );
}

export default TimerSection;

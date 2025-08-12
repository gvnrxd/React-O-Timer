import styles from "./CustomInput.module.css";
import handleOnChange from "./CustomInput.logic";
function CustomInput({ timer, setTimer, handleCountDown }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCountDown();
      }}
      className={styles.inputContainer}
    >
      <input
        className={styles.inputBox}
        placeholder="Set Timer (in minutes)"
        min="1"
        value={timer}
        onChange={(e) => handleOnChange(e, setTimer)}
        max="1400"
        //onChange={(e) => setTimer(e.target.value)}
      />
      <button
        className={styles.inputButton}
        type="submit"
        //onClick={handleCountDown}
      >
        Start Timer
      </button>
    </form>
  );
}
export default CustomInput;

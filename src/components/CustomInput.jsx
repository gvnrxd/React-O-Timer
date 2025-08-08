import styles from "./CustomInput.module.css";

function CustomInput() {
  return (
    <>
      <div>
        <form className={styles.inputContainer}>
          <input
            className={styles.inputBox}
            placeholder="Set Timer (minutes)"
          ></input>
          <button className={styles.inputButton} type="submit">
            Set Timer
          </button>
        </form>
      </div>
    </>
  );
}

export default CustomInput;

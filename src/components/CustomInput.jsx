import styles from "./CustomInput.module.css";

function CustomInput() {
  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputBox}
          placeholder="Set Timer (minutes)"
        ></input>
      </div>
    </>
  );
}

export default CustomInput;

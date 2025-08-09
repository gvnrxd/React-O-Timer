import styles from "./CustomInput.module.css";
import handleOnChange from "./CustomInput.logic";
function CustomInput({ value, onInputChange }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={styles.inputContainer}
    >
      <input
        value={value ?? ""} // controlled by parent
        onChange={(e) => handleOnChange(e, onInputChange)} // updates same source
        className={styles.inputBox}
        placeholder="Set Timer (in minutes)"
      />
      <button className={styles.inputButton} type="submit">
        Start Timer
      </button>
    </form>
  );
}
export default CustomInput;

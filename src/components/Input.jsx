import styles from "./Input.module.css";

const Input = ({ handleChange, color, title, name, value }) => {
  return (
    <label htmlFor="" className={styles["sidebar-label-container"]}>
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span
        className={styles.checkmark}
        style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default Input;

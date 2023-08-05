import styles from "./Button.module.css";

const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className={styles.btns}>
      {title}
    </button>
  );
};

export default Buttons;

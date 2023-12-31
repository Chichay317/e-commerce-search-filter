import Input from "../../components/Input";
import styles from "./Colors.module.css";

function Colors({ handleChange }) {
  return (
    <div>
      <h2 className={`${styles["color-title"]} ${styles["sidebar-title"]}`}>
        Colors
      </h2>

      <label className={styles["sidebar-label-container"]}>
        <input type="radio" onChange={handleChange} value="" name="test2" />
        <span className={`${styles.checkmark} ${styles.all}`}></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />

      <label className={styles["sidebar-label-container"]}>
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="test1"
        />
        <span
          className={styles.checkmark}
          style={{ backgroundColor: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
}

export default Colors;

import styles from "./Sidebar.module.css";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className={styles.sidebar}>
        <div className={styles["logo-container"]}>
          <h1>🛒</h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;

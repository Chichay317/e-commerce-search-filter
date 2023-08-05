import styles from "./Recommended.module.css";
import Buttons from "../components/Button";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className={styles["recommended-title"]}>Recommended</h2>
        <div className={styles["recommended-flex"]}>
          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
          <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;

import styles from "./Nav.module.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Navigation = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className={styles["nav-container"]}>
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          className={styles["search-input"]}
          placeholder="Enter your search item..."
        />
      </div>

      <div className={styles["profile-container"]}>
        <a href="#">
          <FiHeart className={styles["nav-icons"]} />
        </a>

        <a href="#">
          <AiOutlineShoppingCart className={styles["nav-icons"]} />
        </a>
        <a href="#">
          <AiOutlineUserAdd className={styles["nav-icons"]} />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;

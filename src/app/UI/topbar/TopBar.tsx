import style from "./TopBar.module.scss";
import { FaSearch, FaBell, FaShoppingCart, FaUserAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className={style.container}>
      <div className={style.search_container}>
        <input type="text" placeholder="What do you want to play?" />
        <FaSearch className={style.search_icon} />
      </div>
      <div className={style.cart_bell_container}>
        <div className={style.bell_cart}>
          <FaBell />
        </div>
        <div className={style.bell_cart}>
          <FaShoppingCart />
        </div>
        <div className={style.explore }>
          <p>Explore Premium</p>
        </div>
        <div className={style.bell_cart}>
          <FaUserAlt/>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Header.css";
import logo from "./e-logo.png";
import searchIcon from "./search-icon.png";

function Header() {



  const [{ basket}, dispatch] = useStateValue();

  return (
    <div className="wrapper">
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt={"logo"} />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <img src={searchIcon} className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to='/login'>
          <div  className="header__option">
            <span className="header__optionLineOne"><img
                    style={{ width: 20, color: "#fff" }}
                    src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                  /></span>
            <span className="header__optionLineTwo">Hello, User</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineTwo"><img
                  style={{ width: 20, color: "#fff" }}
                  src="https://cdn-icons-png.flaticon.com/512/263/263417.png"
                /></span>
            <span className="header__optionLineTwo">My favourites</span>
          </div>
        </Link>
        


        <Link to="/checkout">

        <div className="header__optionBasket">
            <span className="header__optionLineOne">
              <img
                style={{ width: 20, color: "#fff", height: "30px" }}
                src="https://cdn-icons-png.flaticon.com/512/3649/3649552.png"
              />
            </span>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Header;

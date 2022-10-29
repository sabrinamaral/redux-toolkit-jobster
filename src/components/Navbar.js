import { useState } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "../components/Logo";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => console.log("toggle sidebar")}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => console.log("toggle logout dropdown")}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => console.log("toggle logout logout user")}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

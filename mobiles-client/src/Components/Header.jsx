import { NavLink } from "react-router-dom";

const style = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  listStyle: "none",
};

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul style={style}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/mobiles">Mobiles</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
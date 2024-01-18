import { NavLink } from "react-router-dom";

const style = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  listStyle: "none",
  margin: "0",
  padding: "0",
};

const Header = () => {
  return (
    <header>
      <div style={{width: "1100px", margin: "0 auto"}}>
        <nav>
          <ul style={style}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/engineers">Engineers</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import SearchBar from "../searcBar";

import "./index.css";

const Navbar = ({ setProductSection }) => {
  return (
    <nav>
      <ul className="Nav__List">
        <li onClick={() => setProductSection("")} className="Nav__List--Item">
          Home
        </li>

        <li>
          <SearchBar setProductSection={setProductSection} />
        </li>

        <li
          onClick={() => setProductSection("contacts")}
          className="Nav__List--Item">
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

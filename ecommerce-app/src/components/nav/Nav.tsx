import logo from "../../images/logo.svg";

export const Nav = () => {
  return (
    <div id="nav">
      <img src={logo} />
      <div id="links">
        <button>Collections</button>
        <button>Men</button>
        <button>Women</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

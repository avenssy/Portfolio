import mainLogo from "../../public/AS Logo.png";

function Header() {
    return ( 
      <div className="header-style">
        <div className="header-button-style gabarito-font">
          Home
        </div>
        <div className="header-button-style gabarito-font">
          About
        </div>
        <img src={mainLogo} className="header-main-logo"/>
        <div className="header-button-style gabarito-font">
          Projects
        </div>
        <div className="header-button-style gabarito-font">
          Contact Me
        </div>
      </div>
    );
  }
  
  export default Header;
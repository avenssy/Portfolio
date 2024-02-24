import mainLogo from "/AS Logo.png";

function Header() {
    return ( 
      <div className="header-style">
        <a href="/">
          <div className="header-button-style gabarito-font">
            Home
          </div>
        </a>
        <div className="header-button-style gabarito-font">
          About
        </div>
        <a href="/">
          <img src={mainLogo} className="header-main-logo"/>
        </a>
        <div className="header-button-style gabarito-font">
          Projects
        </div>
        <a href="/contact-me">
          <div className="header-button-style gabarito-font">
            Contact Me
          </div>
        </a>
      </div>
    );
  }
  
  export default Header;
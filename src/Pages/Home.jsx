import typingImage from "/programming-typing.gif";
import SAPLogo from "/SAP logo.jpg";
import linkedInLogo from "/Linkedin Logo.jpg";
import gitHubLogo from "/GitHub Logo.png";

const Home = () => {
    return (
        <div className="home-main-div">
          <div className="home-words">
            <div className="big-font autor-one-font underline">I'm Aven Sy.</div>
            <div className="cursive big-font underline">Full-Stack Engineer</div>
              <div className="big-font center-vertical underline gabarito-font">
                <img src={SAPLogo} className="SAP-logo"/> Developer
              </div>
            <div className="contact-logos-div center-vertical">
              <a href="https://www.linkedin.com/in/avenssy/"><img className="linkedin-logo zoom-image" src={linkedInLogo}/></a>
              <a href="https://github.com/avenssy"><img className="github-logo zoom-image" src={gitHubLogo}/></a>
            </div>
          </div>
          <div className="home-typing-picture-div">
            <img className="home-typing-picture" src={typingImage}/>
          </div>
        </div>
    )
}

export default Home
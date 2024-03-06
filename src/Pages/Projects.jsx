import dinoRun from "/dino_run_picture.JPG?url"

const Projects = () => {
    return (
      <div className="project-main-div">
        <div className="projects-word">
          ~ Projects ~    
        </div>

        <div className="projects-tiles">
          <a className="dino-run-div"href="https://avenssy.github.io/Dino-Run/">
            <img src={dinoRun} className="tile-image" id="dino-run-id"/>     
            <label className="tile-label" for="dino-run-id">Dino Run Game</label> 
          </a>
        </div>
      </div>
    )
}

export default Projects
import { projectImgs } from "../assets"
import { Arrows, Container, Heading, ProjectInfo } from ".."

const Projects = () => {
    return (
      <Container>
        <Heading title='Our' sub_title='Projects' />
        <hr className="border-grey-200 my-8" />
        <div className="flex flex-wrap gap-6 justify-center">
          {projectImgs.map((project, index) => (
            <ProjectInfo key={index} index={index} img={project} />
          ))}
        </div>
        <Arrows />
      </Container>
    )
  }
  
  export default Projects
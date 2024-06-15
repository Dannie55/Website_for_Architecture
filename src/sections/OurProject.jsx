
import { Button, Container} from ".."
import { project_img_1, project_img_2, project_img_3, project_img_4, project_img_5 } from '../assets'

const OurProject = () => {
  return (
    <Container>
        <h1 className="title">Our Projects</h1>
        <div className="lg:grid gap-y-5 max-lg:space-y-4 mt-2">
          <div className="lg:flex max-lg:space-y-4 gap-4 *:w-full">
            <div className="bg-cover p-8 bg-black bg-blend-overlay" style={{backgroundImage: `url(${project_img_1})`}}>
              <h1 className='text-[40px] lg:text-[48px] leading-[3rem] pb-2 font-bold text-white'>Sample <br /> Project</h1>
              <div className=""><Button icon="white" to='./project' className='text-white hover:border-b border-white' text='View More' /></div>
            </div>
            <img src={project_img_2} alt="project_img_2" />
          </div>
          <div className="lg:flex max-lg:space-y-4 gap-4 *:h-[255px] *:w-full overflow-hidden">
            <img src={project_img_3} alt="project_img_3" />
            <img src={project_img_4} alt="project_img_4" />
            <img src={project_img_5} alt="project_img_5" />
          </div>
        </div>
      <div className="text-right mt-7"><Button icon='white' className='btn_dark text-white' to='./projects' text='All Projects' /></div>
    </Container>
  )
}

export default OurProject

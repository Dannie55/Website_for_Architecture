import { Arrows, Button, Container, Heading } from ".."
import { hero_img} from '../assets'

const Hero = () => {
  return (
    <Container className="lg:flex items-end max-lg:gap-8 max-lg:px-0">
      <div className="lg:w-1/3 max-lg:hidden pb-52">
        <Heading title='PROJECT' sub_title='Lorem' />
        <div className="my-8 flex items-center">
          <Arrows />
          <hr className="border w-full max-lg:hidden ml-6 border-grey-300" />
        </div>
        {/* <div className="flex">
          <h3>0<br />1</h3>
          <hr className="border w-9 ml-6 translate-y-6 border-grey-300" />
          <h3>02</h3>
        </div> */}
      </div>
      <div className={`lg:w-2/3 bg-cover relative bg-black max-lg:bg-blend-overlay bg-bottom py-64 lg:py-96`} style={{backgroundImage: `url(${hero_img})`}}>        
        <div className="text-center max-lg:text-white *:title leading-10 lg:hidden">
          <h1>PROJECT</h1>
          <h1 className="font-bold">Lorum</h1>
        </div>
        <div className=""><Button className='absolute left-[35%] sm:left-[40%] max-lg:mt-5 lg:left-0 lg:bottom-0 btn_light' to='./project' text='View Project' /></div>
      </div>
    </Container>
  )
}

export default Hero
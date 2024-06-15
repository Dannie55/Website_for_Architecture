import { Button, Container } from ".."
import { about_img_1, about_img_2, about_img_3 } from "../assets"

const About = () => {
  return (
    <Container className="bg-grey-400">
      <div className='flex max-lg:flex-col-reverse justify-between gap-10 items-center py-8'>
        <div className="lg:w-3/5 flex items-center gap-6">
          <div className="flex flex-col gap-4">
            <img src={about_img_1} alt="Skyscrapper" />
            <img src={about_img_2} alt="Skyscrapper" />
          </div>
          <div>
            <img src={about_img_3} alt="Skyscrapper" />
          </div>
        </div>
        <div className="lg:w-2/5">
          <div className="title">About</div>
          <p className="pb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div><Button className='btn_light' to='./gallery' text='Read More' /></div>
        </div>
      </div>
    </Container>
  )
}

export default About
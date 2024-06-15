import { Button, Container, Heading } from ".."
import { map } from "../assets"

const Contact = () => {
  return (
    <Container>
      <div className="flex lg:gap-24 gap-10 max-lg:flex-col">
        <div className="grid gap-6">
          <Heading title='Contact' sub_title='Information' />
          <div className="grid gap-5">
            <h3>Company Name <br /> <span className="font-normal">1234 Sample Street Austin Texas 76401</span></h3>
            <h3>512.333.2222</h3>
            <p>sampleemail@gmail.com</p>
          </div>
          <div><Button text='Contact Us' className='btn_dark' icon="white" /></div>
        </div>
        <div>
          <img src={map} alt="Map" />
        </div>
      </div>

    </Container>
  )
}

export default Contact
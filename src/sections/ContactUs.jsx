import { Container } from '..';
import { arrow_right_white, contact_img } from '../assets';

function ContactUs() {
	return (
		<Container>
      <h1 className="title">Contact Us</h1>
			<div className="flex mt-2 max-lg:flex-col gap-7 justify-between items-start">
				<div className="lg:w-2/5 w-full">
					<form>
						<div className="space-y-2">
              <div>
                <input placeholder='Name' required type="text" name="name" />
              </div>
              <div>
                <input placeholder='Phone number' required type="number" name="number" />
              </div>
              <div>
                <input placeholder='E-mail' required type="email" name="email" />
              </div>
              <div>
                <input placeholder='Interested In' required type="text" name="interest" />
              </div>
              <div>
                <textarea placeholder='message' name="message" rows={5}></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn_dark mt-12">Send Email <img src={arrow_right_white} alt="Right arrow icon" /></button>
					</form>
				</div>
				<div className="lg:w-3/5 max-lg:hidden">
					<img className='shadow-md' src={contact_img} alt="An image of a man on a call" />
				</div>
			</div>			
		</Container>
	);
}

export default ContactUs;
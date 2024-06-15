import { Button } from '..';

const ProjectInfo = ({ img, index }) => {
	return (
		<div className="bg-grey-400 flex max-lg:flex-col-reverse">
			<div className="lg:w-3/5 max-w-6xl"><img height={435} src={img} alt={img} /></div>
			<div className="lg:w-2/5 py-10 gap-5 grid items-center px-7">
				<h1>Sample Project {index !== 0 && index + 1}</h1>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				<div><Button text='View More' className='btn_light' /></div>
			</div>
		</div>
	);
};

export default ProjectInfo;
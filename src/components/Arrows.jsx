import {arrow_left, arrow_right } from '../assets'

const Arrows = () => {
  return (
    <div className="inline-flex my-14 gap-2 *:px-4 *:py-6 *:border-grey-300 *:border *:shadow-sm">
      <img className="bg-white" src={arrow_left} alt='arrow_left' />
      <img className="bg-grey-300" src={arrow_right} alt='arrow_right' />
    </div>
  )
}

export default Arrows

import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='p-6'>
      <h1 className='pb-3'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to='/' className='underline text-blue-600 hover:text-blue-700 font-medium text-base'>Click to go back to Homepage</Link>
    </div>
  )
}

export default NotFound
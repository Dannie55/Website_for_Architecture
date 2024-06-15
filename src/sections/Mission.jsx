import { Container } from ".."

const Mission = () => {
  return (
    <Container>
        <h1 className="title">Main Focus/Mission Statement</h1>
        <div className="flex max-md:flex-col gap-4 py-5 justify-between *:items-center">
          <div className="flex gap-8">
            <h1 className='lg:text-9xl text-6xl text-grey-200 font-black'>1</h1>
            <p className='lg:max-w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
          </div>
          <div className="flex gap-8">
            <h1 className='lg:text-9xl text-6xl text-grey-200 font-black'>2</h1>
            <p className='lg:max-w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
          </div>
        </div>
    </Container>
  )
}

export default Mission
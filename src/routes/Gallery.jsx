import { Arrows, Container, Heading } from ".."
import { galleryImgs } from "../assets"

const Gallery = () => {
    return (
      <Container>
        <Heading title='Photo' sub_title='Gallery' />
        <hr className="border-grey-200 my-8" />
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-[210px] h-[260px] bg-grey-500"></div>
          {galleryImgs.map((image, index) => (
            <img key={index} width={210} height={260} src={image} alt={image.split('/').pop().replace('.png', '')}/>
          ))}
        </div>
        <Arrows />
      </Container>
    )
  }
  
  export default Gallery
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import slideImage from '../assets/images/image-home-1.png'
import slideImage1 from '../assets/images/image-home.png'
import slideImage2 from '../assets/images/slide3.png'
import slideImage3 from '../assets/images/slide4.png'
import slideImage4 from '../assets/images/slide5.png'

const Default: React.FC = () => {
  const images = [
    {
      original: slideImage,
      thumbnail: slideImage
    },
    {
      original: slideImage1,
      thumbnail: slideImage1
    },
    {
      original: slideImage2,
      thumbnail: slideImage2
    },
    {
      original: slideImage3,
      thumbnail: slideImage3
    },
    {
      original: slideImage4,
      thumbnail: slideImage4
    }
  ]
  return (
    <div className='max-w-[1200px]'>
      <ImageGallery items={images} />
    </div>
  )
}

export default Default

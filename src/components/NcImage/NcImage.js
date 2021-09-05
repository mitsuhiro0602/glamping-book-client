import React from 'react'
import Image from 'react-image-resizer';

import styled from 'styled-components';
import tw from 'twin.macro';

const ImageContainer = styled.div`
  ${tw`
    relative
    overflow-hidden
    w-full
  `}
`
const NcImage = (
  _id,
  image
) => {

  return (
    <ImageContainer>
      <Image
        src={`${process.env.REACT_APP_API}/glamping/image/${_id}`}
        alt="default hotel image"
        className="card-image img img-fluid"
        height={ 400 }
        width={ 400 }
      />
    </ImageContainer>
  )
}

export default NcImage

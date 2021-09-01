import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const ClearDataButton = ({ onClick }) => {
  const SpanContainer = styled.span`
    ${tw`
      absolute
      z-10
      w-5
      h-5
      lg:w-6
      lg:h-6
      text-sm
      bg-neutral-200
      rounded-full
      flex
      items-center
      justify-center
      right-1
      lg:right-3
      top-1/2
      transform -translate-y-1/2
    `};
  `;
  
  return (
    <SpanContainer>
      <i className="las la-times"></i>
    </SpanContainer>
  )
}

export default ClearDataButton

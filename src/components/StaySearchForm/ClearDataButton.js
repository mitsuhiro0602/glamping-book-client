import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { AiFillCloseCircle } from 'react-icons/ai'


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
      dark:bg-neutral-800 
      rounded-full 
      flex 
      items-center 
      justify-center 
      right-1 
      lg:right-3 
      top-1/2 
      transform 
      -translate-y-1/2
    `};
  `;
  
  return (
    <SpanContainer
      onClick={() => onClick && onClick()}
    >
      <AiFillCloseCircle />
    </SpanContainer>
  )
}

export default ClearDataButton

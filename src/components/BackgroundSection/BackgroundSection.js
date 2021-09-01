import React from 'react';
import styled from "styled-components";
import tw from 'twin.macro';

const BackgroundSection = () => {
  const BackGoroundContainer = styled.div`
    ${tw`
      absolute
      bg-neutral-100
      inset-y-0
      w-screen
      xl:max-w-[1340px]
      2xl:max-w-screen-2xl
      left-1/2
      transform -translate-x-1/2
      xl:rounded-[40px] z-0
    `};
  `;
  return (
    <BackGoroundContainer />
  )
}

export default BackgroundSection

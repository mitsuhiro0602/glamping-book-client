import React from 'react'
import styled from 'styled-components'
import imagePng from '../../images/hero-right-2.png';
import StaySearchForm from '../StaySearchForm/StaySearchForm';
import tw from 'twin.macro';

const SectionHeroArchivePage = () => {

  const SectionContainer = styled.div`
    ${tw`
      pt-10
      pb-24
      lg:pb-32
      lg:pt-28
    `};
  `;

  const SectionHeroArchiveContainer = styled.div`
    ${tw`
      flex
      flex-col
      relative
    `};
  `;

  const InnerContainer = styled.div`
    ${tw`
      flex
      flex-col
      lg:flex-row
      lg:items-center
    `};
  `;

  const TitleContainer = styled.div`
    ${tw`
      flex-shrink-0
      lg:w-1/2
      flex
      flex-col
      items-center
      space-y-6
      lg:space-y-10
      pb-14
      lg:pb-64
      xl:pb-80
      xl:pr-14
      xl:mr-0
    `};
  `;

  const Title = styled.h2`
  ${tw`
    font-medium
    text-2xl
    md:text-3xl
    xl:text-4xl
    leading-5
  `};
  `;

  const FlexGlow = styled.div`
    ${tw`
      flex-grow
      bg-rose-300
    `};
  `;

  const SearchContainer = styled.div`
    ${tw`
      flow-root
      w-full
    `};
  `;

  const SearchInner = styled.div`
    ${tw`
      z-10
      lg:-mt-40
      xl:-mt-56
      w-full
    `};
  `;

  return (
    <SectionContainer>
      <SectionHeroArchiveContainer>
        <InnerContainer>
          <TitleContainer>
            <Title>グランピング施設一覧</Title>
          </TitleContainer>
          <FlexGlow>
            <img className="w-full" src={imagePng} alt="hero" />
          </FlexGlow>
        </InnerContainer>
        <SearchContainer>
          <SearchInner>
            <StaySearchForm />
          </SearchInner>
        </SearchContainer>
      </SectionHeroArchiveContainer>
    </SectionContainer>
  )
}

export default SectionHeroArchivePage

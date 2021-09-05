import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import StayCard from '../components/StayCard/StayCard';
import {allGlampings} from '../actions/glamping'

const SectionGridFilterCard = () => {

  const [glampings, setGlampings] = useState([])
  useEffect(() => {
    loadAllglampings()
  }, [])

  const loadAllglampings = async() => {
    let res = await allGlampings()
    setGlampings(res.data);
  };

  const SectionContainer = styled.div`
    ${tw`
      pb-24
      lg:pb-32
    `};
  `;

  const FilterContainer = styled.div`
    ${tw`
      mb-8
      lg:mb-11
    `};
  `;

  const GridSectionContainer = styled.div`
    ${tw`
      grid
      grid-cols-1
      gap-2
      md:gap-8
      sm:grid-cols-1
      md:grid-cols-1
      xl:grid-cols-2
    `};
  `;
  return (
    <SectionContainer>
      <FilterContainer>
        {/* tabFilters */}
      </FilterContainer>
      <GridSectionContainer>
        {glampings.map((glamping) => (
          <StayCard key={glamping._id} glamping={glamping} />
        ))}
      </GridSectionContainer>
    </SectionContainer>
  )
}

export default SectionGridFilterCard

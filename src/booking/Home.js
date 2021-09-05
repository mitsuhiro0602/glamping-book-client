import { useState, useEffect } from 'react'
import {allGlampings} from '../actions/glamping'
import BgGlassmorphism from '../components/BgGlassmorphism/BgGlassmorphism';
import styled from 'styled-components';
import tw from 'twin.macro';
import SectionHeroArchivePage from '../components/SectionHeroArchivePage/SectionHeroArchivePage';
import SectionGridFilterCard from './SectionGridFilterCard';

const Home = () => {
  const [glampings, setGlampings] = useState([])

  useEffect(() => {
    loadAllglampings()
  }, [])

  const loadAllglampings = async() => {
    let res = await allGlampings()
    setGlampings(res.data);
  };

  // style

  const PageContainer = styled.div`
    ${tw`
      relative
      overflow-hidden
    `};
  `;

  const SectionContainer = styled.div`
    ${tw`
      container
      relative
      overflow-hidden
    `};
  `;

  return (
    <PageContainer>
      <BgGlassmorphism />
      <SectionContainer>
        <SectionHeroArchivePage
          className="pt-10 pb-24 lg:pb-32 lg:pt-28"
        />
        <SectionGridFilterCard glampings={glampings} />
      </SectionContainer>
    </PageContainer>
  )
}

export default Home

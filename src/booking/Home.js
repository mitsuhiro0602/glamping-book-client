import { useState, useEffect } from 'react'
import {allGlampings} from '../actions/glamping'
import BgGlassmorphism from '../components/BgGlassmorphism/BgGlassmorphism';
import SmallCard from '../components/cards/SmallCard'
import Search from '../components/forms/Search';
import styled from 'styled-components';
import tw from 'twin.macro';

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





  // return (
  //   <PageContainer>
  //     <h1 className="text-center">グランピング施設一覧</h1>
  //     <BgGlassmorphism />
  //     <SectionContainer>

  //     </SectionContainer>
  //   </PageContainer>
  // )
  // ここまで
  return (
    <>
      <div className="container-fluid p-5 text-center">
        <h1>グランピング施設一覧</h1>
      </div>
      <div className="col">
        <br />
        <Search />
      </div>
      <div className="container-fluid">
        <br />
        {glampings.map((g) => (
          <SmallCard key={g._id} g={g} />
        ))}
      </div>
    </>
  )
}

export default Home

import { useState, useEffect } from 'react'
import {allGlampings} from '../actions/glamping'
import SmallCard from '../components/cards/SmallCard'
import Search from '../components/forms/Search';

const Home = () => {
  const [glampings, setGlampings] = useState([])

  useEffect(() => {
    loadAllglampings()
  }, [])

  const loadAllglampings = async() => {
    let res = await allGlampings()
    setGlampings(res.data);
  };

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

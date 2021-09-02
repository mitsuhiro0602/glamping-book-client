import {useState, useEffect} from 'react'
import queryString from 'query-string'
import Search from '../components/forms/Search'
import { searchListings } from '../actions/glamping';
import SmallCard from '../components/cards/SmallCard'

const SearchResult = () => {

  const [glampings, setGlampings] = useState([])

  useEffect(() => {
    const {location, date, person} = queryString.parse(window.location.search);
    searchListings({location, date, person}).then(res => {
      setGlampings(res.data)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.search]);
  return (
    <>
      <div className="col">
        <br />
        <Search />
      </div>
      <div className="container">
        <div className="row">
          {
            glampings.map(g =>  <SmallCard key={g._id} g={g} /> )
          }
        </div>
      </div>
    </>
  )
}

export default SearchResult

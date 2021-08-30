import {useState, useEffect} from 'react'
import queryString from 'query-string'
import { Link } from 'react-router-dom';
import Search from '../components/forms/Search'
import { searchListings } from '../actions/glamping';
import SmallCard from '../components/cards/SmallCard'

const SearchResult = () => {
  
  const [searchLocation, setSearchLocation] = useState('')
  const [searchDate, setSearchDate] = useState('')
  const [searchPerson, setSearchPerson] = useState('')
  const [glampings, setGlampings] = useState([])

  useEffect(() => {
    const {location, date, person} = queryString.parse(window.location.search);
    console.table({ location, date, person})
    searchListings({location, date, person}).then(res => {
      console.log('SEARCH RESULTS ===>>', res.data);
      setGlampings(res.data)
    })
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

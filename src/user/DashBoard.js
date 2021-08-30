import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ConnectNav from '../components/ConnectNav'
import DashboardNav from '../components/DashboardNav'
import { userGlampingBookings } from '../actions/glamping'
import { useSelector } from 'react-redux'
import BookingCard from '../components/cards/BookingCard'


const DashBoard = () => {
  const { 
    auth: {token},
  } = useSelector((state) => ({...state}));

  const [booking, setBooking] = useState([]);

  useEffect(() => {
    loadUserBookings()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadUserBookings = async () => {
    const res = await userGlampingBookings(token);
    console.log(res.data);
    setBooking(res.data);
  }
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>予約したグランピング施設一覧</h2>
          </div>
          <div className="col-md-2">
            <Link to="/" className="btn btn-primary">グランピング施設一覧</Link>
          </div>
        </div>
      </div>
      <div className="row">
        {booking.map(b => (
          <BookingCard 
            key={b._id} 
            glamping={b.glamping} 
            session={b.session} 
            orderedBy={b.orderedBy} 
          />
        ))}
      </div>
    </>
  )
}

export default DashBoard

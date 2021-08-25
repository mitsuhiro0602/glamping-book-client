import React from 'react'
import { Link } from 'react-router-dom'
import ConnectNav from '../components/ConnectNav'
import DashboardNav from '../components/DashboardNav'


const DashBoard = () => {
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
    </>
  )
}

export default DashBoard

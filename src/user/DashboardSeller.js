import React from 'react'
import DashboardNav from '../components/DashboardNav'
import ConnectNav from '../components/ConnectNav'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HomeOutlined } from '@ant-design/icons'
import { createConnectAccount } from '../actions/stripe'
import { useState } from 'react'
import { toast } from 'react-toastify'

const DashBoardSeller = () => {
  const { auth } = useSelector(state => ({...state}))
  const [loading, setLoading ] = useState(false);

  const handleClick = async() => {
    setLoading(true)
    try {
      let res = await createConnectAccount(auth.token)
      console.log(res)
      window.location.href = res.data;

    } catch(err) {
      console.log(err);
      toast.error("Stripeとの接続に失敗しました。再施行してください")
      setLoading(false);
    }
  }

  const connected = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10">
          <h2>登録したグランピング施設一覧</h2>
        </div>
        <div className="col-md-2">
          <Link to="/glampings/new" className="btn btn-primary">
            + Add New
          </Link>
        </div>
      </div>
    </div>
  )

  const notConnected = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <div className="p-5 pointer">
            <HomeOutlined className="h1" />
            <h4>グランピング施設の支払いの設定をする</h4>
            <p className="lead">Stripeと提携して銀行口座に送金する</p>
            <button disabled={loading} onClick={handleClick} className="btn btn-primary mb-3">
              {loading ? 'Processing...' : 'Setup Payouts'}
            </button>
            <p className="text-muted"><small>Stripeにリダイレクトする</small></p>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      {
        auth && 
        auth.user && 
        auth.user.stripe_seller && 
        auth.user.stripe_seller.charges_enabled
          ? connected()
          : notConnected()
      }

    </>
  )
}

export default DashBoardSeller

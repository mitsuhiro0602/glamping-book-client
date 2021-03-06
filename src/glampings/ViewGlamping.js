import React, { useEffect, useState } from 'react'
import {read, diffDays, isAlreadyBooked} from '../actions/glamping';
import Image from 'react-image-resizer';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { getSessionId } from '../actions/stripe';
import {loadStripe} from '@stripe/stripe-js';

const ViewGlamping = ({ match, history }) => {

  const [glamping, setGlamping] = useState({})
  const [image, setImage] = useState("")
  const [loading, setLoading ] = useState(false);
  const [alreadyBooked, setAlreadyBooked] = useState(false);

  const { auth } = useSelector((state) => ({...state}))
  useEffect(() => {
    locadSellerGlamping();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(auth && auth.token) {
      isAlreadyBooked(auth.token, match.params.glampingId).then((res) => {
        if(res.data.ok)  setAlreadyBooked(true);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const locadSellerGlamping = async() => {
    let res = await read(match.params.glampingId)
    setGlamping(res.data)
    setImage(`${process.env.REACT_APP_API}/glamping/image/${res.data._id}`)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    if(!auth || !auth.token) {
      history.push('/login');
      return;
    }

    setLoading(true);
    if(!auth) history.push('/login')
    let res = await getSessionId(auth.token, match.params.glampingId)
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY)
    stripe.redirectToCheckout({
      sessionId: res.data.sessionId,
    })
  };
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>{glamping.title}</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <br />
            <Image
              src={image} 
              alt={glamping.title} 
              className="img img-fluid m-2" 
              height={ 250 }
              width={ 400 }
            />
          </div>
          <div className="col-md-6">
            <br />
            <b>{glamping.content}</b>
            <p className="alert alert-info mt-3">{glamping.price}???</p>
            <p className="card-text">
              <span className="float-right text-primary">
                for {diffDays(glamping.from, glamping.to)}{" "}
                {diffDays(glamping.from, glamping.to) <= 1 ? 'day' : 'days'}
              </span>
            </p>
            <p>From <br />{moment(new Date(glamping.from)).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <p>To <br />{moment(new Date(glamping.to)).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <button
              onClick={handleClick} 
              className="btn btn-primary btn-block btn-lg mt-3"
              disabled={loading || alreadyBooked}
            >
              {
                loading 
                ? 'Loading...'
                : alreadyBooked
                ? '???????????????????????????'
                : auth && auth.token 
                ? '????????????' 
                : '??????????????????????????????'
              }
            </button>
            <br />
            <i>Posted by {glamping.postedBy && glamping.postedBy.name}</i>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewGlamping

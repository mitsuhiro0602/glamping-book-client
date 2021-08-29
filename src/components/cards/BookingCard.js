/* eslint-disable jsx-a11y/img-redundant-alt */
import {currencyFormatter} from '../../actions/stripe'
import React from 'react'
import Image from 'react-image-resizer';
import { diffDays } from "../../actions/glamping";
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import { useState } from 'react';
import OrderModal from '../modals/OrderModal';




const BookingCard = ({ glamping, session, orderedBy}) => {
  const fromTime = moment(glamping.from).format('YYYY-MM-DD')
  const toTime = moment(glamping.to).format('YYYY-MM-DD')
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            {glamping.image && glamping.image.contentType ? (
              <Image
                src={`${process.env.REACT_APP_API}/glamping/image/${glamping._id}`}
                alt="default hotel image"
                className="card-image img img-fluid"
                height={ 250 }
                width={ 400 }
              />
            ) : (
              <img
                src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
                alt="default hotel image"
                className="card-image img img-fluid"
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                {glamping.title} 
                <span className="float-right text-primary">
                  {currencyFormatter({
                    amount: glamping.price,
                    currency: "jpn",
                  })}円
                </span>{" "}
              </h3>
              <p className="alert alert-info">{glamping.location}</p>
              <p className="card-text">{`${glamping.content.substring(0, 200)}...`}</p>
              <p className="card-text">
                <span className="float-right text-primary">
                  for {diffDays(glamping.from, glamping.to)}{" "}
                  {diffDays(glamping.from, glamping.to) <= 1 ? 'day' : 'days'}
                </span>
              </p>
              <p className="card-text">〜{glamping.person}人</p>
              <p className="card-text">{fromTime}〜{toTime}まで</p>
              {showModal && <OrderModal session={session} orderedBy={orderedBy} showModal={showModal} setShowModal={setShowModal} />}
              <div className="d-flex justify-content-between h4">
                <button
                  onClick={() => setShowModal(!showModal)}
                  className="btn btn-primary"
                >
                  明細を確認する
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingCard

/* eslint-disable jsx-a11y/img-redundant-alt */
import {currencyFormatter} from '../../actions/stripe'
import React from 'react'
import Image from 'react-image-resizer';
import { diffDays } from "../../actions/glamping";
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'


const SmallCard = ({g, handleGlampingDelete = (f) => f}) => {
  const fromTime = moment(g.from).format('YYYY-MM-DD')
  const toTime = moment(g.to).format('YYYY-MM-DD')
  const history = useHistory();
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            {g.image && g.image.contentType ? (
              <Image
                src={`${process.env.REACT_APP_API}/glamping/image/${g._id}`}
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
                {g.title} 
                <span className="float-right text-primary">
                  {currencyFormatter({
                    amount: g.price,
                    currency: "jpn",
                  })}円
                </span>{" "}
              </h3>
              <p className="alert alert-info">{g.location}</p>
              <p className="card-text">{`${g.content.substring(0, 200)}...`}</p>
              <p className="card-text">
                <span className="float-right text-primary">
                  for {diffDays(g.from, g.to)}{" "}
                  {diffDays(g.from, g.to) <= 1 ? 'day' : 'days'}
                </span>
              </p>
              <p className="card-text">〜{g.person}人</p>
              <p className="card-text">{fromTime}〜{toTime}まで</p>
              <div className="d-flex justify-content-between h4">
                <button 
                  onClick={() =>　history.push(`/glamping/${g._id}`)} 
                  className="btn btn-primary"
                >
                  詳細を確認する
                </button>
                <Link to={`glamping/edit${g._id}`}>
                  <EditOutlined className="text-warning"/>
                </Link>
                <DeleteOutlined 
                  onClick={() => handleGlampingDelete(g._id)}
                  className="text-danger"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SmallCard

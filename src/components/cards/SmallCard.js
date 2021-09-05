/* eslint-disable jsx-a11y/img-redundant-alt */
import {currencyFormatter} from '../../actions/stripe'
import React from 'react'
import Image from 'react-image-resizer';
import { diffDays } from "../../actions/glamping";
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'


const SmallCard = ({
  glamping,
  handleGlampingDelete = (f) => f,
  owner = false,
  showViewMoreButton = true,
}) => {
  const fromTime = moment(glamping.from).format('YYYY-MM-DD')
  const toTime = moment(glamping.to).format('YYYY-MM-DD')
  const history = useHistory();
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

              <Image
                src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
                alt="default hotel image"
                className="card-image img img-fluid"
                height={ 250 }
                width={ 400 }
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
              <p className="card-text">{`${glamping.content.substring(0, 20)}...`}</p>
              <p className="card-text">
                <span className="float-right text-primary">
                  for {diffDays(glamping.from, glamping.to)}{" "}
                  {diffDays(glamping.from, glamping.to) <= 1 ? 'day' : 'days'}
                </span>
              </p>
              <p className="card-text">〜{glamping.person}人</p>
              <p className="card-text">{fromTime}〜{toTime}まで</p>
              <div className="d-flex justify-content-between h4">
                {showViewMoreButton &&(
                  <button
                    onClick={() =>　history.push(`/glamping/${glamping._id}`)} 
                    className="btn btn-primary"
                  >
                    詳細を確認する
                  </button>
                )}
                {owner && ( 
                  <>
                    <Link to={`/glamping/edit/${glamping._id}`}>
                      <EditOutlined className="text-warning"/>
                    </Link>
                    <DeleteOutlined 
                      onClick={() => handleGlampingDelete(glamping._id)}
                      className="text-danger"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SmallCard

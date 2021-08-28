import React from 'react'

const StripeSuccess = ({match}) => {
  return (
    <div className="container">
      <div className="col">
        <h2 className="text-center">
          決済が成功しました。{match.params.glampingId}
        </h2>
      </div>
    </div>
  )
}

export default StripeSuccess

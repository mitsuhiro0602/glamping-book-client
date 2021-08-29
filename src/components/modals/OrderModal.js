import { Modal } from 'antd';

const OrderModal = ({session, orderedBy, showModal, setShowModal}) => {
  return (
    <Modal 
      visible={showModal} 
      title="詳細" 
      onCancel={() => setShowModal(!showModal)}
    >
    <p>決済番号: {session.payment_intent}</p>
    <p>決済ステータス: {session.payment_status}</p>
    <p>合計金額: {session.amount_total}{""}円</p>
    <p> StripeアカウントID: {session.customer}</p>
    <p>顧客名: {orderedBy.name}</p>
    </Modal>
  )
};

export default OrderModal
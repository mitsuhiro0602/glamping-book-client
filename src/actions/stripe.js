import axios from 'axios';
import { AccordionCollapse } from 'react-bootstrap';

export const createConnectAccount = async (token) => 
  await axios.post(
    `${process.env.REACT_APP_API}/create-connect-account`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
    },
  }
);

export const getAccountStatus = async (token) => 
  axios.post(`${process.env.REACT_APP_API}/get-account-status`, 
  {},
  {
    headers: {
      AUthorization: `Bearer ${token}`,
    },
  }
);

export const getAccountBalance = async (token) => 
  axios.post(`${process.env.REACT_APP_API}/get-account-balance`, 
  {},
  {
    headers: {
      AUthorization: `Bearer ${token}`,
    },
  }
);

export const currencyFormatter = data => {
  return data.amount
};

export const payoutSetting = async(token) => 
  await axios.post(`${process.env.REACT_APP_API}/payout-setting`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

export const getSessionId = async (token, glampingId) => 
  await axios.post(
    `${process.env.REACT_APP_API}/stripe-session-id`,
    {
      glampingId,
    },
    { headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const stripeSuccessRequest = async(token, glampingId) =>
  await axios.post(`${process.env.REACT_APP_API}/stripe-success`, {glampingId}, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
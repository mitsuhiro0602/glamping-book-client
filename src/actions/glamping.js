import axios from 'axios'

export const createGlamping = async(token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/create-glamping`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const allGlampings = async () => 
  await axios.get(`${process.env.REACT_APP_API}/glampings`);

export const diffDays = (from, to) => {
  const day = 24 * 60 * 60 * 1000;
  const start = new Date(from)
  const end = new Date(to)
  const difference = Math.round(Math.abs((start - end) / day))
  return difference;
};

export const sellerGlampings = async (token) => await axios.get(`${process.env.REACT_APP_API}/seller-glampings`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const deleteGlamping = async (token, glampingId) => await axios.delete(`${process.env.REACT_APP_API}/delete-glamping/${glampingId}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const read = async(glampingId) => 
await axios.get(`${process.env.REACT_APP_API}/glamping/${glampingId}`);

export const updateGlamping = async(token, data, glampingId) =>
  await axios.put(`${process.env.REACT_APP_API}/update-glamping/${glampingId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const userGlampingBookings = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/user-glamping-bookings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

export const isAlreadyBooked = async (token, glampingId) =>
  await axios.get(`${process.env.REACT_APP_API}/isalready-booked/${glampingId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

export const searchListings = async(query) => 
  await axios.post(`${process.env.REACT_APP_API}/search-listings`, query);
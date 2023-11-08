import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const getAllTravelBooks = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/travel`);
    return { data, success: true };
  } catch (err) {
    return { data: {}, success: false };
  }
};

export { getAllTravelBooks };

import axios from "axios";

const makeRequest = async (configOption, navigate) => {
  try {
    const { data } = await axios(configOption);
    return data;
  } catch (error) {
    navigate(`/error/${error?.code.toLowerCase()}`);
  }
}

export default makeRequest;
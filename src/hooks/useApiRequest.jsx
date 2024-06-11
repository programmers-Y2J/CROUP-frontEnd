import axios from 'axios';

const useApiRequest = () => {
  const apiRequest = async ({ method, url, data, headers }) => {
    const response = await axios({
      method,
      url: `${process.env.REACT_APP_API_URL}${url}`,
      data,
      headers,
    });
    return response.data;
  };

  return { apiRequest };
};

export default useApiRequest;

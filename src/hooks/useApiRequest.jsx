import axios from 'axios';

const useApiRequest = () => {
  const apiRequest = async ({ method, url, data, headers }) => {
    console.log(data);
    const response = await axios({
      method,
      url: `${process.env.REACT_APP_BASE_URL}${url}`,
      // url: `https://fe45-180-67-55-134.ngrok-free.app${url}`,
      data,
      headers,
    });
    return response.data;
  };

  return { apiRequest };
};

export default useApiRequest;

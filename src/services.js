import axios from "axios";

const service = {
  endpoint: "https://google-doodles.herokuapp.com/doodles",
};

const get = (year, month) => {
  const config = {
    method: "GET",
    url: `${service.endpoint}/${year}/${month}`,
    withCredentials: false,
    crossdomain: true,
    headers: { "Content-type": "application/json" },
  };
  return axios(config);
};

export { get };

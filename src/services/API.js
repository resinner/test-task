import axios from "axios";

const BASE_URL = "https://6446b29d0431e885f0198560.mockapi.io";

async function fetchData(pathParams) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: { "Content-Type": "application/json" },
  });

  return await axiosInstance.get();
}

async function patchUser(pathParams, body) {
  return axios.put(`${BASE_URL}${pathParams}`, JSON.stringify(body), {
    headers: { "content-type": "application/json" },
  });
}

export { fetchData, patchUser };

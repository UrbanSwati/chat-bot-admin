/* eslint-disable prettier/prettier */
import axios from "axios";
axios.defaults.baseURL = "https://pg5ydjn92i.execute-api.eu-west-1.amazonaws.com/Prod/";
// axios.defaults.headers["Authorization"] = "bearer " + localStorage.getItem("token");
axios.interceptors.request.use(
    config => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );
// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     console.log(error.response.data);
//     const authStore = useAuthStore();
//     if (error.response.status === 401) {
//       authStore.logout();
//     }
//     return Promise.reject(error);
//   }
// );

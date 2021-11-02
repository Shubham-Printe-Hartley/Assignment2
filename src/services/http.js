import axios from "axios";
import Config from '../config/config.json';

// configuring axios - urls, headers etc
axios.defaults.baseURL = Config.base_url;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

// NOTE: below code is not understood yet. 
// UPDATE: some pre-processing to finalise request configuration
// for this particular assignment it is not required.
// axios.interceptors.request.use(function (config) {
//   if (
//       config.method === "get" &&
//       config.params &&
//       config.params.use_base_report_url
//   ) {
//     config.baseURL = Config.report_url;
//   }
  
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   if(config.data && config.data.params){
//     delete config.data.params
//   }else if (config.params){
//       delete config.params
//   }
//   return config;
// }, null);

// handling unexpected errors
axios.interceptors.response.use(null, error => {  
  const expectedError = 
    error.response &&
    error.response.status >=400 &&
    error.response.status <=500;

    if(!expectedError) {
      console.log("Unexpected Error", error);
    }

    return Promise.reject(error);
})

// exporting axios method as custom http methods
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}

export default http
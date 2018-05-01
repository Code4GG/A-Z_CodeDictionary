import axios from "axios";
import qs from "qs";

export default {
  // Create new user route
  newUser: (username, password) => {
    const data = {
      username, 
      password
    };
    
    return axios.post("/api/newUser", data);
  },

  // Retrieve user information route
  logIn: (username, password) => {
    return axios.get(`/api/logIn/${username}/${password}`);
  },

  addWord: (word, definition) => {
    const data = {
      word,
      definition
    };
    return axios.post("/api/addWord", data);
  },

  //Get saved jobs by user
  getEvents: (id) => {
    return axios.get(`/api/getEvents/${id}`);
  },

  newEvent: (data) => {
    return axios.get('/api/newEvent', data);
  }
}


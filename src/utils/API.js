import axios from "axios";

// API Random User
const URL = 'https://randomuser.me/api/?results=150&nat=us'

export default{
  searchEmployees: function() {
    return axios.get(URL);
  }
}
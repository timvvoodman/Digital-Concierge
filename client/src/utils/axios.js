import axios from 'axios'

const API = {
  //YELP API//
  getRestaurants: function () {
    return axios.get('/api/food')
  },

  getActivities: function () {
    return axios.get('/api/activities')
  },

  register: function (email, password) {
    return axios.post('/api/register', { email, password })
  },

  //AUTHENTICATION//
  login: function (email, password) {
    return axios.post('/api/login', { email, password }).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
  },

  logout: function () {
    localStorage.removeItem('user')
  },

  getCurrentUser: function () {
    return JSON.parse(localStorage.getItem('user'))
  },
}

export default API

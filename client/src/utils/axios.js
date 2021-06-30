import axios from 'axios'

const API = {
  getRestaurants: function () {
    return axios.get('/api/food')
  },

  getActivities: function () {
    return axios.get('/api/activities')
  },

  deleteBook: function (id) {
    return axios.delete('/api/books/' + id)
  },
}

export default API

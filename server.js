const express = require('express')
const PORT = 3001
const app = express()
const path = require('path')
require('dotenv').config()
//Yelp Requirements
const yelp = require('yelp-fusion')
const client = yelp.client(
  'IiRPB7JhQGA14TwDJE-kYyf2XLGMTOEXp30bEeTEOcI2KJzkCSDLy7v9bduDKVcun7HiXlPoT3yAg1db6agxVI_J0zI3qoRop_JXk1hODyz7-UYsY9GQ-B2xpzvTYHYx'
)
//Middleware
app.use(express.json())

//Routes//

//API//

//Resaurants
app.get('/api/food', async (req, res) => {
  try {
    const data = await findBusinesses(
      'restaurants',
      ' 14 Red Coat Ln Hampton, NH 03842',
      25,
      'distance'
    )

    res.json(data)
  } catch (error) {
    console.log(error)
  }
})

//Entertainmant
app.get('/api/activities', async (req, res) => {
  try {
    const data = await findBusinesses(
      'Arts & Entertainment',
      ' 14 Red Coat Ln Hampton, NH 03842',
      25,
      'review_count'
    )
    res.json(data)
  } catch (error) {
    console.log(error)
  }
})

/// Yelp-Fusion Business Search Function ///
function findBusinesses(term, location, limit, sort) {
  const result = client
    .search({
      term: term,
      location: location,
      limit: limit,
      sort_by: sort,
    })
    .then((response) => {
      let data = response.jsonBody.businesses
      return data
    })
    .catch((e) => {
      console.log(e)
    })
  return result
}
////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

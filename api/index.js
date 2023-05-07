const express = require('express')
const NodeCache = require('node-cache')
const cors = require('cors')
const myCache = new NodeCache({ stdTTL: 600 })
const { TOKEN, CORS_CONFIG } = require('./config.js')
const getData = require('./fetch.js')

const app = express()
const port = 3000

app.get('/', cors(CORS_CONFIG), async (req, res) => {
  const cachedData = myCache.get('git')

  if (cachedData) {
    console.log(`We served a hit from cache at ${new Date().toISOString()}`)
    return res.send(cachedData)
  }

  const data = await getData(TOKEN, 'garethweaver')
  myCache.set('git', data)
  console.log(`We fetched from the git api ${new Date().toISOString()}`)
  return res.send(data)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

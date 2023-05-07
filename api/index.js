const { parsed: { TOKEN } } = require('dotenv-safe').config()
const express = require('express')
const NodeCache = require('node-cache')
const myCache = new NodeCache({ stdTTL: 600 })
const app = express()
const port = 3000

async function getData(token, username) {
  const headers = {
      'Authorization': `bearer ${token}`,
  }
  const body = {
      "query": `query {
        user(login: "${username}") {
          name
          avatarUrl
          createdAt
          url
          repositories(last: 3, orderBy: {field: UPDATED_AT, direction: ASC}) {
            totalCount
            totalDiskUsage
            nodes {
              name
              url
            }
          }
        }
      }`
  }
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  })
  return await response.json()
}

app.get('/', async (req, res) => {
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

const getData = async (token, username) => {
  const headers = {
      'Authorization': `bearer ${token}`,
  }
  const body = {
    query: `query {
      user(login: "${username}") {
        name
        avatarUrl
        createdAt
        url
        login
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

module.exports = getData

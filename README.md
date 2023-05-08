# Git profile info

Simple express app which fetches some of my basic git activity to serve on my [personal website](https://www.garethweaver.com). Returns JSON from memory cache or from the github api and caches to memory.

You can [explore the github GraphQL API here](https://docs.github.com/en/graphql/overview/explorer).

The app is [deployed to Vercel here](https://git-profile-info.vercel.app).

After Twitter restricted their free API usage I decided to swap over to show some git bio info on my website.

### Example data

```
const response = await fetch('https://git-profile-info.vercel.app')
const json = await response.json()
```

```
{
  "data": {
    "user": {
      "name": "Gareth Weaver",
      "avatarUrl": "https://avatars.githubusercontent.com/u/1575677?u=38d1c1fc67386cdee36f6c2c545e143dfa46c5b0&v=4",
      "createdAt": "2012-03-26T10:05:46Z",
      "url": "https://github.com/garethweaver",
      "repositories": {
        "totalCount": 34,
        "totalDiskUsage": 725574,
        "nodes": [
          {
            "name": "astro-docker",
            "url": "https://github.com/garethweaver/astro-docker"
          },
          {
            "name": "simple-buzzer",
            "url": "https://github.com/garethweaver/simple-buzzer"
          },
          {
            "name": "soundboard",
            "url": "https://github.com/garethweaver/soundboard"
          }
        ]
      }
    }
  }
}
```

# Git profile info

Simple express app which fetches some of my basic git activity to serve on my [personal website](https://www.garethweaver.com). Returns JSON from memory cache or from the github api and also caching.

After Twitter restricted their free API usage I decided to swap over to show some git info on my website.

### Example data

```
{
  "data":{
    "user":{
      "name":"Gareth Weaver",
      "avatarUrl":"https://avatars.githubusercontent.com/u/1575677?u=38d1c1fc67386cdee36f6c2c545e143dfa46c5b0&v=4",
      "createdAt":"2012-03-26T10:05:46Z",
      "repositories":{
        "totalCount":34,
        "totalDiskUsage":725574
      },
      "url":"https://github.com/garethweaver"
    }
  }
}
```

if (process.env.NODE_ENV !== 'production') {
  require('dotenv-safe').config()
}

module.exports = {
  TOKEN: process.env.TOKEN,
  CORS_CONFIG: {
    origin: ['https://www.garethweaver.com', 'http://localhost:3000', 'https://public-site-astro.vercel.app'],
  },
}

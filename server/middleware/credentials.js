const allowedOrigins = require('../config/allowedOrigin')
const credentials = (req, res, next) => {
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.headers('Acess-Control-Allow-Credentials', true)
  }
  next()
}
module.exports = credentials

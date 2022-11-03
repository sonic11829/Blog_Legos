const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.legos)
    },
    show (req, res, next) {
      res.json(res.locals.data.lego)
    }
  }
  // things
  module.exports = apiController
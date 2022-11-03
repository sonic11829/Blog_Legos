const Lego = require('../models/lego.js')

const dataController = {
    index (req, res, next) {
        Lego.find({ username: req.session.username }, (err, allLegos) => {
            if (err) {
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.legos = allLegos
                next()
            }
        })
    },
    create (req, res, next) {
        req.body.username = req.session.username
        Lego.create(req.body, (err, createdLego) => {
            if (err) {
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.lego = createdLego
                next()
            }
        })
    },
    show (req, res, next) {
        Lego.findById(req.params.id, (err, foundLego) => {
            if (err) {
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.lego = foundLego
                next()
            }
        })
    },
    update (req, res, next) {
        Lego.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLego) => {
            if (err) {
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.lego = updatedLego
                next()
            }
        })
    },
    destroy (req, res, next) {
        Lego.findByIdAndRemove(req.params.id, (err, lego) => {
            if (err) {
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.lego = lego
                next()
            }
        })
    }
}
// things
module.exports = dataController
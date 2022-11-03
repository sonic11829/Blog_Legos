const RESOURCE_PATH = '/legos'
const viewController = {
    index (req, res, next) {
        res.render('legos/Index', res.locals.data)
    },
    show (req, res, next) {
        res.render('legos/Show', res.locals.data)
    },
    edit (req, res, next) {
        res.render('legos/Edit', res.locals.data)
    },
    newView (req, res, next) {
        res.render('legos/New')
    },
    redirectHome (req, res, next) {
        res.redirect(RESOURCE_PATH)
    },
    redirectShow (req, res, next) {
        const legoId = req.params.id || res.locals.data.lego._id
        res.redirect(`${RESOURCE_PATH}/${legoId}`)
    }
}

module.exports = viewController
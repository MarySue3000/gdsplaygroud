//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/nunjucks/email', (req, res) => {
    res.redirect('/nunjucks/code')
})

router.post('/nunjucks/code', (req, res) => {
    res.redirect('/nunjucks/name')
})

router.post('/nunjucks/name', (req, res) => {
    res.redirect('/nunjucks/nationality')
})

router.post('/nunjucks/nationality', (req, res) => {
    res.redirect('/nunjucks/balls')
})
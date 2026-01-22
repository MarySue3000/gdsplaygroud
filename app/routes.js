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



// router.post('/nunjucks/balls', (req, res) => {
//     if(req.body.nunjucks.balls == "0") {
//     res.redirect('/nunjucks/exit')

//  } else {

//     res.redirect('/nunjucks/trick')
// }
// })

router.post('/nunjucks/balls', (req, res) => {
    // Safely read the value; avoids crash if nothing selected
    const balls = req.body?.nunjucks?.balls;

    if (balls === "0") {
        return res.redirect('/nunjucks/exit');

    } else if (balls === "1 or 2" || balls === "3 or more") {
        return res.redirect('/nunjucks/trick');

    } else {
        // This covers: nothing selected, undefined, empty, or unexpected value
        return res.redirect('/nunjucks/balls-error');
    }
});

router.post('/nunjucks/balls-error', (req, res) => {
    // Safely read the value; avoids crash if nothing selected
    const balls = req.body?.nunjucks?.balls;

    if (balls === "0") {
        return res.redirect('/nunjucks/exit');

    } else if (balls === "1 or 2" || balls === "3 or more") {
        return res.redirect('/nunjucks/trick');

    } else {
        // This covers: nothing selected, undefined, empty, or unexpected value
        return res.redirect('/nunjucks/balls-error');
    }
});
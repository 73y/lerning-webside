const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('list/recipes.ejs');
})

module.exports = router
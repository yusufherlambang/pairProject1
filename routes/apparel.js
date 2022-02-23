const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('router apparel')
})

module.exports = router
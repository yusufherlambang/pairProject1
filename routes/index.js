const express = require('express')
const router = express.Router()
const userRoutes = require('./user')
const profileRoutes = require('./profile')
const apparelRoutes = require('./apparel')
const shoppingCartRoutes = require('./shoppingCart')

router.get('/', (req, res) => {
    res.send('home')
}) // router khusus home

router.use('/user', userRoutes)
router.use('/profile', profileRoutes)
router.use('/apparel', apparelRoutes)
router.use('/shoppingCart', shoppingCartRoutes)


module.exports = router
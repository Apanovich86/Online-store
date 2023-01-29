const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const brandRouter = require('./brandRouter')

router.use('/users', userRouter)
router.use('/categories', categoryRouter)
router.use('/brands', brandRouter)
router.use('/devices', deviceRouter)

module.exports = router

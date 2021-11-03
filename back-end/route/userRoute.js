const router = require('express').Router()
const user = require('../controller/userController')
router.get('/getUsers',user.getUsers)
router.post('/addUser',user.addUser)
router.post('/signin',user.addUser)
router.delete('/deleteUser/:id',user.deleteUser)
router.put('/updateUser/:id',user.updateUser)
module.exports = router

